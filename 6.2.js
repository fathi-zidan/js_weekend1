function countDuplicates(str) {
    const charCount = {};
    let count = 0;
    const lowercaseStr = str.toLowerCase();
    for (const char of lowercaseStr) {
        if (/[a-z0-9]/.test(char)) {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
            if (charCount[char] === 2) {
                count++;
            }
        }
    }

    return count;
}

console.log(countDuplicates("abcde"));
console.log(countDuplicates("aabbcde"));
console.log(countDuplicates("aabBcde"));
console.log(countDuplicates("indivisibility"));
console.log(countDuplicates("Indivisibilities"));
console.log(countDuplicates("aA11"));
console.log(countDuplicates("ABBA"));
