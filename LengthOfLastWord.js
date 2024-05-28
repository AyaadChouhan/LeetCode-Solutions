function lword(str) {
    let arr = str.trim().split(" ").reverse()
    return arr[0]
}
console.log(lword("hello world"));
console.log(lword("   fly me   to   the moon  ")); 
console.log(lword("luffy is still joyboy")); 