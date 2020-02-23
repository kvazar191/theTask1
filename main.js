"use strict"

let money, time;
money = +prompt('Ваш бюджет на месяц?', '');
console.log('Бюджет на месяц =', money);
time = prompt('Введите дату в формате YYYY-MM-DD', '');
console.log('Дата', time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};

function sumExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b = +prompt('Во сколько обойдется?', '');

        appData.expenses[a] = b;
        console.log('Статья расходов =', a, b); 
    }
}
sumExpenses();
console.log(appData.expenses);

let budgetOneDay = (appData.budget/30).toFixed(); // бюджет на 1 день с округлением

alert("Бюджет на 1 день " + budgetOneDay );
