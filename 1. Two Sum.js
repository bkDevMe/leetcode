// 暴力求解 双重循环
// 时间复杂度：O(n2);
// 空间复杂度：O(1);
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let aa = [];
    for(let i = 0; i < nums.length;i++)
        for(let j = i + 1; j < nums.length; j++)
            if(nums[i] + nums[j] == target){
                aa.push(i);
                aa.push(j);
                return aa;
            }
};

//映射的方式
//时间复杂度：O(n)
//空间复杂度：O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ss = {};
    for(let i = 0; i < nums.length; i++) {
        let bk = target - nums[i];
        if(bk in ss) {
            return [ss[bk],i];
        } else {
            ss[nums[i]] = i;
        }
    }
};


