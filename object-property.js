const student = [
    {id: 21, name: 'omor'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deeojol'}
];

const names = student.map(s => s.name);
const bigger = student.filter( s => s.id>40);
console.log(bigger);
// console.log(names);