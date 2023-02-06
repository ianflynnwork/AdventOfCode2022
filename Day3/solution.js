const { groupCollapsed } = require('console');
const fs = require('fs');
const folderPath = '/Users/ianflynn/Documents/GitHub/AdventOfCode2022/Inputs/Day3';
const info = fs.readFileSync(folderPath).toString().split('\n')
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// console.log('Alpha A', alphabet.indexOf('A')+1)
function getPriority(char){
    let charCode = char.charCodeAt(0)
    if(charCode >= 'a'.charCodeAt(0)){
        return charCode - 'a'.charCodeAt(0) + 1
    }
    return charCode - 'A'.charCodeAt(0) + 27
}
// ==Part One==
let total = 0;
info.forEach(el => {
    const firstCompartment = el.slice(0, el.length/2).split('');
    const secondCompartment = el.slice(el.length/2);
    const match = firstCompartment.filter(elem => secondCompartment.includes(elem))
    total += alphabet.indexOf(...match)+1
})
console.log(total)//--> 7597

// ==Part Two==

const groups = []
let group = []
for(let i=0; i<= info.length; i++){
    if(i % 3 === 0 && i !== 0){
        groups.push(group)
        group = []
    }
    if(info[i])group.push(info[i].split(''))
    
}
// groups.push(group)
let newTotal = 0

groups.forEach(group => {
    // console.log(alphabet.indexOf(group.reduce((acc, curr)=> acc.filter(item => curr.includes(item)))[0] )+1)
    newTotal += alphabet.indexOf(group.reduce((acc, curr)=> acc.filter(item => curr.includes(item)))[0] )+1
    }
)
console.log(newTotal)
