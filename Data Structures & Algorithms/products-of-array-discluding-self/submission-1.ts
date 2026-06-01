class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefix = this.getPrefix(nums);
        const postfix = this.getPostfix(nums);

        return nums.map((_, idx) => prefix[idx] * postfix[idx]);
        
    }

    getPrefix(nums: number[]): number[] {
        const prefix = [1];
        for(let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[prefix.length - 1];
        }
        return prefix;
    }

    getPostfix(nums: number[]): number[] {
        const postFix = [1];
        for(let i = nums.length - 2; i >= 0; i--) {
            const newElement = nums[i + 1] * postFix[0];
            postFix.unshift(newElement);
        }
        return postFix;
    }
}