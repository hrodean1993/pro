 let BtStart = document.querySelectorAll("#start")[0],
	BudgetValue = document.querySelector(".budget-value"),
	DaybudgetValue = document.querySelector(".daybudget-value"),
	LevelValue = document.querySelector(".level-value"),
	ExpensesValue = document.querySelector(".expenses-value"),
	OptionalexpensesValue = document.querySelector(".optionalexpenses-value"),
	IncomeValue = document.querySelector(".income-value"),
	MonthsavingsValue = document.querySelector(".monthsavings-value"),
	YearsavingsValue = document.querySelector(".yearsavings-value"),

	ExpensesItem = document.querySelectorAll(".expenses-item"),

	ExpensesBt = document.querySelectorAll("button"),
	ExpensesBt1 = document.querySelectorAll("button")[1],
	CountBudgetBtn = document.querySelectorAll("button")[2],

	OptionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
	checkBox = document.querySelector("#savings");

/*ExpensesBt.onclick = function(){
	alert("hello");
}*/

/*ExpensesBt[0].addEventListener("click",function(event){
	event.preventDefault();
	console.log("kkkkkk");
 		//console.log("event   " + event.type + " нa елементе " + event.target);
});*/

ExpensesBt.forEach(function(item){
 item.addEventListener("mouseleave",function(){
 	console.log("no");
 });
});


/*ExpensesBt.addEventListener("mouseenter",function(){
	alert ("by");
});
*/



	console.log(BtStart);
	console.log(BudgetValue);
	console.log(DaybudgetValue);
	console.log(LevelValue);
	console.log(ExpensesValue);
	console.log(OptionalexpensesValue);
	console.log(IncomeValue);
	console.log(MonthsavingsValue);
	console.log(YearsavingsValue);
	console.log(ExpensesItem);
	console.log(ExpensesBt);
	console.log(ExpensesBt1);
	console.log(CountBudgetBtn);
	console.log(OptionalexpensesItem);
	console.log(checkBox);
