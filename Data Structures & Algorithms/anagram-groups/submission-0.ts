class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sorted = strs.map(s => s.split('').sort().join(''));

        const map = new Map();

        for(let i = 0; i < sorted.length; i++) {
            const sortedWord = sorted[i];
            const originalWord = strs[i];
    
            if(map.has(sortedWord)) {
                map.set(sortedWord, [...map.get(sortedWord), originalWord]);
            }
            else {
                map.set(sortedWord, [originalWord]);
            }
        }

        return Array.from(map.values());
    }
}
