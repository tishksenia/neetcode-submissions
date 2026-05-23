class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const lookups = new Map();
        for(let i = 0; i < nums.length; i++) {
            const targetValue = target - nums[i];

            if(lookups.has(targetValue)) {
                return [lookups.get(targetValue), i];
            }

            lookups.set(nums[i], i);
        }

        return [];
    }
}
