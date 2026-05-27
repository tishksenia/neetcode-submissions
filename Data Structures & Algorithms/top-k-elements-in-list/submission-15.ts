class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map();

        nums.forEach(n => {
            if(frequencyMap.has(n)) {
                frequencyMap.set(n, frequencyMap.get(n) + 1)
            }
            else {
                frequencyMap.set(n, 1);
            }
        });

        const heap = new MinHeap(k);

        frequencyMap.forEach(
            (value, key) => {
                heap.add({frequency: value, value: Number(key)})
            }
        );

        return heap.getValues();
    }
}

interface FrequencyPair {
    frequency: number;
    value: number;
}

class MinHeap {
    length;
    heap;

    getValues() {
        return this.heap.map(pair => pair.value);
    }

    constructor(size: number) {
        this.length = size;
        this.heap = [];
    }

    add(pair: FrequencyPair) {
        this.heap.push(pair);
        this.siftUp();

        if(this.heap.length > this.length) {
            this.removeRoot();
        }
    }

    removeRoot() {
        this.heap = this.heap.slice(1);
    }

    swap(a, b) {
        let item = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = item;
    }
    
    siftDown() {
        let idx = 0;
        while(idx < this.heap.length - 1 && this.heap[idx].frequency > this.heap[idx + 1].frequency) {
            this.swap(idx, idx + 1);
            idx++;
        }
    }

    siftUp() {
        let idx = this.heap.length - 1;
        while(idx !== 0 && this.heap[idx - 1].frequency > this.heap[idx].frequency) {
            this.swap(idx, idx - 1);
            idx--;
        }
    }
}