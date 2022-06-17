//multiplication-table.ts

function multiplicationTable() {

    let number = 15;

    for (let i = 1; i <= 10; i++) {

    let outcome= i * number
    console.log(i + "*" + number + " = " + outcome);

    }
}

multiplicationTable()