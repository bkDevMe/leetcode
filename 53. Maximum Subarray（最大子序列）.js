/* 暴力求解
时间复杂度：O(n^3)
空间复杂度： O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum;
    for (let i = 0; i < nums.length; i++) { //子序列左端点
        for (let j = i; j < nums.length; j++) { //子序列右端点
            sum = 0;
            for (let k = i; k <= j; k++) {
                sum += nums[k];
            }
            max = sum > max ? sum : max;
        }
    }
    return max;
};

// 暴力求解改进版
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)
// 观察发现每次都重复计算部分，现在做法减少一次循环
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) { //左边子序列
        sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) { //右边子序列
            sum += nums[j];
            max = Math.max(max, sum);
        }
    }
    return max;
};

// 扫描法
//时间复杂度：O(n)
//空间复杂度：O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum = sum > 0 ? (sum + nums[i]) : nums[i];
        max = max > sum ? max : sum;
    }
    return max;
};


//递归，分治算法求解
//时间复杂度：O(NlogN)
//空间复杂度度：O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0] >= 0 ? nums[0] : 0;

    var l = nums.length;
    var mid = Math.floor(l / 2);

    var leftAry = nums.slice(0, mid);
    var rightAry = nums.slice(mid);

    var leftResult = maxSubArray(leftAry);
    var rightResult = maxSubArray(rightAry);
    
    var leftMax = 0;
    var leftSum = 0;
    for (var i = mid - 1; i >= 0; i--) {
        leftSum += nums[i];
        if (leftSum > leftMax) {
            leftMax = leftSum;
        }
    }

    var rightMax = 0;
    var rightSum = 0;
    for (var i = mid ; i < l; i ++) {
        rightSum += nums[i];
        if (rightSum > rightMax) {
            rightMax = rightSum;
        }
    }

    var midResult = leftMax + rightMax;
    

    return Math.max(midResult, leftResult, rightResult);
}