class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        let buckets = new Array(nums.length);

        for(let i = 0; i < nums.length; i++) {
            const key = nums[i];

            const freq = map.has(key) ? map.get(key) + 1 : 1;
            map.set(key, freq);
        }

        for(let [key, value] of map.entries()) {
            if(buckets[value]) {
                buckets[value].push(key);
            }
            else {
                buckets[value] = [key];
            }
        }

        const topFrequent = [];

        buckets.reverse().forEach((item, _) => {
            if(topFrequent.length < k) {
                topFrequent.push(...item)
            }
        });
        
        return topFrequent;
    }
}
