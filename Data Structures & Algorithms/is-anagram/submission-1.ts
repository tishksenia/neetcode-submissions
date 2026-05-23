type CharMap = Map<string, number>;

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) {
            return false;
        }

        const sMap = this.buildMap(s);
        const tMap = this.buildMap(t);

        return this.areMapsEqual(sMap, tMap);
    }

    areMapsEqual(a: CharMap, b: CharMap): boolean {
        if(a.size != b.size) {
            return false;
        }

        for(let [key, value] of a) {
            if(b.get(key) !== value) {
                return false;
            }
        }
        return true
    }

    buildMap(w: string): CharMap {
        const chars = w.split('');
        const map = new Map();
        for(let c of chars) {
            if(map.has(c)) {
                map.set(c, map.get(c) + 1);
            }
            else {
                map.set(c, 1);
            }
        }

        return map;
    }
}
