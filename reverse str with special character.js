//No.1
let str = "c:f@gh$ijk";
//output = "k:j@ih$gfc";

const strRerverse = str => {
    const map = new Map;
    for (let i = 0; i < str.length; i++) {    
        if (!/[A-Za-z]/.test(str[i])){
            map.set(i, str[i])
        }
    }
    let str2 = str.match(/[A-Za-z]/g)
    let res = [];
    for (let i = 0; i < str.length; i++) {       
        if (map.has(i)) {
            res.push(map.get(i))
        } else {
            res.push(str2.pop())
        }
    }
    return res.join('')
}

console.log(strRerverse(str))