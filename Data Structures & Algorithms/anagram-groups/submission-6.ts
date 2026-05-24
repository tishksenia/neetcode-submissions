class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map();

        for(let str of strs) {
            const key = this.calculateFrequencyArray(str).join(',');

            if(groups.has(key)) {
                groups.set(key, [...groups.get(key), str]);
            }
            else {
                groups.set(key, [str]);
            }
        }

        return Array.from(groups.values());
    }

    calculateFrequencyArray(str: string): number[] {
        const ALPHABET_SIZE = 26;

        const array = new Array(ALPHABET_SIZE).fill(0);
        for(let char of str) {
            const idx = this.getAlphabetNumber(char);

            array[idx] += 1;
        }

        return array;
    }

    getAlphabetNumber(str: string): number {
        const UNICODE_OFFSET = 'a'.charCodeAt(0);
        return str.charCodeAt(0) - UNICODE_OFFSET;
    }
}
