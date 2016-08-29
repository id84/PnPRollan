openCat("guns")
function openCat(catname) {
    var i;
    var x = document.getElementsByClassName("category");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(catname).style.display = "block";  
}


function genderrnd(rolltofemale){
	var genderroll = Math.floor(Math.random()*100);
	var gr = true;
	if (genderroll > rolltofemale) {
		gr = false;
	}	
	return gr;
}

function racernd() {
	var r = Math.floor(Math.random()*100);
	var s = "";
	switch (true){
		case (r >= 90):
			s = "ghoul";
		break;
		case (r >= 95):
			s = "supermutant";
		break;
		default:
		s = "human";
		break;
	}
	return s;
}

function generateloot(type){
	var result = "";
	var caps = Math.floor(Math.random()*39) + 2;
	switch (type) {
		case 'slimpickings':
			var r1 = Math.floor(Math.random()*2) + 1;
			var r2 = Math.floor(Math.random()*4) + 1;
			var t1 = falloutMedicine.concat(falloutDrugs, falloutAlcohol);
			result += "The picking were slim; ";
			for (i = 0; i < r1; i++) {
				result += generatefromtype_stringonly(t1, chemConditions);
			}
			result += " and " + Math.floor(caps/2) + " caps, hardly worth the effort.</br>";
		break;
		case 'waylaypoor':
			var r1 = Math.floor(Math.random()*3) + 1;
			var t1 = falloutTools.concat(falloutReading);
			result += "Poor victim was barely making a living; ";
			for (i = 0; i < r1; i++) {
				result += t1[Math.floor(Math.random()*(t1.length))] + ", ";
			}
			result += " and " + caps + " caps.</br>";
		break;
		case 'bigscorechems':
			var r1 = Math.floor(Math.random()*5) + 5;
			var t1 = falloutMedicine.concat(falloutDrugs);

			result += "Respectable stash of this once respectable dealer contains; ";
			for (i = 0; i < r1; i++) {
				result += t1[Math.floor(Math.random()*(t1.length))] + ", ";
			}
			result += " and " + (caps*50) + " caps. Money well earned and well spent.</br>";
		break;
	}
	
	return result;
}


function generatetown(size) {
	var type = size[Math.floor(Math.random()*(size.length))];
	var s = " ";
	var sn = "";
	var sucess = Math.floor(Math.random()*100);  
	var ss = "<span style=\"background-color:#ffcce0\">an unsucessful</span>";
	if (sucess > 50) {
		ss = "<span style=\"background-color:#b3ffda\">a sucessful</span>";
	}
	switch (type) {
		case "Hunter Rest":
			var n = Math.floor(Math.random()*2) + 3;
			s = n + " people rest around a bonfire. They seem to be " + gameRaces[Math.floor(Math.random()*(gameRaces.length))] + " hunters resting after " + ss + " trip to Wasteland.</br></br>";
			for (i = 0; i < n; i++) {
				var title = craftsmanNicknames[Math.floor(Math.random()*(craftsmanNicknames.length))];
				s += townfolkgen(genderrnd(80), racernd(), title + " Hunter") + "</br>";
				var weapon = hunterWeapons[Math.floor(Math.random()*(hunterWeapons.length))];
				s += "Bears <span style=\"background-color:#ffcce0\">" + weapon + "</span>.</br></br>";
			}
			s += sn; 
		break;
		case "Caravan Camp":
			var n = Math.floor(Math.random()*10) + 6;
			var company = caravanCompanies[Math.floor(Math.random()*(caravanCompanies.length))];
			var cc = "Working for " + company;
			var cn = n - Math.floor(n/2);
			var pn = n - cn;
			var cl = townfolkgen(genderrnd(50), racernd(), cc);
			s= "Brahmin moos and shoddy tents to ward off the heat, a caravan rests peacefully. " + (cn + 1) + " caravaneers are discussing their next destination, after " + ss + " run. Passerbys attracted to shades trade news and goods with passangers, forming a small group of " + pn + " seperate from Caravaneers.<br>" + cl + " The Caravan Leader is welcoming and have some stuff to barter with.</br></br>"
			for (i = 0; i < cn; i++) {
				var title = craftsmanNicknames[Math.floor(Math.random()*(craftsmanNicknames.length))];
				s += townfolkgen(genderrnd(80), racernd(), title + " Caravaneer") + "</br>";
				var weaponpool = falloutPistols.concat(falloutShotguns, falloutRifles);
				var weapon = weaponpool[Math.floor(Math.random()*(weaponpool.length))];
				s += "Armed with <span style=\"background-color:#ffcce0\">" + weapon + "</span>.</br></br>";
			}
			for (i = 0; i < pn; i++) {
				var title = craftsmanNicknames[Math.floor(Math.random()*(craftsmanNicknames.length))];
				s += townfolkgen(genderrnd(50), racernd(), "random") + "</br>";
			}
		break;
		case "Traveller Rest":
			var n = Math.floor(Math.random()*1) + 2;
			s = n + " people rest in a secluded spot. They appear to be taking a break and so far it seems to be " + ss + " trip.</br></br>";
			for (i = 0; i < n; i++) {
				var title = craftsmanNicknames[Math.floor(Math.random()*(craftsmanNicknames.length))];
				s += townfolkgen(genderrnd(80), racernd(), "random") + "</br></br>";
			}
			s += sn;
		break;
		case "Raider Ambush":
			var n = Math.floor(Math.random()*2) + 3;
			var loot = "slimpickings";
			switch(true){
				case (sucess > 90):
				loot = "bigscorechems";
				n += 3;
				break;
				case (sucess > 30):
				loot = "waylaypoor";
				break;
				default:
				break;
			}
			s = "Empty syringes and bullet casings form a trail leading to a crime scene. Nearby " + n + " shifty figures lean over a small pile of loot. Their crime was " + ss + " undertaking. They argue over who deserves more.</br>" + generateloot(loot) + "</br>";
			for (i = 0; i < n; i++) {
				var title = raiderTitles[Math.floor(Math.random()*(raiderTitles.length))];
				s += townfolkgen(genderrnd(80), racernd(), title) + "</br>";
				var weaponpool = handmade.concat(falloutMelee, falloutPistols);
				var weapon = weaponpool[Math.floor(Math.random()*(weaponpool.length))];
				s += "Brandishes <span style=\"background-color:#ffcce0\">" + weapon + "</span>.</br></br>";
			}
			s += sn;
		break;
		default:
		break;
	}
	
	document.getElementById("Result").innerHTML = s;
}

function clearelements() {
	document.getElementById("Result").innerHTML = "";
	document.getElementById("Condition").innerHTML = "";
}
	
function printresult(s1, el1, s2, el2, clear) {	
	if (clear) {
		clearelements();
	}
	var tableStart = "<table>";
	if (s2 != undefined){
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
	var t = "";
	var c = "";
	for (i = 0; i < 6; i++){
		t += "<li>" + type[Math.floor(Math.random()*(type.length))]  + "</li>";
		if(condition != -1){
			c += "<li>" + condition[Math.floor(Math.random()*(condition.length))] + "</li>";
		}
	}
	printresult(t, "Result", c, "Condition", true);
}

function generatefromtype_stringonly (type, condition) {
	var t = "";
	t = type[Math.floor(Math.random()*(type.length))];
		if(condition != -1){
			t += " (" + condition[Math.floor(Math.random()*(condition.length))] + "), ";
		}
	return t;
}
function getfullname(gender) {
	//true female - false male
	var hasMidName = false;
	//var hasNickName = false;
	var mc = Math.floor(Math.random()*100);
	var firstName = "error";
	var midName = "";
	var surname = "error";
	
	var namepool = namesMale;
	if (gender) {
		namepool = namesFemale;
	}
	
	if (mc > 75) {
		midName = namepool[Math.floor(Math.random()*(namepool.length))];
	}
	
	firstName = namepool[Math.floor(Math.random()*(namepool.length))];
	surname = surnames[Math.floor(Math.random()*(surnames.length))];
	var fullname = firstName + " " + midName + " " + surname;
	return fullname;
}
function townfolkgen(gender, race, occupation){
	var age = 0;
	var occup = "";
	var disability = "";
	var disease = "";
	var quirk = "";
	var string = "";
	var d1 = Math.floor(Math.random()*100);
	var d2 = Math.floor(Math.random()*100);
	var d3 = Math.floor(Math.random()*100);
	var name = getfullname(gender);
	var hq = "#d5e9f6";    
	var hd = "#ffb3b3";
	var hdis = "#b3ffcc";
	var hr = "#f2ccff";
	var ho = "#ffffb3";
	var hn = "#ccf5ff";
	//"";
	switch(race) {
		case 'human':
		age = Math.floor(Math.random()*36) + 14;
		break;
		case 'ghoul':
		age = Math.floor(Math.random()*50) + 200;
		/* ghouls get disease less but have more disabilities */
		d1 -= 25;
		d3 += 33;
		break;
		case 'supermutant':
		age = Math.floor(Math.random()*50) + 100;
		/* super mutant don't get disease or disabilities */
		d1 = 0;
		d3 = 0;
		break;
		default:
		age = 666;
		break;
	}

	occup = occupation;
	if(occup == 'random'){
	occup = falloutPerson[Math.floor(Math.random()*(falloutPerson.length))];
	}
	
	string = "<span style=\"background-color: " + hn + "\">" + name + "</span> is a " + age + " years old,  <span style=\"background-color: " + hr + "\">" + race + "</span>. <span style=\"background-color: " + ho + "\">" + occup + "</span>. ";
	if (d1 > 65){
		disease = falloutDisease[Math.floor(Math.random()*(falloutDisease.length))];	
		string += "Appears to have <span style=\"background-color: " + hd + "\">" + disease + "</span>. ";
	}
	if (d2 > 50){
		quirk = npcQuirks[Math.floor(Math.random()*(npcQuirks.length - 1))];
		string += "<span style=\"background-color: " + hq + "\">" + quirk + "</span>. ";
	}
	if (d3 > 70){
		disability = falloutDisability[Math.floor(Math.random()*(falloutDisability.length))];
		string += " Seems to suffer from <span style=\"background-color: " + hdis + "\">" + disability + "</span>. ";
	}
	return string;
}
function npcgen(gender, race, occupation){
	var s = townfolkgen(gender, race, occupation);
	document.getElementById("Result").innerHTML = s;
}
