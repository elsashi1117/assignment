let str =  '11122233444';
 
const findTwice = str => {
    // no.1 use hashMap
    const map = new Map;
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i])+1);
        } else {
            map.set(str[i], 1)
        }
    }
    for (let i of map.keys()) {
        if (map.get(i) === 2) {
            return i;
        }
    }


    //no.2 use Binary Search
    // let lIndex = 0, rIndex = str.length - 1;
    
    // while (lIndex < rIndex) {
    //     let left = 0, right = 0,
    //     mid = Math.floor((lIndex + rIndex) / 2),
    //     cur1 = Math.floor((lIndex + rIndex) / 2),
    //     cur2 = Math.floor((lIndex + rIndex) / 2);
    //     // console.log('mid: ',mid)
    //     if ((rIndex - lIndex) < 4) {
    //         return str[lIndex];
    //     }   
    //     while (str[mid] === str[--cur1]) {
    //         left ++;
    //         // console.log(cur)
    //     }
    //     while (str[mid] === str[++cur2]) {
    //         right ++;
    //         // console.log(right)
    //     }     
        
    //     if (left + right === 1) {
    //         return str[mid];
    //     }
    //     if (left === right) {
    //         if ((mid-1) % 3 ===0) {
    //             lIndex = mid + 2;
    //         } else {
    //             rIndex = mid - 2;
    //         }
    //     } else if (left > right) {
    //         if ((mid -2) % 3 === 0) {
    //             lIndex = mid + 1;
    //         } else {
    //             rIndex = mid - 3;
    //         }
            
    //     } else {
    //         if ((mid % 3) === 0) {
    //             lIndex = mid + 3;
    //         } else {
    //             rIndex = mid - 1;
    //         }
    //     }
    // }
}
console.log('result: ', findTwice(str))

