// 题目:https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 解法一:
// 思路:枚举数组中的每一个数x,寻找数组中是否存在target-x。
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // 每一个位于x之前的元素都已经和x匹配过，因此不能进行重复匹配。
        // 而每一个元素不能被使用两次，所以我们只需要在x后面的元素中寻找 target-x。
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === target - nums[j]) {
          return [i, j]
        }
      }
    }
  };
  
// 复杂度分析:
// 时间复杂度：O(N^2) ,其中 NN 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次.
// 空间复杂度：O(1)。


// 解法二:使用hashMap,先遍历一遍数组，建立Map映射，然后再遍历一遍，开始查找，找到则记录index.
var twoSum = function (nums, target) {
    let result = [];
    let map = new Map();
    // 遍历一遍数组, 将数组中每个值和对应的索引 做一个映射
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i);
    }
    // 再遍历一遍数组
    for (let i = 0; i < nums.length; i++) {
      // 循环每一个元素的时候 都将目标值算出来
      let anotherOne = target - nums[i];
      // 检查 map 中是否包含这个元素，且对应的索引不能是当前的这个索引
      if (map.has(anotherOne) && map.get(anotherOne) !== i) {
        // 找到则放进数组
        result.push(i);
        result.push(map.get(anotherOne))
        break;
      }
    }
    // 返回结果
    return result
  };
  
//   复杂度分析

//   时间复杂度: O(N), 其中 N 是数组中的元素数量。对于每一个元素 x，我们可以 O(1) 地寻找 target - x。
//   空间复杂度: O(N), 其中 NN 是数组中的元素数量。主要为哈希表的开销。

// 解法三:第二步的优化,核心思路移形换位

var twoSum = function(nums, target){
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if (map.has(nums[i])){
            return [map.get(nums[i]),i];
        }else{
            map.set(target-nums[i],i);
        }
    }
}
