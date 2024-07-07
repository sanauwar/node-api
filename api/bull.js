let input_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//output1,2,3,41,2,71,3,61,92,8
//1,2,3,4
//5,3,2
//9,1


//i 1
//j 1,2,3,4
//123
//121321233133
//12,13,14,
//total possibility

function getAddSequence(array) {
    let obj = {}
    let output = []
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            output.push(`${array[i]}${array[j]}`)
        }
    }
    console.log('output', output);
    return output

}


// obj[array[j]] = array[j]
//             let objVal = Object.values(obj)
//             // console.log('objVal+++++++', objVal);
//             let sum = objVal.reduce((a, b) => a + b, 0)

//             if (sum === 10) {
//                 output.push(objVal.join(''))

//             }
// getAddSequence(input_data)

let myName = 'My name is nadeem'
//output: 'Nadeem is name my'

let nameArr = myName.split(' ')

let output = ''
for (let i = nameArr.length; i > 0; i--) {
    output += nameArr[i]
}


let obj1 = {
    name: "alex",
    age: 25

}

function printName(obj) {
    console.log(this)
    // console.log(obj.name)
    return
}

printName().bind(obj1)



//select sum(score) from table group by day 


