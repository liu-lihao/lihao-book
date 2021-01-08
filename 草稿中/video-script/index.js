/**
 * 为了看视频看的更爽，注入该脚本后，使得视频可以使用快捷键、顶部显示进度、title显示进度。
 */
(() => {
  const videoScript = (
    getVideoDom = () => window.document.getElementsByTagName("video")[0]
  ) => {
    const videoDom =
      typeof getVideoDom === "function" ? getVideoDom() : videoDom;
    if (!videoDom) {
      if (typeof getVideoDom === "function") {
        setTimeout(videoScript, 1000, getVideoDom);
      }
      return;
    }
    const config = (window.$_VIDEO_CONFIG = {
      gap: 8, // 左右键前进后退的秒数
      mateGap: 0.05, // command + 左、右 前进后退视频的百分比
    });
    // 节流
    const throttle = (fn, time = 500) => {
      let canRun = true;
      return function() {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
          fn.apply(this, arguments);
          canRun = true;
        }, time);
      };
    };
    // 格式化 video 秒数 => 00:00
    const formatSeconds = (seconds) => {
      const onlySeconds = seconds % 60;
      const minutes = seconds / 60;
      const formatNum = (num) =>
        Math.floor(num)
          .toString()
          .padStart(2, "0");
      return `${formatNum(minutes)}:${onlySeconds.toFixed(0).padStart(2, "0")}`;
    };

    // 按键
    const KeyCodeMap = {
      Enter: "Enter",
      Space: " ",
      ArrowLeft: "ArrowLeft",
      ArrowRight: "ArrowRight",
    };
    const hasAllowCode = (code, allowCodes) => {
      allowCodes = [].concat(allowCodes);
      return allowCodes.some((item) => item === code);
    };

    // 视频操作API
    const videoRuntime = (videoDom) => {
      return {
        isPaused() {
          return videoDom.paused;
        },
        play() {
          videoDom.play();
        },
        pause() {
          videoDom.pause();
        },
        getCurrentTime() {
          return videoDom.currentTime;
        },
        setCurrentTime(time) {
          videoDom.currentTime = time;
        },
        getDuration() {
          return videoDom.duration;
        },
      };
    };
    const videoOps = videoRuntime(videoDom);

    // 标题操作API
    const setDocumentTitle = () => {
      let task = null; // 定时器
      let nowIndex = 0;
      const gap = 700; // title 切换间隔
      const titleList = []; // { key: 'xx', title: 'xx' }

      // MAP
      let keyMap = {}; // { [key]: [index] }
      const updateMap = () => {
        keyMap = titleList.reduce((a, v, i) => {
          a[v.key] = i;
          return a;
        }, {});
      };
      const hasKey = (key) => {
        return typeof keyMap[key] === "number";
      };

      // 操作
      const push = (titleItem) => {
        if (titleItem && typeof titleItem === "object" && titleItem.key) {
          titleList.push({ ...titleItem });
          updateMap();
        }
      };
      const set = (key, title) => {
        if (hasKey(key)) {
          titleList[keyMap[key]].title = title;
        } else {
          push({ key, title });
        }
      };
      const deleteItem = (key) => {
        if (!hasKey(key)) return false;
        const index = keyMap[key];
        titleList.splice(index, 1);
        updateMap();
      };
      const setDocumentTitle = (title) => {
        document.title = title;
      };
      const changeNextTitle = () => {
        const len = titleList.length;
        if (!len) {
          return setDocumentTitle("");
        }
        const nextIndex = nowIndex >= len - 1 ? 0 : nowIndex + 1;
        nowIndex = nextIndex;
        setDocumentTitle(titleList[nextIndex].title);
      };
      const start = () => {
        clearInterval(task);
        task = setInterval(() => {
          changeNextTitle();
        }, gap);
      };
      const stop = () => {
        clearInterval(task);
        setDocumentTitle(titleList[keyMap["default"]].title);
      };
      const init = () => {
        nowIndex = 0;
        push({
          key: "default",
          title: document.title,
        });
        start();
      };

      return {
        init,
        delete: deleteItem,
        push,
        set,
        stop,
      };
    };
    const titleOps = setDocumentTitle();

    // video 事件监听
    const videoEventsMap = {
      timeupdate: throttle(() => {
        const nowTime = formatSeconds(videoOps.getCurrentTime());
        const allTime = formatSeconds(videoOps.getDuration());
        titleOps.set("video-currentTime", `⏯ ${nowTime} / ${allTime}`);
      }),
      play() {
        titleOps.delete("video-status");
      },
      pause() {
        titleOps.set("video-status", "⏸ 暂停中");
      },
      ended() {
        // 避免 timeupdate throttle 的 set 冲突
        setTimeout(() => titleOps.delete("video-currentTime"), 1000);
        titleOps.set("video-status", "🔚 播放完毕");
      },
    };

    const run = () => {
      Object.keys(videoEventsMap).forEach((eventName) => {
        videoDom.addEventListener(eventName, videoEventsMap[eventName]);
      });

      // 执行逻辑
      titleOps.init();
      // 闪烁10s脚本加载成功
      titleOps.push({ key: "video-script-success", title: "视频脚本加载成功" });
      setTimeout(() => {
        titleOps.delete("video-script-success");
      }, 10000);
      document.body.addEventListener("keydown", (e) => {
        if (hasAllowCode(e.key, [KeyCodeMap.Enter, KeyCodeMap.Space])) {
          e.preventDefault();
          if (videoOps.isPaused()) {
            videoOps.play();
          } else {
            videoOps.pause();
          }
        } else if (
          hasAllowCode(e.key, [KeyCodeMap.ArrowLeft, KeyCodeMap.ArrowRight])
        ) {
          e.preventDefault();
          const gap = e.metaKey
            ? videoOps.getDuration() * config.mateGap
            : config.gap;
          if (hasAllowCode(e.key, KeyCodeMap.ArrowLeft)) {
            videoOps.setCurrentTime(videoOps.getCurrentTime() - gap);
          } else if (hasAllowCode(e.key, KeyCodeMap.ArrowRight)) {
            videoOps.setCurrentTime(videoOps.getCurrentTime() + gap);
          }
        }
      });
    };

    run();
  };

  videoScript();
})();
