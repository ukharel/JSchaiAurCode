//for

for (let i=0 ; i<= 10;i++){
    let element = i
    if (element == 5){
        console.log(' 5 is best number')
    }
    // console.log(element)
}
for (let i = 0;i <=10;i++){

// console.log(`outer loop= ${i}`)

    for (let j = 0;j <= 10; j++){
        // console.log( `${i} * ${j} = ${i * j}`)
    }
}

let myAray=['Shaktiman','Batman',' Nagaraj']

for (i= 0 ; i < myAray.length; i++){
    const element = myAray[i]
    //console.log(element)
}

// for (let i = 0 ; i <= 20;i ++){
//     if (i == 5){
//         console.log('Detected 5')
//         break
//     }
//     console.log(i)
// }

for (let i = 0 ; i <= 20;i ++){
    if (i == 5){
        console.log('Detected 5')
        continue
    }
    console.log(`value of i is ${i}`)
}