;(() => {
  const DARK_THEME_CLASS = 'dark-theme'
  const changeTheme = () => {
    const htmlDom = document.querySelector('html')
    const isDark = htmlDom.className.includes(DARK_THEME_CLASS)
    if (isDark) {
      htmlDom.className = htmlDom.className
        .replace(DARK_THEME_CLASS, '')
        .replace(/\s+/g, ' ')
        .replace(/^\s/, '')
        .replace(/\s$/, '')
      localStorage.THEME = 'default-theme'
    } else {
      htmlDom.className =
        htmlDom.className.replace(/\s+/g, ' ') + ' ' + DARK_THEME_CLASS
      localStorage.THEME = DARK_THEME_CLASS
    }
  }
  const initTheme = () => {
    if (localStorage.THEME === DARK_THEME_CLASS) {
      changeTheme()
    } else if (
      !localStorage.THEME &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      changeTheme()
    }
  }
  initTheme()
  window.$changeTheme = changeTheme
})()
