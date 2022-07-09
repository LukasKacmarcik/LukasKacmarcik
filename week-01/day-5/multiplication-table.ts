//multiplication-table.ts

export function multiplicationTable(number: number) {

    for (let i = 1; i <= 10; i++) {

    let outcome= i * number
    console.log(i + "*" + number + " = " + outcome);

    }
}
