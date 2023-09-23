const words = ["hello", "hi", "welcome", "see you", "h"];
function short(words) {
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
}
console.log("short word is " + short(words));