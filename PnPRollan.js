var curDieSet = 6;

function init(){
	document.getElementById('dice').value = 6;
}

function clearelements() {
	document.getElementById("Loot").innerHTML = "";
	document.getElementById("Weapon").innerHTML = "";
	document.getElementById("Condition").innerHTML = "";
	document.getElementById("Condition2").innerHTML = "";
}

function rollDice() {
	var a = curDieSet;
	if(a == 6 || a == 20 || a == 100){
		var s = Math.floor(Math.random()*curDieSet);
		document.getElementById("dieResult").innerHTML = (s + 1);
		}
	else if (a == 40 || a == 12 || a == 200){
		var s1 = Math.floor(Math.random()*curDieSet / 2);
		var s2 = Math.floor(Math.random()*curDieSet / 2);
		document.getElementById("dieResult").innerHTML = (s1 + 1) + " & " + (s2 + 1);
		}
	}

function setdieset(dieSet){
 	curDieSet = dieSet;
	
}
	
function trashloot(num) {
	if (num == -1) {
			var aa = document.getElementById('value').value;
		}
	else {
			var aa = num;
		}
	var s =  "<ul style=\"list-style-type:circle\">";
	for (i = 0; i < aa; i++) {
		var r = Math.floor(Math.random()*689);
		s += "<li>" + trashlist[r] + "</li>"
		}
	printresult(s, "Loot", 0,0, true);
	}
	
function printresult(s1, el1, s2, el2, clear) {	
	if (clear) {
		clearelements();
	}
	var tableStart = "<table style=\"width:100%\">";
	if (s2 != 0){
		var table1st = "<tr><td><ol type=\"1\">" + s1 + "</ol></td>" + "<td><ol type=\"1\">" + s2 + "</ol></td></tr></table>";
	}
	else{
		var table1st = "<tr><td><ol type=\"1\">" + s1 + "</ol></td></tr></table>";
	}
	//var table2nd = "<tr><td><ol type=\"1\">" + s3 + "</ol></td>" + "<td><ol type=\"1\">" + s4 + "</ol></td></tr></table>";
	
	document.getElementById(el1).innerHTML = tableStart + table1st;
	//document.getElementById(el2).innerHTML = tableStart + table2nd;
}

function generatefromtype (type, condition) {
	rollDice();
	var a = generatewithcondition(type, condition, false);
	printresult(a[0], "Weapon", a[1], "Condition", true);
}
function generateloot (type, num) {
	rollDice();
	var a = generatewithoutcondition(type, num, true);
	printresult(a[0], "Loot", 0,0, true);
}
function generatechem (type, condition) {
	rollDice();
	var a = generatewithcondition(type, condition, false);
	printresult(a[0], "Loot", a[1], "Condition2", true);
}

function generatewithoutcondition(type, num, forcenum) {
	
	var s = "error";
	var s2 = "error";
	
	var n = curDieSet;
	if(forcenum){
		n = num;
	}
	
	if(n == 40 || n == 12) {
		var n = curDieSet / 2;
	}
	
	//trashlist handmade falloutPistols falloutSMGs falloutRifles falloutMelee falloutExplosives falloutBigguns falloutMedicine falloutDrugs falloutAlcohol smallhousehold "largehousehold" : mediumhousehold	

	for (i = 0; i < n; i++) {
		s += "<li>" + type[Math.floor(Math.random()*(type.length - 1) + 1)] + "</li>";
		}
		
		s = s.slice(5);
		var res = [s];
		return res;
}

function generatewithcondition(type, condition, forcenum){

	var s = "error";
	var s2 = "error";
	
	var n = curDieSet;
	if(forcenum){
		n = condition;
	}
	
	if(n == 40 || n == 12) {
		var n = curDieSet / 2;
	}
	
	for (i = 0; i < n; i++) {
		s += "<li>" + type[Math.floor(Math.random()*(type.length - 1) + 1)] + "</li>";
		s2 += "<li>" + condition[Math.floor(Math.random()*(condition.length - 1) + 1)] + "</li>";
		}
		
		s = s.slice(5);
		s2 = s2.slice(5);
		var res = [s , s2];
		return res;
}


