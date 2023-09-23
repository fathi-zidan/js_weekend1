function Abbreviation(str){
    const word = str.split(" ");
    let abb = "";
    for(let i=0;i<word.length;i++){
        abb += word[i].charAt(0) + ".";
    }
    return abb.slice(0,-1);

}
const a = Abbreviation("fathi zidan");
console.log(a);