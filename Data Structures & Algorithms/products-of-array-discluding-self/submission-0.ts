class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = [...nums];
        for(let i = 0; i < result.length; i++) {
            let product = nums.reduce(((accumulator, value, idx) => {
                if(idx === i) {
                    return accumulator;
                }
                return value * accumulator;
            }), 1);

            result[i] = product;
        }

        return result;
    }
}
