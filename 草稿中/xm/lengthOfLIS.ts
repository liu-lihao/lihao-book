function lengthOfLIS(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length
  }

  // dp[i] 代表长度为 i + 1 递增子序列（可能多个序列）最大值中的最小值
  const dp = [nums[0]]
  for(let i = 1; i < nums.length; i++) {
    const num = nums[i]
    if (num > dp[dp.length - 1]) {
      dp.push(num)
      continue
    }
    let start = 0
    let end = dp.length - 1
    while(start <= end) {
      const mid = Math.floor((start + end) / 2)
      if (num === dp[mid]) {
        start = mid
        break
      }
      if (num > dp[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
    dp[start] = num
  }

  return dp.length
};
