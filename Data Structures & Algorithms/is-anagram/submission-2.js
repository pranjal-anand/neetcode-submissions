class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;   // quick length check
        let frequencyCounterS = {};
        for (let char of s){
            frequencyCounterS[char] = (frequencyCounterS[char] || 0) + 1;
        }
        for (let char of t){
            if (!frequencyCounterS[char]) return false;   // either missing or zero
            frequencyCounterS[char]--;
        }
        
        return true; // all counts balanced
    }
}
