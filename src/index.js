module.exports = function reverse (n) {
    let str = String(n)
    str[0] ==='-' ? str = str.slice(1) : str = str
    let result = ''
    for (i = 0; i < str.length; i++) {
        result = `${str[i]}${result}`
    }
    return +result
}