class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let frequencyMap = {};
        for (let val of nums) {
            frequencyMap[val] = (frequencyMap[val] || 0) + 1;
        }
        for (let key in frequencyMap) {
            if (frequencyMap[key] > 1){
                return true;
            }
        }
        return false;
    }
}
