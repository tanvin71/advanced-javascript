const students = [
    {id: 21, name: 'Omor Sunny'},
    {id: 31, name: 'Maannaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'Deepjol'}
];
// const output = []
// for(let i = 0; i < students.length ; i++){
//     const element = students[i];
//     const result = element.name;
//     output.push(result);

// }
// console.log(output);

const names = students.map( s => s.name);
const ids = students.map (s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id> 40);
console.log(biggerOne);
