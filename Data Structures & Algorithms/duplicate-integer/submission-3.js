class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set(); // bag of things we've already encountered
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) return true; // seen.has(x) → instant yes/no, no scan
            seen.add(nums[i]); // record that we've now seen this number
        }
        return false;
    }
}
