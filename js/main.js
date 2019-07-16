let money,time;

let startBt = document.querySelector("#start"),
	budgetValue = document.querySelector(".budget-value"),
	daybudgetValue = document.querySelector(".daybudget-value"),
	levelValue = document.querySelector(".level-value"),
	expensesValue = document.querySelector(".expenses-value"),
	optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
	incomeValue = document.querySelector(".income-value"),
	monthsavingsValue = document.querySelector(".monthsavings-value"),
	yearsavingsValue = document.querySelector(".yearsavings-value"),

	expensesItem = document.querySelectorAll(".expenses-item"),


	expensesItemBtn = document.getElementsByTagName("button")[0],
	optionalexpensesBtn = document.getElementsByTagName("button")[1],
	countBudgetBtn = document.getElementsByTagName("button")[2],

	optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),

	chooseIncome = document.querySelector(".choose-income"),
	sumValue= document.querySelector(".choose-sum"),
	percentValue = document.querySelector(".choose-percent"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value"),
	checkBoxValue = document.querySelector("#savings");

	
expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBt.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt("Ваш бюджет на месяц?", '');

	while(isNaN(money) || money == "" || money ==  null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}

	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	expensesItemBtn.disabled = false;
	optionalexpensesBtn.disabled = false;
	countBudgetBtn.disabled = false;
});



expensesItemBtn.addEventListener('click', function(){
 let sum = 0;
 	for (let i = 0;i < expensesItem.length;i++){
	let a = expensesItem[i].value;
		b = expensesItem[++i].value;

		if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null  && a != "" && b != "" && a.length < 50){
			console.log("done");
			appData.expenses[a] = b;
			sum += +b;
		}
		else {
			i = i - 1 
		}
		expensesValue.textContent = sum;
	};
});

optionalexpensesBtn.addEventListener("click",function(){
	for(let i = 0;i < optionalexpensesItem.length; i++) {
		let Expenses = optionalexpensesItem[i].value; 
		appData.optionalExpenses[i]  = Expenses;

		optionalexpensesValue.textContent +=  appData.optionalExpenses[i] + " ";
	};
});

countBudgetBtn.addEventListener("click",function(){

	if (appData.budget != undefined){

		//appData.moneyPerDay = (appData.budget/30).toFixed();
		appData.moneyPerDay = ((appData.monthIncome- +expensesValue.textContent)/30);
		daybudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100){
			levelValue.textContent = "минималного дастатка";
		}else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
			levelValue.textContent = "средново дастатка";
		}else if(appData.moneyPerDay > 2000){
			levelValue.textContent = "максималная дастатка";
		}else {
			levelValue.textContent = "праизашла ошибка";
		}
	} else {
		daybudgetValue.textContent = "праизашла ошибка";
	}
});

chooseIncome.addEventListener("input",function(){
	let items = chooseIncome.value;
	appData.income = items.split(",");
	incomeValue.textContent = appData.income;
});

checkBoxValue.addEventListener("click",function(){
	if(appData.savings == true){
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener("input", function(){
	if (appData.savings == true){
		let sum = +sumValue.value,
		  percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener("input", function(){
	if (appData.savings == true){
		let sum = +sumValue.value,
		  percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};
