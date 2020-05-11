export const util = {
    generateArrayOfNumbers(range: number[]): number[] {
        let arr = [];
        for (let index = range[0]; index <= range[1]; index++) {
            arr.push(index);
        }
        return arr;
    }
}

export const rangeCards = {
    a: [1,13],
    b: [14,26],
    c: [27,39],
    d: [40,52]
};  