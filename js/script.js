var sharedChars = ['kamui', 'azura', 'gunter', 'gunter_cq', 'felicia', 'felicia2', 'jakob', 'jakob2', 'kaze', 'kaze_cq', 'silas', 'asyura', 'asyura_cq', 'izana', 'mozume'];
var hoshidoChars = ['rinkah', 'sakura', 'hana', 'tsubaki', 'saizou', 'orochi', 'hinoka', 'asama', 'setsuna', 'tsukuyomi', 'oboro', 'hinata', 'takumi', 'kagerou', 'yuugiri', 'nishiki', 'ryoma', 'crimson', 'yukimura'];
var nohrChars = ['elise', 'arthur', 'effie', 'odin', 'zero', 'nyx', 'camilla', 'luna', 'belka', 'lazward', 'pieri', 'benoit', 'charlotte', 'leo', 'flannel', 'xander', 'flora'];
var revChars = ['sakura_rev', 'hana_rev', 'saizou_rev', 'orochi_rev', 'hinoka_rev', 'asama_rev', 'setsuna_rev', 'tsukuyomi_rev', 'elise_rev', 'effie_rev', 'arthur_rev', 'odin_rev', 'zero_rev', 'lazward_rev', 'pieri_rev', 'crimson_rev', 'fuuga'];
var otherChars = ['anna'];

var tier1Classes = ['samurai', 'herb_merchant', 'ninja', 'oni', 'lance_fighter', 'spellcaster', 'priest', 'priestess', 'pegasus_warrior', 'bowman', 'dark_prince', 'cavalier', 'knight', 'fighter', 'mercenary', 'outlaw', 'wyvern_rider', 'dark_mage', 'rod_knight'];
var tier2Classes = ['white_blood', 'trueblade', 'weapon_master', 'great_merchant', 'puppeteer', 'jounin', 'shura', 'blacksmith', 'holy_lancer', 'basara', 'exorcist', 'mountain_priest', 'war_priestess', 'falcon_warrior', 'golden_kite_warrior', 'holy_bowman', 'dark_blood', 'paladin', 'great_knight', 'general', 'berserker', 'brave_hero', 'bow_knight', 'adventurer', 'wyvern_lord', 'revenant_knight', 'sorcerer', 'dark_knight', 'strategist', 'maid'];
var specialClasses = ['dread_fighter', 'dark_falcon', 'ballistician', 'witch', 'lodestar', 'great_lord', 'vanguard', 'grandmaster'];

var character;
var class1;
var class2; 
var startingLevel;
var tier1levelcap = 20;
var tier2levelcap = 20;

var assetStat;
var flawStat;

var class1Growths = {};
var class1Levels = {};
var class2Growths = {};
var class2Levels = {};

var unpromotedEndStats;

var parallelSeals = [];
var parallelSealsUsed = 0;

$(document).ready(function() {



	// for (var key in characters) {
	// 	$('select[name=unit]').append('<option value="'+key+'">' + characters[key].name + '</option>');
	// }
	$('select[name=unit]').append('<option value="">---Shared---</option>');
	for (var i=0; i<sharedChars.length; i++) {
		$('select[name=unit]').append('<option value="'+sharedChars[i]+'">' + characters[sharedChars[i]].name + '</option>');
	}
	$('select[name=unit]').append('<option value="">---Birthright---</option>');
	for (var i=0; i<hoshidoChars.length; i++) {
		$('select[name=unit]').append('<option value="'+hoshidoChars[i]+'">' + characters[hoshidoChars[i]].name + '</option>');
	}
	$('select[name=unit]').append('<option value="">----Conquest----</option>');
	for (var i=0; i<nohrChars.length; i++) {
		$('select[name=unit]').append('<option value="'+nohrChars[i]+'">' + characters[nohrChars[i]].name + '</option>');
	}
	$('select[name=unit]').append('<option value="">----Revelation----</option>');
	for (var i=0; i<revChars.length; i++) {
		$('select[name=unit]').append('<option value="'+revChars[i]+'">' + characters[revChars[i]].name + '</option>');
	}
	$('select[name=unit]').append('<option value="">----Other----</option>');
	for (var i=0; i<otherChars.length; i++) {
		$('select[name=unit]').append('<option value="'+otherChars[i]+'">' + characters[otherChars[i]].name + '</option>');
	}
	refreshTier1LevelCap();
	refreshTier2LevelCap();





	$(function() {
		$('select[name=unit]').change(function() {
			// reset all old values
			class1Levels = {};
			class1Growths = {};
			class2Levels = {};
			class2Growths = {};
			unpromotedEndStats = undefined;
			parallelSeals = [];
			parallelSealsUsed = 0;
			tier1levelcap = 20;
			tier2levelcap = 20;
			$('.parallelpair').hide();


			if (!$(this).val()) {
				$('.stattable').hide();
				$('.parallel').hide();
			}
			else {

				character = characters[$(this).val()];
				class1 = classes[character.startingClass];
				startingLevel = character.startingLevel;

				if ($(this).val() == "kamui") {
					$('.assetselect').css({'display': 'inline-block'});
					$('.flawselect').css({'display': 'inline-block'});
				}
				else {
					$('.assetselect').hide();
					$('.flawselect').hide();
				}

				if ($(this).val()) {
					$('.parallel').show();
				}
				else {
					$('.parallel').hide();
				}


				$('.stattable').show();
				$('.stattable').find('.unit-name').text(character.name);
				$('.stattable').find('.unit-startingclass').text(class1.name);

				updatePromotions();

				refreshTier1LevelCap();
				refreshTier2LevelCap();

				$('#promotiontable').hide();

				if (class1.classTier == 'tier1' || class1.classTier == 'special') {
					$('.tier1').show();
					$('.unit-startingclass').show();
					updateTier1Stats();

					if (class1.classTier != 'special') {
						$('select[name=tier1levelcap]').show();
					}
					else {
						$('select[name=tier1levelcap]').hide();
					}
				}
				else if (class1.classTier == 'tier2') {
					$('.tier1').hide();
					$('.unit-startingclass').hide();
					$('.unit-promotedclass').text(class1.name);
					updateTier2Stats();
					$('select[name=tier1levelcap]').hide();
				}
			}

		});
	});



	function updatePromotions() {
		// brings up the list of promotions for the last tier1 class that the unit has been in
		if (class1.classTier == 'tier1' && class1.promotesTo) {
			$('select[name=promotion]').empty();
			var promotions;

			if (getLatestTier1())
				promotions = classes[getLatestTier1()['class']].promotesTo;
			else
				promotions = class1.promotesTo;

			$('select[name=promotion]').append('<option value="">Promotion option:</option>');
			for (var i=0; i<promotions.length; i++) {
				$('select[name=promotion').append('<option value="'+promotions[i]+'">' + classes[promotions[i]].name + '</option>');
				$('select[name=promotion').css({'display': 'inline-block'});
			}
		}
		else {
			$('select[name=promotion]').empty();
			$('select[name=promotion]').hide();
		}
	}

	$('#addparallel').on('click', function() {
		var parlevel = $('select[name=parallellevel'+parallelSealsUsed+']');
		var parclass = $('select[name=parallelclass'+parallelSealsUsed+']');
		parlevel.empty();
		parclass.empty();
		parlevel.append('<option value="">Level</option>');

		if (class1.classTier == 'tier1') {
			parlevel.append('<option value="">-Tier 1-</option>');
			parlevel.append('<option value="">(None)</option>');
			for (var i=startingLevel; i<=tier1levelcap; i++) {
				parlevel.append('<option value='+i+'>'+i+'</option>');
			}
		}
		parlevel.append('<option value="">-Tier 2-</option>');
		parlevel.append('<option value="">(None)</option>');
		var tier2start = 1;
		if (class1.classTier == 'tier2')
			tier2start = startingLevel;
		for (var i=tier2start; i<=tier2levelcap; i++) {
			parlevel.append('<option value='+(20+i)+'>'+i+'</option>');
		}
		parlevel.show();
	});

	$(function() {
		$('.parallellevel').change(function() {
			var parclass = $(this).closest('.parallelcell').find('.parallelclass')
			var id = $(this).attr("name");
			var index = id.charAt(id.length-1);
			if (parallelSealsUsed <= index || (parallelSealsUsed > 0 && 
				((parallelSeals[index]['level'] < 21 && +$(this).val() >= 21) ||
				(parallelSeals[index]['level'] >=21 && +$(this).val() < 21))) ) {
				parclass.empty();
				if ($(this).val()) {
					parclass.append('<option value="">Class</option>');
					if ($(this).val()<=tier1levelcap) {
						parclass.append('<option value="">-----Tier 1-----</option>');
						parclass.append('<option value="">(None)</option>');
						for (var i=0; i<tier1Classes.length; i++) {
							parclass.append('<option value="'+tier1Classes[i]+'">' + classes[tier1Classes[i]].name + '</option>');
						}
					}
					else if ($(this).val()>tier1levelcap) {
						parclass.append('<option value="">-----Tier 2-----</option>');
						parclass.append('<option value="">(None)</option>');
						for (var i=0; i<tier2Classes.length; i++) {
							parclass.append('<option value="'+tier2Classes[i]+'">' + classes[tier2Classes[i]].name + '</option>');
						}
					}
					parclass.show();
				}
				else {
					parclass.hide();
				}
			}

			if ($(this).val() && parclass.val()) {
				if (parallelSeals[index]) removeReclass(index);
				addReclass($(this).val(), parclass.val(), index);
				if ($(this).val() < 21) {
					updatePromotions();
				}
			}
			else if (!$(this).val()) {
				if (parallelSeals[index]) removeReclass(index);
				$(this).hide();
				//updatePromotions();
			}

			updateTier1Stats();	
			if ($('select[name=promotion]').val() || class1.classTier == 'tier2') {
				updateTier2Stats();
			}
			//updatePromotions();
		});

		$('.parallelclass').change(function() {
			var parlevel = $(this).closest('.parallelcell').find('.parallellevel');
			if ($(this).val() && parlevel.val()) {
				var id = $(this).attr("name");
				var index = id.charAt(id.length-1)
				addReclass(parlevel.val(), $(this).val(), index);
			}
			else if (!$(this).val() && parlevel.val()) {
				var id = $(this).attr("name");
				var index = id.charAt(id.length-1)
				removeReclass(index);
			}
			updateTier1Stats();	
			if ($('select[name=promotion]').val() || class1.classTier == 'tier2') {
				updateTier2Stats();
			}
			if (parlevel.val() < 21) {
				updatePromotions();
				$('#promotiontable').hide();
			}
		});

		$('select[name=tier1levelcap]').change(function() {
			tier1levelcap = +$(this).val();
			updateTier1Stats();
			if ($('select[name=promotion]').val())
				updateTier2Stats();
		});
		$('select[name=tier2levelcap]').change(function() {
			tier2levelcap = +$(this).val();
			updateTier1Stats();
			if ($('select[name=promotion]').val() || class1.classTier == 'tier2')
				updateTier2Stats();
		});

	});


	function addReclass(level, newclass, id) {
		if (!parallelSeals[id])
			parallelSealsUsed++;
		parallelSeals[id] = {'level': Number(level), 'class': newclass};
	}
	function removeReclass(id) {
		if (parallelSeals[id])
			parallelSealsUsed--;
		parallelSeals[id] = undefined;
	}


	function updateTier1Stats() {
		$('.tier1').find('tbody').empty();
		//debugger;
		if (class1.classTier == 'tier2') return;

		if (character.special && class1.classTier == "special") tier1levelcap = 40;

		class1Growths = {};
		class1Levels = {};

		for (var stat in character.growths) {
			class1Growths[stat] = character.growths[stat] + class1.growths[stat];
		}


		// Output all initial levels as starting tier1 class.
		// If reclassed at least once at tier1, output up to level at which unit was first reclassed.
		// Otherwise, output up to level 20 (or whichever level the unit promoted at)
		var endClassLevel = tier1levelcap;	
		if (parallelSealsUsed > 0) {
			endClassLevel = parallelSeals[0]['level'];
		}
		for (var i=startingLevel; (i<=endClassLevel && i<=tier1levelcap); i++) {
			var expectedStats = {};
			for (var stat in class1Growths) {
				expectedStats[stat] = character.bases[stat] + class1Growths[stat]*(i-startingLevel)*(0.01);
				if (expectedStats[stat] >= class1.maxStats[stat] + character.mods[stat]) {
					expectedStats[stat] = class1.maxStats[stat] + character.mods[stat];
					expectedStats[stat] = String(expectedStats[stat]) + capIndicator;
				}
				expectedStats[stat] = String(expectedStats[stat]);
			}
			class1Levels[String(i)] = expectedStats;

		}

		// If reclassed at least once at tier1, adjust stats at every level that a parallel seal was used
		// For tier1, do this only up to level 20 at the highest
		// Recolor text for every other reclass to improve visualization
		if (parallelSealsUsed > 0) {
			var startClassLevel = parallelSeals[0]['level'];
			var startbases = class1Levels[String(startClassLevel)];
			var oldclass = class1;
			var newclass = classes[parallelSeals[0]['class']];
			var newclassgrowths = {};

			for (var j=0; j<parallelSeals.length; j++) {
				if (parallelSeals[j]) {
					startClassLevel = parallelSeals[j]['level'];
					newclass = classes[parallelSeals[j]['class']];
					startbases = {};
					newclassgrowths = {};
					for (var stat in class1Levels[startClassLevel]) {
						if (stat != 'even') {
							var pp = class1Levels[startClassLevel][stat];
							if (pp.charAt(pp.length-1) == capIndicator) {
								var temp = pp.slice(0, pp.length-1);
								pp = temp;
							}
							startbases[stat] = Number(pp);
						}
					}
					startbases = newStats(startbases, oldclass.bases, newclass.bases);


					for (var stat in character.growths) {
						if (stat != 'even')
							newclassgrowths[stat] = character.growths[stat] + newclass.growths[stat];
					}

					endClassLevel = (j < parallelSeals.length-1 && parallelSeals[j+1]) ? parallelSeals[j+1]['level'] : tier1levelcap;
					for (var i=startClassLevel; (i<=endClassLevel && i<=20); i++) {
						var expectedStats = {};
						for (var stat in newclassgrowths) {
							expectedStats[stat] = startbases[stat] + newclassgrowths[stat]*(i-startClassLevel)*(0.01);
							if (expectedStats[stat] >= newclass.maxStats[stat] + character.mods[stat]) {
								expectedStats[stat] = newclass.maxStats[stat] + character.mods[stat];
								expectedStats[stat] = String(expectedStats[stat]) + capIndicator;
							}
							expectedStats[stat] = String(expectedStats[stat]);
						}
						if (j%2==0) {
							expectedStats['even'] = true;
						}
						class1Levels[String(i)] = expectedStats;
					}

					oldclass = classes[parallelSeals[j]['class']];
				}
			}
		}
		unpromotedEndStats = class1Levels[String(tier1levelcap)];

		for (var level in class1Levels) {
			var line = '<tr class="statcell"';
			if (class1Levels[level]['even']) {
				line += ' style="color: blue;"';
			}
			line += '>';
			line += '<td>' + level + '</td>';
			for (var stat in class1Levels[level]) {
				if (stat != 'even') {
					var statvalue = numFormat(class1Levels[level][stat], true);
					if (statvalue.charAt(statvalue.length-1) == capIndicator) {
						var temp = statvalue.slice(0, statvalue.length-1);
						statvalue = '<strong>'+temp+'</strong>'
					}
					line += '<td>' + statvalue + '</td>';
				}
			}
			line += '</tr>';
			$('.tier1').find('tbody').append(line);
		}

		var tier1Caps = '<tr class="statcell">';
		tier1Caps += '<td>Caps:</td>';

		var tier1maxStats;
		if (getLatestTier1())
			tier1maxStats = classes[getLatestTier1()['class']].maxStats;
		else
			tier1maxStats = class1.maxStats;


		for (var stat in tier1maxStats) {
			tier1Caps += '<td>/' + (tier1maxStats[stat] + character.mods[stat]) + '</td>';
		}
		tier1Caps += '</tr>';
		$('.tier1').find('tbody').append(tier1Caps);

	}


	function updateTier2Stats() {
		$('.tier2').find('tbody').empty();

		updateTier1Stats();
		if (character.special && tier2levelcap < 40) {
			tier2levelcap = 40;
		}

		// If recruited as an unpromoted unit, start out at level 1 in tier 2.
		// If recruited as a prepromote, use the unit's regular starting level
		// Starting level is stored in the tier2start variable
		var tier2start = 1;
		if (class1.classTier == "tier2") {
			tier2start = startingLevel;
		}

		class2Growths = {};
		class2Levels = {};

		var tier2class;
		if (class1.classTier == 'tier1') tier2class = class2;
		else if (class1.classTier == 'tier2') tier2class = class1;

		for (var stat in character.growths) {
			class2Growths[stat] = character.growths[stat] + tier2class.growths[stat];
		}

		// Calculate the starting tier2 stats of the unit based on what his/her stats were right before promotion.
		// Make sure to calculate promotion bonuses based on the tier1 class the unit was in right before promotion.
		// If unit is a prepromote, simply use the starting bases

		if (unpromotedEndStats) {
			for (var stat in unpromotedEndStats) {
				if (isNaN(unpromotedEndStats[stat]) && unpromotedEndStats[stat].charAt(unpromotedEndStats[stat].length-1)==capIndicator) {
					unpromotedEndStats[stat] = unpromotedEndStats[stat].slice(0, unpromotedEndStats[stat].length-1);
				}
				unpromotedEndStats[stat] = Number(numFormat(unpromotedEndStats[stat], true));				
			}
		}
		var promotedBases;
		if (class1.classTier == 'tier1') {
			if (getLatestTier1())
				promotedBases = newStats(unpromotedEndStats, classes[getLatestTier1()['class']].bases, tier2class.bases);
			else
				promotedBases = newStats(unpromotedEndStats, class1.bases, tier2class.bases);
		}
		else if (class1.classTier == 'tier2')
			promotedBases = character.bases;


		// Output all initial levels as starting tier2 class.
		// If reclassed at least once at tier2, output up to level at which unit was first reclassed.
		// Otherwise, output up to level 20 (or whatever the tier 2 level cap is set to)
		var endClassLevel = tier2levelcap;
		if (getFirstTier2())
			endClassLevel = getFirstTier2()['level'] - 20;

		for (var i=tier2start; i<=endClassLevel; i++) {
			var expectedPStats = {};
			for (var stat in class2Growths) {
				expectedPStats[stat] = promotedBases[stat] + class2Growths[stat]*(i-tier2start)*(0.01);
				if (expectedPStats[stat] >= tier2class.maxStats[stat] + character.mods[stat]) {
					expectedPStats[stat] = tier2class.maxStats[stat] + character.mods[stat];
					expectedPStats[stat] = String(expectedPStats[stat]) + capIndicator;
				}
				expectedPStats[stat] = String(expectedPStats[stat]);
			}
			class2Levels[String(i)] = expectedPStats;
		}

		// If reclassed at least once at tier2, adjust stats at every level that a parallel seal was used
		// For tier2, do this starting from level 21, up to tier 2 level cap
		// Recolor text for every other reclass to improve visualization
		if (parallelSealsUsed > 0 && getFirstTier2()) {
			//debugger;
			var startClassLevel = getFirstTier2()['level'] - 20;
			var startbases;
			var oldclass = tier2class;
			var newclass = classes[getFirstTier2()['class']];
			var newclassgrowths = {};

			// count how many times unit reclassed as a tier1 unit
			// to keep track of color alternating kkk
			var tier1reclass = 0;
			for (var i=0; i<parallelSeals.length; i++) {
				if (parallelSeals[i] && (parallelSeals[i]['level'] < 21))
					tier1reclass++;
			}
			// also count number of undefined reclasses
			var undefinedreclass = 0;
			for (var i=0; i<parallelSeals.length; i++) {
				if (parallelSeals[i] == undefined)
					undefinedreclass++;
			}


			for (var j=0; j<parallelSeals.length; j++) {
				if (parallelSeals[j] && (parallelSeals[j]['level'] > 20)) {
					startClassLevel = parallelSeals[j]['level'] - 20;
					newclass = classes[parallelSeals[j]['class']];
					startbases = {};
					newclassgrowths = {};
					for (var stat in class2Levels[startClassLevel]) {
						if (stat != 'even') {
							var pp = class2Levels[startClassLevel][stat];
							if (pp.charAt(pp.length-1) == capIndicator) {
								var temp = pp.slice(0, pp.length-1);
								pp = temp;
							}
							startbases[stat] = Number(pp);
						}
					}
					startbases = newStats(startbases, oldclass.bases, newclass.bases);
					for (var stat in character.growths) {
						if (stat != 'even')
							newclassgrowths[stat] = character.growths[stat] + newclass.growths[stat];
					}

					endClassLevel = (j < parallelSeals.length-1 && parallelSeals[j+1]) ? (parallelSeals[j+1]['level']-20) : tier2levelcap;
					for (var i=startClassLevel; i<=endClassLevel; i++) {
						var expectedStats = {};
						for (var stat in newclassgrowths) {
							expectedStats[stat] = startbases[stat] + newclassgrowths[stat]*(i-startClassLevel)*(0.01);
							if (expectedStats[stat] >= newclass.maxStats[stat] + character.mods[stat]) {
								expectedStats[stat] = newclass.maxStats[stat] + character.mods[stat];
								expectedStats[stat] = String(expectedStats[stat]) + capIndicator;
							}
							expectedStats[stat] = String(expectedStats[stat]);
						}
						if ((j - tier1reclass - undefinedreclass)%2==0) {
							expectedStats['even'] = true;
						}
						class2Levels[String(i)] = expectedStats;
					}
					oldclass = classes[parallelSeals[j]['class']];
				}
			}
		}

		for (var level in class2Levels) {
			var line = '<tr class="statcell"';
			if (class2Levels[level]['even']) {
				line += ' style="color: blue;"';
			}
			line += '>';
			line += '<td>' + level + '</td>';
			for (var stat in class2Levels[level]) {
				if (stat != 'even') {
					var statvalue = numFormat(class2Levels[level][stat], true);
					if (statvalue.charAt(statvalue.length-1) == capIndicator) {
						var temp = statvalue.slice(0, statvalue.length-1);
						statvalue = '<strong>'+temp+'</strong>'
					}
					line += '<td>' + statvalue + '</td>';
				}
			}
			line += '</tr>';
			$('.tier2').find('tbody').append(line);
		}
		var tier2Caps = '<tr class="statcell">';
		tier2Caps += '<td>Caps:</td>';

		var tier2maxStats;
		if (getLatestTier2())
			tier2maxStats = classes[getLatestTier2()['class']].maxStats;
		else
			tier2maxStats = tier2class.maxStats;

		for (var stat in tier2maxStats) {
			tier2Caps += '<td>/' + (tier2maxStats[stat] + character.mods[stat]) + '</td>';
		}
		tier2Caps += '</tr>';
		$('.tier2').find('tbody').append(tier2Caps);
		$('#promotiontable').show();

	}

	// use this to get info on the last tier1 class a unit was in before promoting
	// add ['class'] or ['level'] to the returned object to get the corresponding value
	function getLatestTier1() {
		var latestTier1Object;
		var latestTier1Level = 0;
		if (parallelSealsUsed > 0) {
			for (var i=0; i<parallelSeals.length; i++) {
				if (parallelSeals[i]) {
					var templevel = parallelSeals[i]['level'];
					if (templevel < 21 && templevel > latestTier1Level) {
						latestTier1Level = templevel;
						latestTier1Object = parallelSeals[i];
					}
				}
			}
			return latestTier1Object;
		}
		else return null;
	}

	// same thing but for final tier2 class
	function getLatestTier2() {
		var latestTier2Object;
		var latestTier2Level = 0;
		if (parallelSealsUsed > 0) {
			for (var i=0; i<parallelSeals.length; i++) {
				if (parallelSeals[i]) {
					var templevel = parallelSeals[i]['level'];
					if (templevel > 20 && templevel > latestTier2Level) {
						latestTier2Level = templevel;
						latestTier2Object = parallelSeals[i];
					}
				}
			}
			return latestTier2Object;
		}
		else return null;
	}

	// use this to get info on the first tier2 class a unit reclassed to
	// add ['class'] or ['level'] to the returned object to get the corresponding value
	function getFirstTier2() {
		var firstTier2Object;
		var firstTier2Level = 100;
		if (parallelSealsUsed > 0) {
			for (var i=0; i<parallelSeals.length; i++) {
				if (parallelSeals[i]) {
					var templevel = parallelSeals[i]['level'];
					if (templevel > 20 && templevel < firstTier2Level) {
						firstTier2Level = templevel;
						firstTier2Object = parallelSeals[i];
					}
				}
			}
			return firstTier2Object;
		}
		else return null;
	}


	// Asset/flaw dropdown
	var assetflaws = ["HP", "Str", "Mag", "Skl", "Spd", "Lck", "Def", "Res"];
	for (var i=0; i<assetflaws.length; i++) {
		$('select[name=asset]').append("<option value='"+assetflaws[i]+"'>+"+assetflaws[i]+"</option>");
		$('select[name=flaw]').append("<option value='"+assetflaws[i]+"'>-"+assetflaws[i]+"</option>");
	}


	$(function() {
		$('select[name=asset]').change(function() {
			updateAvatar();
		});
		$('select[name=flaw]').change(function() {
			updateAvatar();
		});
	});

	function updateAvatar() {
		if ($('select[name=asset]').val() && $('select[name=flaw]').val() &&
			($('select[name=asset]').val() != $('select[name=flaw]').val())) {
			assetStat = $('select[name=asset]').val();
			flawStat = $('select[name=flaw]').val();
			character.mods = calculateAvatarMods(assetStat, flawStat);
			character.growths = calculateAvatarGrowths(assetStat, flawStat);
			character.bases = calculateAvatarBases(assetStat, flawStat);
		}
		else {
			assetStat = ""; flawStat = "";
			character.mods = {};
			character.growths = {};
			character.bases = {};
		}	
		updateTier1Stats();	
		if ($('select[name=promotion]').val())
			updateTier2Stats();
	}

	$(function() {
		$('select[name=promotion]').change(function() {
			if ($(this).val()) {
				class2 = classes[$(this).val()];
				updateTier2Stats();
				$('#promotiontable').find('.unit-promotedclass').text(class2.name);
				$('#promotiontable').show();
			}
			else {
				class2 = undefined;
				$('#promotiontable').hide();
			}
		});
	});

	function refreshTier1LevelCap() {
		$('select[name=tier1levelcap').empty();
		$('select[name=tier1levelcap]').append('<option value="">Promote when</option>');
		var firstEligible = Math.max(startingLevel, 10);
		for (var i=firstEligible; i<=20; i++) {
			$('select[name=tier1levelcap]').append('<option value="'+i+'">' + i + '</option>');
		}
	}
	function refreshTier2LevelCap() {
		$('select[name=tier2levelcap').empty();
		$('select[name=tier2levelcap]').append('<option value="">Tier 2 Level Cap</option>');
		for (var i=20; i<100; i=i+5) {
			$('select[name=tier2levelcap]').append('<option value="'+i+'">' + i + '</option>');
		}
		$('select[name=tier2levelcap]').append('<option value="99">99</option>');
	}


	$(window).on('scroll', function() {
		$('.fixed').toggleClass('sticky', $(window).scrollTop() > $('.fixed').offset().top);
	});

	function stickyRelocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('.sticky-anchor').offset().top;
		if (window_top > div_top)
			$('.fixed').addClass('sticky');
		else
			$('.fixed').removeClass('sticky');
	}
	$(function() {
		$(window).scroll(stickyRelocate);
		stickyRelocate();
	});










	function statChanges(oldBases, newBases) {
		var statchanges = {};
		for (var stat in oldBases) {
			statchanges[stat] = newBases[stat] - oldBases[stat];
		}
		return statchanges;
	}
	function newStats(oldStats, oldBases, newBases) {
		var newStats = {};
		var statchanges = statChanges(oldBases, newBases);
		for (var stat in oldStats) {
			newStats[stat] = oldStats[stat] + statchanges[stat];
		}
		return newStats;
	}
	function numFormat(number, dec) {
		var num;
		if (!isNaN(Number(number))) {
			num = Number(number);
			num = String(num.toFixed(2));
		}
		else
			num = String(number);

		var parts = num.split(".");

		if (parts[1] && parts[1].charAt(0)=='0') {
			if (parts[1].charAt(1)=='0')
				parts[1] = undefined;
			else
				parts[1] = parts[1].slice(0,2);
		}
		else if (parts[1]) {
			if (parts[1].charAt(1)=='0')
				parts[1] = parts[1].slice(0,1);
			else if (parts[1].charAt(2))
				parts[1] = parts[1].slice(0,2);
		}
		num = parts[0];
		if (parts[1]) num += ('.'+parts[1]);
		return num;
	}




});

