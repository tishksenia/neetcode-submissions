class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map();

        for(let str of strs) {
            const key = this.calculateFrequencyArray(str);

            const matchingKey = Array.from(groups.keys()).find(k =>  this.isArrayEqual(k, key));

            if(groups.has(matchingKey)) {
                groups.set(matchingKey, [...groups.get(matchingKey), str]);
            }
            else {
                groups.set(key, [str]);
            }
        }

        return Array.from(groups.values());
    }

    calculateFrequencyArray(str: string): number[] {
        const ALPHABET_SIZE = 26;

        const array = new Array(ALPHABET_SIZE);
        for(let char of str.split('')) {
            const idx = this.getAlphabetNumber(char);

            if(array[idx]) {
                array[idx] = array[idx] + 1;
            }
            else {
                array[idx] = 1;
            }
        }

        return array;
    }

    getAlphabetNumber(str: string): number {
        const UNICODE_OFFSET = 96;
        return str.charCodeAt(0) - UNICODE_OFFSET;
    }

    isArrayEqual(a: number[], b: number[]) {
        if(a.length != b.length) {
            return false;
        }

        for(let i = 0; i < a.length; i++) {
            if(a[i] !== b[i]) {
                return false;
            }
        }

        return true;
    }
}
