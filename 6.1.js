function accum(str) {
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        str2 += char.toUpperCase() + char.repeat(i) + '-';
    }
    return str2.slice(0, -1);
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
