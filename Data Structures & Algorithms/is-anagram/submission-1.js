class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let frequencyCounterS = {};
        let frequencyCounterT = {};
        for (let val of s){
            frequencyCounterS[val] = (frequencyCounterS[val] || 0) + 1;
        }
        for (let val of t){
            frequencyCounterT[val] = (frequencyCounterT[val] || 0) + 1;
        }
        for (let key in frequencyCounterS){
            if(frequencyCounterS[key] !== frequencyCounterT[key]) return false;
        }
        for (let key in frequencyCounterT){
            if(frequencyCounterS[key] !== frequencyCounterT[key]) return false;
        }
        return true;
    }
}
