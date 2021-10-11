<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>PNPRollan</title>
		<style>
			div.container {
				width: 768px;
				border: 1px solid gray;
				font-family: 'Lato', sans-serif;
				font-size: 18px;
			}
		</style>
	</head>
    
	<link rel="stylesheet" type="text/css"
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

<body>
<div class="container">
			<fieldset>
				<legend>Select Dice</legend>
					<form>


						<select name="dice">
							<option name="dieSet" onclick="setdieset(this.value)" value="6" >d6</option>
							<option name="dieSet" onclick="setdieset(this.value)" value="12" >2d6</option>
							<option name="dieSet" onclick="setdieset(this.value)" value="20" >d20</option>
							<option name="dieSet" onclick="setdieset(this.value)" value="40" >2d20</option>
							<option name="dieSet" onclick="setdieset(this.value)" value="100" >d100</option>
							<option name="dieSet" onclick="setdieset(this.value)" value="200" >2d100</option>
						</select>
						
						<input type="button" value="Roll Dice!" onClick="rollDice()">
						<p id="dieResult" style="font-size:30px"></p>
					</form>
			</fieldset>
			<fieldset>
				<legend>Generate Common Loot</legend>
					<input type="button" value="Generate 5 Trash!" onClick="trashloot(5)">
					<input type="button" value="Generate 10 Trash!" onClick="trashloot(10)">
					<input type="button" value="Generate 20 Trash!" onClick="trashloot(20)">
					<input type="text" maxlength="3" name="value" id='value' />
					<input type="button" value="Generate Trash!" onClick="trashloot(-1)">
					<p id="G1"></p>
			</fieldset>
			<fieldset>
				<legend>Generate Common Weapons</legend>
					<input type="button" value="Generate Random Weapons!" onClick="generatefromtype(-1, -1)">
					<input type="button" value="Homemade!" onClick="generatefromtype(0, 6)">
					<input type="button" value="Pistols!" onClick="generatefromtype(1, 6)">
					<input type="button" value="SMG!" onClick="generatefromtype(2, 6)">
					<input type="button" value="Rifles!" onClick="generatefromtype(3, 6)">
					<input type="button" value="Melee!" onClick="generatefromtype(4, 6)">
					<input type="button" value="Explosive!" onClick="generatefromtype(5, 6)">
					<p id="G2"></p>
					<p id="G3"></p>
			</fieldset>
			<fieldset>
				<legend>Generate Better Weapons</legend>
					<input type="button" value="Generate Random Weapons!" onClick="generatefromtype(-2, -2)">
					<input type="button" value="Homemade!" onClick="generatefromtype(0, 6)">
					<input type="button" value="Pistols!" onClick="generatefromtype(6, 6)">
					<input type="button" value="SMG!" onClick="generatefromtype(2, 6)">
					<input type="button" value="Rifles!" onClick="generatefromtype(3, 6)">
					<input type="button" value="Melee!" onClick="generatefromtype(4, 6)">
					<input type="button" value="Explosive!" onClick="generatefromtype(5, 6)">
					<p id="G4"></p>
					<p id="G5"></p>
			</fieldset>
</div>
<script src="fallout_wl.js"></script>
<script src="itemlists.js"></script>
<script src="PnPRollan.js"></script>
		</body>
</html>