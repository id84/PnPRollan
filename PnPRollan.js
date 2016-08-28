var curDieSet = 6;
var curdie1 = 1;
var curdie2 = 1;
function init(){
	document.getElementById('dice').value = 6;
}

function clearelements() {
	document.getElementById("Result").innerHTML = "";
	document.getElementById("Condition").innerHTML = "";
}

function rollDice() {
	var a = curDieSet;
	curdie1 = 1;
	curdie2 = 1;
	if(a == 6 || a == 20 || a == 100){
		var s = Math.floor(Math.random()*curDieSet);
		curdie1 = s + 1;
		document.getElementById("dieResult").innerHTML = curdie1;
		}
	else if (a == 40 || a == 12 || a == 200){
		var s1 = Math.floor(Math.random()*curDieSet / 2);
		curdie1 = s1 + 1;
		var s2 = Math.floor(Math.random()*curDieSet / 2);
		curdie2 = s2 + 1;
		document.getElementById("dieResult").innerHTML = curdie1 + " & " + curdie2;
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
	var tableStart = "<div class=\"tablecontainer\"><table>";
	if (s2 != 0){
		var table1st = "<tr><td><ol type=\"1\">" + s1 + "</ol></td>" + "<td><ol type=\"1\">" + s2 + "</ol></td></tr></table></div>";
	}
	else{
		var table1st = "<tr><td><ol type=\"1\">" + s1 + "</ol></td></tr></table></div>";
	}
	//var table2nd = "<tr><td><ol type=\"1\">" + s3 + "</ol></td>" + "<td><ol type=\"1\">" + s4 + "</ol></td></tr></table>";
	
	document.getElementById(el1).innerHTML = tableStart + table1st;
	//document.getElementById(el2).innerHTML = tableStart + table2nd;
}

function generatefromtype (type, Condition) {
	rollDice();
	var a = generatewithcondition(type, Condition, false);
	if (Condition == -1){
		printresult(a[0], "Result", 0, 0, true);	
	}
	else {
		printresult(a[0], "Result", a[1], "Condition", true);	
	}
}

function generatenpc (type, faction) {
	

	switch (type) {
		case "Civilian":
			var a = generatewithcondition (npcQuirk, rand, true);
			printresult(a[0], "NPC", 0,0);
		break;
		case "Mercenary":
			generatecnd(falloutDisease, -1)
		break;
		case "Raider":
			generatecnd(falloutDisease, -1)
		break;
		case "Tribal":
			generatecnd(falloutDisease, -1)
		break;
		case "Ghoul":
			generatecnd(falloutDisease, -1)
		break;
		case "Super Mutant":
			generatecnd(falloutDisease, -1)
		break;
	}
}

function generatewithcondition(type, condition, forcenum){

	var s = "error";
	var s2 = "error";
	
	var n = curDieSet;
	if(forcenum){
		n = number;
	}
	
	if(n == 40 || n == 12 || n == 200) {
		var n = curDieSet / 2;
	}
	
	for (i = 0; i < n; i++) {
		if (i == curdie1 - 1){
			s += "<li><mark>" + type[Math.floor(Math.random()*(type.length))] + "</mark></li>";
		}
		else {
			s += "<li>" + type[Math.floor(Math.random()*(type.length))] + "</li>";			
		}
		
		if (i == curdie2 - 1){
			s2 += "<li><mark>" + condition[Math.floor(Math.random()*(condition.length))] + "</mark></li>";
		}
		else{
			s2 += "<li>" + condition[Math.floor(Math.random()*(condition.length))] + "</li>";
		}
	}
		
		s = s.slice(5);
		s2 = s2.slice(5);
		var res = [s , s2];
		return res;
}

function getfullname(gender) {
	//true female - false male
	var hasMidName = false;
	var mc = Math.floor(Math.random()*100);
	var firstName = "error";
	var midName = "";
	var surname = "error";
	
	if (mc > 75) {
		hasMidName = true;
	}
	
	var namepool = namesMale;
	if (gender) {
		namepool = namesFemale;
	}
	
	firstName = namepool[Math.floor(Math.random()*(namepool.length))];
	if (hasMidName) {
		midName = namepool[Math.floor(Math.random()*(namepool.length))];
	}
	surname = surnames[Math.floor(Math.random()*(surnames.length))];
	var fullname = firstName + " " + midName + " " + surname;
	return fullname;
}
function townfolkgen(gender){
	var humanage = (Math.floor(Math.random()*36)) + 14;
	var occupation = "";
	var disability = "";
	var disease = "";
	var quirk = "";
	var string = "";
	var d1 = Math.floor(Math.random()*100);
	var d2 = Math.floor(Math.random()*100);
	var d3 = Math.floor(Math.random()*100);
	var name = getfullname(gender);
	
	occupation = falloutPerson[Math.floor(Math.random()*(falloutPerson.length))];
	string = name + " is a " + humanage + " years old " + occupation + ". ";
	if (d1 > 65){
		disease = falloutDisease[Math.floor(Math.random()*(falloutDisease.length))];	
		string += " Appears to have " + disease + ". ";
	}
	if (d2 > 50){
		quirk = npcQuirks[Math.floor(Math.random()*(npcQuirks.length - 1))];
		string += quirk + ". ";
	}
	if (d3 > 70){
		disability = falloutDisability[Math.floor(Math.random()*(falloutDisability.length))];
		string += " Seems to be suffering " + disability + ".";
	}
	document.getElementById("Result").innerHTML = string;	
}

function ghoulgen(gender){
	var ghoulage = (Math.floor(Math.random()*40)) + 210;
	var occupation = "";
	var disability = "";
	var disease = "";
	var quirk = "";
	var string = "";
	var d1 = Math.floor(Math.random()*100);
	var name = getfullname(gender);
	occupation = falloutPerson[Math.floor(Math.random()*(falloutPerson.length))];
	string = name + " is a " + ghoulage + " years old " + occupation + ". ";
	if (d1 > 50){
		disability = falloutDisability[Math.floor(Math.random()*(falloutDisability.length))];
		string += " Seems to be suffering " + disability + ".";
	}
	document.getElementById("Result").innerHTML = string;	
}


function generateNPC(type) {

	
	switch (type) {
		case 'townfolkf':
			townfolkgen(true)
		break;
		case 'townfolkm':
			townfolkgen(false)
		break;
		case 'ghoulf':
			ghoulgen(true)
		break;
		case 'ghoulm':
			ghoulgen(false)
		break;
	}
	

	
	
}