let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
	бюджет: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};
for(let i = 0; i < 2; i++){
let fq = prompt("Введите обязательную статью расходов в этом месяце");
let sq = prompt("Во сколько обойдется?");
appData[fq] = sq;
}
alert("I Don't Know");