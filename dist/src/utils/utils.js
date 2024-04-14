/**
 * Shuffles an array and selects the first n elements.
 * @param array The array to shuffle.
 * @param count The number of elements to select after shuffling.
 * @returns An array containing the selected elements.
 */
export const shuffleAndSelect = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
