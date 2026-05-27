class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(str => {
            return `${str.length}#${str}`;
        }).join("");
    }


    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strs: string[] = [];
        let idx = 0;
        while(idx <= str.length - 1) {
            const stringSection = str.slice(idx);
            const delimiterIdx = stringSection.indexOf("#");
            const length = Number(stringSection.slice(0, delimiterIdx));
            const content = stringSection.slice(delimiterIdx + 1, delimiterIdx + 1 + length);

            strs.push(content);
            idx += delimiterIdx + 1 + length;
        }

        return strs;
    }
}
