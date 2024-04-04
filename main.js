#! /usr/env node
import inquirer from "inquirer";
const table1 = await inquirer.prompt([
    {
        type: 'number',
        name: 'fahad',
        message: 'Enter a table number = '
    }
]);
let i = 1;
while (i <= 10) {
    console.log(`${table1.fahad} x ${i} = ${i * table1.fahad}`);
    i++;
}
