// let codes = {
//     '992': 'Tajikistan',
//     '998': 'Uzbekistan',
//     '98': 'Iran',
//     '7992': 'Russian',
//     '1': 'USA'
// }
// for (const key in codes) {
//     console.log(+key);
//     console.log(codes[key]);
// }
// -----------------
function multiplyNumeric(salaries) {
  salaries  = {
        'Ali': 100,
        'Ahmad': 204,
        'Samandar': 'Ali'
    }
    for (const key in salaries) {
        if (typeof salaries[key] == 'number') {
             salaries[key]*=2
        }
    }
}

multiplyNumeric()
