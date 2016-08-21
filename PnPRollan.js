
/* "M-160 - 7.62";
Colt 6520 pistol */
var curDieSet = 6;

function clearelements() {
	document.getElementById("G1").innerHTML = "";
	document.getElementById("G2").innerHTML = "";
	document.getElementById("G3").innerHTML = "";
	document.getElementById("G4").innerHTML = "";
	document.getElementById("G5").innerHTML = "";
}

function rollDice() {
	var a = curDieSet;
	if(a == 6 || a == 20 || a == 100){
		var s = Math.floor(Math.random()*curDieSet);
		document.getElementById("dieResult").innerHTML = s+1;
		}
	else if (a == 40 || a == 12 || a == 200){
		var s1 = Math.floor(Math.random()*curDieSet / 2);
		var s2 = Math.floor(Math.random()*curDieSet / 2);
		document.getElementById("dieResult").innerHTML = s1+1 + " & " + s2+1;
		}
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
	printresult(s, "G1", 0,0, true);
	}
	
function printresult(s1, el1, s2, el2, clear) {	
		if (clear) {
			clearelements();
		}
		var tableStart = "<table style=\"width:100%\"><tr><th></th><th></th></tr>";
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

function generatefromtype (type, num) {
	var a = megamixer(type, num);
	if(type < 6){
		printresult(a[0], "G2", a[1], "G3", true);
	}
	else {
		printresult(a[0], "G4", a[1], "G5", true);
	}
}

function setdieset(dieSet){
 	curDieSet = dieSet;
}
function megamixer(type, num){

	var s = "";
	var s2 = "";
	
	if (type == -1){
		var r = Math.floor(Math.random()*6);
	}
	else {
		var r = type;
	}
	
	var n = curDieSet;
	if(n == 40 || n == 12) {
		var n = curDieSet / 2;
		}
	
	for (i = 0; i < n; i++) {
		switch(r) {
			case (r = 0):
				/* this case is for handmade */
				s += "<li>" + handmade[Math.floor(Math.random()*(handmade.length - 1) + 1)] + "</li>";
				s2 += "<li>" + firearmcondition[Math.floor(Math.random()*(firearmcondition.length - 1) + 1)] + "</li>";
			break;
			case (r = 1):
				/* this case is for lamepistols */
				s += "<li>" + lamepistols[Math.floor(Math.random()*(lamepistols.length - 1) + 1)] + "</li>";
				s2 += "<li>" + firearmcondition[Math.floor(Math.random()*(firearmcondition.length - 1) + 1)] + "</li>";
			break;
			case (r = 2):
				/* this case is for lamesmgs */
				s += "<li>" + lamesmgs[Math.floor(Math.random()*(lamesmgs.length - 1) + 1)] + "</li>";
				s2 += "<li>" + firearmcondition[Math.floor(Math.random()*(firearmcondition.length - 1) + 1)] + "</li>";
			break;
			case (r = 3):
				/* this case is for lamerifle */
				s += "<li>" + lamerifle[Math.floor(Math.random()*(lamerifle.length - 1) + 1)] + "</li>";
				s2 += "<li>" + firearmcondition[Math.floor(Math.random()*(firearmcondition.length - 1) + 1)] + "</li>";
			break;
			case (r = 4):
				/* this case is for lamemelee */
				s += "<li>" + lamemelee[Math.floor(Math.random()*(lamemelee.length - 1) + 1)] + "</li>";
				s2 += "<li>" + firearmcondition[Math.floor(Math.random()*(firearmcondition.length - 1) + 1)] + "</li>";
				break;
			case (r = 5):
				/* this case is for lameexplosives */
				s += "<li>" + lameexplosives[Math.floor(Math.random()*(lameexplosives.length -1) +1)] + "</li>";
				s2 += "<li>" + explosiveconditions[Math.floor(Math.random()*(meleeconditions.length - 1) + 1)] + "</li>";
				break;
			case (r = 6):
				/* this case is for pistols */
				s += "<li>" + pistols[Math.floor(Math.random()*(pistols.length -1) +1)] + "</li>";
				s2 += "<li>" + firearmcondition[Math.floor(Math.random()*(firearmcondition.length - 1) + 1)] + "</li>";
				break;
		}

	}
		var res = [s , s2];
		return res;
}


