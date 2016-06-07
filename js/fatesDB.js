var assetStat = "Str";
var flawStat = "Def";
var avatarCustom = {};

var avatarMods = {
	"asset": {
		"HP": {"Str": 1, "Mag": 1, "Skl": 0, "Spd": 0, "Lck": 2, "Def": 2, "Res": 2},
		"Str": {"Str": 4, "Mag": 0, "Skl": 2, "Spd": 0, "Lck": 0, "Def": 2, "Res": 0},
		"Mag": {"Str": 0, "Mag": 4, "Skl": 0, "Spd": 2, "Lck": 0, "Def": 0, "Res": 2},
		"Skl": {"Str": 2, "Mag": 0, "Skl": 4, "Spd": 0, "Lck": 0, "Def": 2, "Res": 0},
		"Spd": {"Str": 0, "Mag": 0, "Skl": 2, "Spd": 4, "Lck": 2, "Def": 0, "Res": 0},
		"Lck": {"Str": 2, "Mag": 2, "Skl": 0, "Spd": 0, "Lck": 4, "Def": 0, "Res": 0},
		"Def": {"Str": 0, "Mag": 0, "Skl": 0, "Spd": 0, "Lck": 2, "Def": 4, "Res": 2},
		"Res": {"Str": 0, "Mag": 2, "Skl": 0, "Spd": 2, "Lck": 0, "Def": 0, "Res": 4}
	},
	"flaw": {
		"HP": {"Str": -1, "Mag": -1, "Skl": 0, "Spd": 0, "Lck":-1, "Def": -1, "Res": -1},
		"Str": {"Str": -3, "Mag": 0, "Skl": -1, "Spd": 0, "Lck": 0, "Def": -1, "Res": 0},
		"Mag": {"Str": 0, "Mag": -3, "Skl": 0, "Spd": -1, "Lck": 0, "Def": 0, "Res": -1},
		"Skl": {"Str": -1, "Mag": 0, "Skl": -3, "Spd": 0, "Lck": 0, "Def": -1, "Res": 0},
		"Spd": {"Str": 0, "Mag": 0, "Skl": -1, "Spd": -3, "Lck": -1, "Def": 0, "Res": 0},
		"Lck": {"Str": -1, "Mag": -1, "Skl": 0, "Spd": 0, "Lck": -3, "Def": 0, "Res": 0},
		"Def": {"Str": 0, "Mag": 0, "Skl": 0, "Spd": 0, "Lck": -1, "Def": -3, "Res": -1},
		"Res": {"Str": 0, "Mag": -1, "Skl": 0, "Spd": -1, "Lck": 0, "Def": 0, "Res": -3}
	}
};

var avatarGrowthMods = {
	"asset": {
		"HP": {"HP": 15, "Str": 0, "Mag": 0, "Skl": 0, "Spd": 0, "Lck": 0, "Def": 5, "Res": 5},
		"Str": {"HP": 0, "Str": 15, "Mag": 0, "Skl": 5, "Spd": 0, "Lck": 0, "Def": 5, "Res": 0},
		"Mag": {"HP": 0, "Str": 0, "Mag": 20, "Skl": 0, "Spd": 5, "Lck": 0, "Def": 0, "Res": 5},
		"Skl": {"HP": 0, "Str": 5, "Mag": 0, "Skl": 25, "Spd": 0, "Lck": 0, "Def": 5, "Res": 0},
		"Spd": {"HP": 0, "Str": 0, "Mag": 0, "Skl": 5, "Spd": 15, "Lck": 5, "Def": 0, "Res": 0},
		"Lck": {"HP": 0, "Str": 5, "Mag": 5, "Skl": 0, "Spd": 0, "Lck": 25, "Def": 0, "Res": 0},
		"Def": {"HP": 0, "Str": 0, "Mag": 0, "Skl": 0, "Spd": 0, "Lck": 5, "Def": 10, "Res": 5},
		"Res": {"HP": 0, "Str": 0, "Mag": 5, "Skl": 0, "Spd": 5, "Lck": 0, "Def": 0, "Res": 10}
	},
	"flaw": {
		"HP": {"HP": -10, "Str": 0, "Mag": 0, "Skl": 0, "Spd": 0, "Lck": 0, "Def": -5, "Res": -5},
		"Str": {"HP": 0, "Str": -10, "Mag": 0, "Skl": -5, "Spd": 0, "Lck": 0, "Def": -5, "Res": 0},
		"Mag": {"HP": 0, "Str": 0, "Mag": -15, "Skl": 0, "Spd": -5, "Lck": 0, "Def": 0, "Res": -5},
		"Skl": {"HP": 0, "Str": -5, "Mag": 0, "Skl": -20, "Spd": 0, "Lck": 0, "Def": -5, "Res": 0},
		"Spd": {"HP": 0, "Str": 0, "Mag": 0, "Skl": -5, "Spd": -10, "Lck": -5, "Def": 0, "Res": 0},
		"Lck": {"HP": 0, "Str": -5, "Mag": -5, "Skl": 0, "Spd": 0, "Lck": -20, "Def": 0, "Res": 0},
		"Def": {"HP": 0, "Str": 0, "Mag": 0, "Skl": 0, "Spd": 0, "Lck": -5, "Def": -10, "Res": -5},
		"Res": {"HP": 0, "Str": 0, "Mag": -5, "Skl": 0, "Spd": -5, "Lck": 0, "Def": 0, "Res": -10}
	},
};

var avatarBaseMods = {
	"asset": {"HP": 3, "Str": 2, "Mag": 3, "Skl": 3, "Spd": 2, "Lck": 3, "Def": 1, "Res": 1},
	"flaw": {"HP": -2, "Str": -1, "Mag": -2, "Skl": -2, "Spd": -1, "Lck": -2, "Def": -1, "Res": -1}
}

function calculateAvatarMods(a, f) {
	var mods = {"HP": 0, "Str": 0, "Mag": 0, "Skl": 0, "Spd": 0, "Lck": 0, "Def": 0, "Res": 0};
	for (var stat in avatarMods.asset.HP) {
		mods[stat] += avatarMods.asset[a][stat] + avatarMods.flaw[f][stat];
	}
	return mods;
}
function calculateAvatarGrowths(a, f) {
	var growths = {"HP": 45, "Str": 45, "Mag": 30, "Skl": 40, "Spd": 45, "Lck": 45, "Def": 35, "Res": 25};
	for (var stat in growths) {
		growths[stat] += avatarGrowthMods.asset[a][stat] + avatarGrowthMods.flaw[f][stat];
	}
	return growths;
}
function calculateAvatarBases(a, f) {
	var bases = {"HP": 19, "Str": 7, "Mag": 4, "Skl": 7, "Spd": 6, "Lck": 5, "Def": 6, "Res": 2};
	for (var stat in bases) {
		if (a == stat) bases[stat] += avatarBaseMods.asset[stat];
		else if (f == stat) bases[stat] += avatarBaseMods.flaw[stat];
	}
	return bases;
}


var characters = {
	"kamui": {
		"name": "Corrin",
		"gender": "either",
		"gen": 1,
		"child": "kanna",
		"support": true,
		"startingClass": "dark_prince",
		"startingLevel": 1,
		"bases": {},
		"growths": {},
		"mods": {},
		"baseClass1": "dark_prince"
	},

	"azura": {
		"name": "Azura",
		"gender": "F",
		"gen": 1,
		"child": "shigure",
		"support": true,
		"startingClass": "singer",
		"startingLevel": 1,
		"bases": {"HP": 16, "Str": 5, "Mag": 2, "Skl": 8, "Spd": 8, "Lck": 6, "Def": 4, "Res": 7},
		"growths": {"HP": 25, "Str": 50, "Mag": 25, "Skl": 60, "Spd": 60, "Lck": 40, "Def": 15, "Res": 35},
		"mods": {"HP": 0, "Str": 0, "Mag": 0, "Skl": 1, "Spd": 3, "Lck": 0, "Def": -3, "Res": 0},
		"baseClass1": "singer",
		"baseClass2": "pegasus_warrior",
		"special": true
	},

	"gunter": {
		"name": "Gunter",
		"gender": "M",
		"gen": 1,
		"support": false,
		"startingClass": "great_knight",
		"startingLevel": 3,
		"bases": {"HP": 24, "Str": 10, "Mag": 0, "Skl": 15, "Spd": 8, "Lck": 9, "Def": 10, "Res": 4},
		"growths": {"HP": 15, "Str": 5, "Mag": 0, "Skl": 5, "Spd": 0, "Lck": 15, "Def": 5, "Res": 5},
		"mods": {"HP": 0, "Str": 2, "Mag": 0, "Skl": 1, "Spd": -2, "Lck": 0, "Def": 2, "Res": -2},
		"baseClass1": "cavalier",
		"baseClass2": "mercenary",
		"baseClass3": "wyvern_rider"
	},

	"felicia": {
		"name": "Felicia",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "maid",
		"startingLevel": 1,
		"bases": {"HP": 19, "Str": 5, "Mag": 9, "Skl": 10, "Spd": 10, "Lck": 12, "Def": 5, "Res": 9},
		"growths": {"HP": 40, "Str": 10, "Mag": 35, "Skl": 30, "Spd": 40, "Lck": 55, "Def": 15, "Res": 35},
		"mods": {"HP": 0, "Str": -2, "Mag": 2, "Skl": 0, "Spd": 1, "Lck": 0, "Def": -1, "Res": 1},
		"baseClass1": "rod_knight",
		"baseClass2": "mercenary",
		"special": true
	},

	"jakob": {
		"name": "Jakob",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "deere",
		"startingClass": "maid",
		"startingLevel": 1,
		"bases": {"HP": 21, "Str": 8, "Mag": 6, "Skl": 12, "Spd": 9, "Lck": 10, "Def": 7, "Res": 6},
		"growths": {"HP": 50, "Str": 35, "Mag": 15, "Skl": 40, "Spd": 35, "Lck": 45, "Def": 25, "Res": 25},
		"mods": {"HP": 0, "Str": 2, "Mag": -2, "Skl": 2, "Spd": 0, "Lck": -1, "Def": 0, "Res": -1},
		"baseClass1": "rod_knight",
		"baseClass2": "cavalier",
		"special": true
	},	

	"kaze": {
		"name": "Kaze",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "midoriko",
		"startingClass": "ninja",
		"startingLevel": 3,
		"bases": {"HP": 19, "Str": 7, "Mag": 0, "Skl": 9, "Spd": 12, "Lck": 4, "Def": 5, "Res": 10},
		"growths": {"HP": 55, "Str": 40, "Mag": 0, "Skl": 45, "Spd": 65, "Lck": 20, "Def": 20, "Res": 35},
		"mods": {"HP": 0, "Str": -2, "Mag": 0, "Skl": 2, "Spd": 3, "Lck": -2, "Def": -1, "Res": 0},
		"baseClass1": "ninja",
		"baseClass2": "samurai"
	},

	"silas": {
		"name": "Silas",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "sophie",
		"startingClass": "cavalier",
		"startingLevel": 6,
		"bases": {"HP": 22, "Str": 11, "Mag": 0, "Skl": 9, "Spd": 8, "Lck": 7, "Def": 10, "Res": 5},
		"growths": {"HP": 40, "Str": 45, "Mag": 5, "Skl": 50, "Spd": 40, "Lck": 40, "Def": 40, "Res": 25},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": 2, "Spd": 0, "Lck": -1, "Def": 0, "Res": -1},
		"baseClass1": "cavalier",
		"baseClass2": "mercenary"
	},	

	"mozume": {
		"name": "Mozu",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "villager",
		"startingLevel": 1,
		"bases": {"HP": 16, "Str": 6, "Mag": 0, "Skl": 5, "Spd": 7, "Lck": 3, "Def": 4, "Res": 1},
		"growths": {"HP": 40, "Str": 50, "Mag": 15, "Skl": 60, "Spd": 65, "Lck": 55, "Def": 45, "Res": 40},
		"mods": {"HP": 0, "Str": 0, "Mag": 0, "Skl": 1, "Spd": 1, "Lck": 1, "Def": 0, "Res": -2},
		"baseClass1": "villager",
		"baseClass2": "bowman"
	},	

	"rinkah": {
		"name": "Rinkah",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "oni",
		"startingLevel": 4,
		"bases": {"HP": 20, "Str": 8, "Mag": 2, "Skl": 6, "Spd": 8, "Lck": 5, "Def": 10, "Res": 3},
		"growths": {"HP": 20, "Str": 25, "Mag": 15, "Skl": 50, "Spd": 45, "Lck": 35, "Def": 45, "Res": 20},
		"mods": {"HP": 0, "Str": -1, "Mag": 0, "Skl": -2, "Spd": 1, "Lck": 0, "Def": 2, "Res": 0},
		"baseClass1": "oni",
		"baseClass2": "ninja"
	},

	"sakura": {
		"name": "Sakura",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "priestess",
		"startingLevel": 1,
		"bases": {"HP": 16, "Str": 3, "Mag": 6, "Skl": 5, "Spd": 7, "Lck": 9, "Def": 5, "Res": 7},
		"growths": {"HP": 45, "Str": 30, "Mag": 50, "Skl": 40, "Spd": 40, "Lck": 55, "Def": 30, "Res": 20},
		"mods": {"HP": 0, "Str": 0, "Mag": 2, "Skl": -1, "Spd": 1, "Lck": 0, "Def": -1, "Res": 0},
		"baseClass1": "priestess",
		"baseClass2": "pegasus_warrior"
	},

	"hana": {
		"name": "Hana",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "samurai",
		"startingLevel": 5,
		"bases": {"HP": 20, "Str": 9, "Mag": 0, "Skl": 11, "Spd": 11, "Lck": 5, "Def": 6, "Res": 9},
		"growths": {"HP": 25, "Str": 55, "Mag": 10, "Skl": 45, "Spd": 55, "Lck": 25, "Def": 20, "Res": 30},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": 1, "Spd": 2, "Lck": -1, "Def": -3, "Res": 1},
		"baseClass1": "samurai",
		"baseClass2": "priestess"
	},

	"tsubaki": {
		"name": "Subaki",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "matoi",
		"startingClass": "pegasus_warrior",
		"startingLevel": 5,
		"bases": {"HP": 22, "Str": 8, "Mag": 0, "Skl": 13, "Spd": 10, "Lck": 7, "Def": 9, "Res": 10},
		"growths": {"HP": 55, "Str": 30, "Mag": 20, "Skl": 50, "Spd": 20, "Lck": 25, "Def": 45, "Res": 5},
		"mods": {"HP": 0, "Str": -1, "Mag": 0, "Skl": 2, "Spd": -2, "Lck": -1, "Def": 3, "Res": -1},
		"baseClass1": "pegasus_warrior",
		"baseClass2": "samurai"
	},

	"saizou": {
		"name": "Saizo",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "grey",
		"startingClass": "ninja",
		"startingLevel": 7,
		"bases": {"HP": 23, "Str": 11, "Mag": 3, "Skl": 14, "Spd": 11, "Lck": 9, "Def": 9, "Res": 7},
		"growths": {"HP": 40, "Str": 50, "Mag": 45, "Skl": 60, "Spd": 30, "Lck": 55, "Def": 45, "Res": 10},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": 3, "Spd": -2, "Lck": 0, "Def": 1, "Res": -2},
		"baseClass1": "ninja",
		"baseClass2": "samurai"
	},

	"orochi": {
		"name": "Orochi",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "spellcaster",
		"startingLevel": 5,
		"bases": {"HP": 20, "Str": 0, "Mag": 9, "Skl": 11, "Spd": 7, "Lck": 6, "Def": 5, "Res": 10},
		"growths": {"HP": 35, "Str": 5, "Mag": 65, "Skl": 50, "Spd": 15, "Lck": 35, "Def": 25, "Res": 45},
		"mods": {"HP": 0, "Str": 0, "Mag": 3, "Skl": 2, "Spd": -2, "Lck": -1, "Def": -2, "Res": 1},
		"baseClass1": "spellcaster",
		"baseClass2": "herb_merchant"
	},

	"hinoka": {
		"name": "Hinoka",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "pegasus_warrior",
		"startingLevel": 8,
		"bases": {"HP": 23, "Str": 9, "Mag": 4, "Skl": 13, "Spd": 16, "Lck": 12, "Def": 9, "Res": 15},
		"growths": {"HP": 45, "Str": 45, "Mag": 15, "Skl": 40, "Spd": 45, "Lck": 40, "Def": 35, "Res": 40},
		"mods": {"HP": 0, "Str": 1, "Mag": -1, "Skl": -1, "Spd": 1, "Lck": 0, "Def": -1, "Res": 2},
		"baseClass1": "pegasus_warrior",
		"baseClass2": "lance_fighter"
	},

	"asama": {
		"name": "Azama",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "mitama",
		"startingClass": "priest",
		"startingLevel": 7,
		"bases": {"HP": 24, "Str": 9, "Mag": 7, "Skl": 9, "Spd": 10, "Lck": 12, "Def": 10, "Res": 8},
		"growths": {"HP": 55, "Str": 50, "Mag": 20, "Skl": 40, "Spd": 45, "Lck": 40, "Def": 40, "Res": 20},
		"mods": {"HP": 0, "Str": 2, "Mag": -3, "Skl": 0, "Spd": 1, "Lck": 0, "Def": 1, "Res": 0},
		"baseClass1": "priest",
		"baseClass2": "herb_merchant"
	},

	"setsuna": {
		"name": "Setsuna",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "bowman",
		"startingLevel": 3,
		"bases": {"HP": 19, "Str": 8, "Mag": 0, "Skl": 9, "Spd": 10, "Lck": 6, "Def": 5, "Res": 3},
		"growths": {"HP": 30, "Str": 20, "Mag": 0, "Skl": 30, "Spd": 60, "Lck": 30, "Def": 15, "Res": 40},
		"mods": {"HP": 0, "Str": 0, "Mag": 0, "Skl": 1, "Spd": 3, "Lck": -1, "Def": -1, "Res": -1},
		"baseClass1": "bowman",
		"baseClass2": "ninja"
	},

	"tsukuyomi": {
		"name": "Hayato",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "shara",
		"startingClass": "spellcaster",
		"startingLevel": 1,
		"bases": {"HP": 16, "Str": 1, "Mag": 4, "Skl": 5, "Spd": 7, "Lck": 8, "Def": 4, "Res": 5},
		"growths": {"HP": 50, "Str": 30, "Mag": 40, "Skl": 30, "Spd": 45, "Lck": 60, "Def": 40, "Res": 20},
		"mods": {"HP": 0, "Str": 0, "Mag": 1, "Skl": -1, "Spd": 2, "Lck": 1, "Def": -1, "Res": -1},
		"baseClass1": "spellcaster",
		"baseClass2": "oni"
	},

	"oboro": {
		"name": "Oboro",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "lance_fighter",
		"startingLevel": 10,
		"bases": {"HP": 25, "Str": 13, "Mag": 0, "Skl": 11, "Spd": 12, "Lck": 11, "Def": 13, "Res": 8},
		"growths": {"HP": 30, "Str": 40, "Mag": 20, "Skl": 40, "Spd": 40, "Lck": 40, "Def": 40, "Res": 30},
		"mods": {"HP": 0, "Str": 1, "Mag": -1, "Skl": 1, "Spd": 1, "Lck": -1, "Def": 1, "Res": -1},
		"baseClass1": "lance_fighter",
		"baseClass2": "herb_merchant"
	},

	"hinata": {
		"name": "Hinata",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "hisame",
		"startingClass": "samurai",
		"startingLevel": 10,
		"bases": {"HP": 26, "Str": 11, "Mag": 0, "Skl": 9, "Spd": 14, "Lck": 10, "Def": 12, "Res": 4},
		"growths": {"HP": 55, "Str": 35, "Mag": 0, "Skl": 25, "Spd": 15, "Lck": 45, "Def": 45, "Res": 15},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": -1, "Spd": -2, "Lck": 0, "Def": 2, "Res": 0},
		"baseClass1": "samurai",
		"baseClass2": "oni"
	},

	"takumi": {
		"name": "Takumi",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "kisaragi",
		"startingClass": "bowman",
		"startingLevel": 11,
		"bases": {"HP": 26, "Str": 13, "Mag": 0, "Skl": 17, "Spd": 11, "Lck": 13, "Def": 10, "Res": 4},
		"growths": {"HP": 50, "Str": 35, "Mag": 0, "Skl": 60, "Spd": 40, "Lck": 45, "Def": 35, "Res": 20},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": 3, "Spd": -2, "Lck": 1, "Def": 0, "Res": -2},
		"baseClass1": "bowman",
		"baseClass2": "lance_fighter"
	},

	"kagerou": {
		"name": "Kagero",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "ninja",
		"startingLevel": 10,
		"bases": {"HP": 22, "Str": 15, "Mag": 0, "Skl": 10, "Spd": 12, "Lck": 7, "Def": 9, "Res": 10},
		"growths": {"HP": 30, "Str": 65, "Mag": 0, "Skl": 20, "Spd": 50, "Lck": 30, "Def": 25, "Res": 40},
		"mods": {"HP": 0, "Str": 3, "Mag": 0, "Skl": -1, "Spd": -1, "Lck": 0, "Def": -1, "Res": 1},
		"baseClass1": "ninja",
		"baseClass2": "spellcaster"
	},

	"nishiki": {
		"name": "Kaden",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "kinu",
		"startingClass": "fox_spirit",
		"startingLevel": 14,
		"bases": {"HP": 30, "Str": 15, "Mag": 1, "Skl": 12, "Spd": 19, "Lck": 14, "Def": 9, "Res": 14},
		"growths": {"HP": 45, "Str": 40, "Mag": 10, "Skl": 25, "Spd": 45, "Lck": 50, "Def": 35, "Res": 40},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": -3, "Spd": 2, "Lck": 1, "Def": -2, "Res": 2},
		"baseClass1": "fox_spirit",
		"baseClass2": "spellcaster"
	},

	"ryoma": {
		"name": "Ryoma",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "shinonome",
		"startingClass": "trueblade",
		"startingLevel": 4,
		"bases": {"HP": 36, "Str": 20, "Mag": 2, "Skl": 18, "Spd": 24, "Lck": 20, "Def": 16, "Res": 13},
		"growths": {"HP": 50, "Str": 45, "Mag": 0, "Skl": 50, "Spd": 45, "Lck": 40, "Def": 35, "Res": 25},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": 2, "Spd": 1, "Lck": 1, "Def": -2, "Res": -2},
		"baseClass1": "samurai",
		"baseClass2": "pegasus_warrior"
	},

	"elise": {
		"name": "Elise",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "rod_knight",
		"startingLevel": 5,
		"bases": {"HP": 19, "Str": 2, "Mag": 11, "Skl": 5, "Spd": 10, "Lck": 14, "Def": 4, "Res": 11},
		"growths": {"HP": 30, "Str": 5, "Mag": 65, "Skl": 25, "Spd": 55, "Lck": 70, "Def": 15, "Res": 40},
		"mods": {"HP": 0, "Str": -1, "Mag": 3, "Skl": -2, "Spd": 1, "Lck": 1, "Def": -3, "Res": 1},
		"baseClass1": "rod_knight",
		"baseClass2": "wyvern_rider"
	},

	"effie": {
		"name": "Effie",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "knight",
		"startingLevel": 6,
		"bases": {"HP": 23, "Str": 13, "Mag": 0, "Skl": 8, "Spd": 5, "Lck": 10, "Def": 12, "Res": 4},
		"growths": {"HP": 35, "Str": 60, "Mag": 0, "Skl": 35, "Spd": 50, "Lck": 50, "Def": 35, "Res": 30},
		"mods": {"HP": 0, "Str": 3, "Mag": 0, "Skl": -1, "Spd": 1, "Lck": 0, "Def": -1, "Res": -1},
		"baseClass1": "knight",
		"baseClass2": "rod_knight"
	},	

	"arthur": {
		"name": "Arthur",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "lutz",
		"startingClass": "fighter",
		"startingLevel": 7,
		"bases": {"HP": 24, "Str": 12, "Mag": 0, "Skl": 9, "Spd": 8, "Lck": 1, "Def": 9, "Res": 4},
		"growths": {"HP": 50, "Str": 45, "Mag": 0, "Skl": 55, "Spd": 35, "Lck": 5, "Def": 45, "Res": 20},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": 3, "Spd": 0, "Lck": -3, "Def": 1, "Res": -1},
		"baseClass1": "fighter",
		"baseClass2": "cavalier"
	},

	"odin": {
		"name": "Odin",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "ophelia",
		"startingClass": "dark_mage",
		"startingLevel": 5,
		"bases": {"HP": 21, "Str": 5, "Mag": 8, "Skl": 10, "Spd": 7, "Lck": 9, "Def": 6, "Res": 7},
		"growths": {"HP": 55, "Str": 35, "Mag": 30, "Skl": 55, "Spd": 35, "Lck": 60, "Def": 40, "Res": 20},
		"mods": {"HP": 0, "Str": 0, "Mag": 1, "Skl": 1, "Spd": -1, "Lck": 1, "Def": 0, "Res": -1},
		"baseClass1": "dark_mage",
		"baseClass2": "samurai"
	},

	"zero": {
		"name": "Niles",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "eponine",
		"startingClass": "outlaw",
		"startingLevel": 8,
		"bases": {"HP": 22, "Str": 9, "Mag": 5, "Skl": 9, "Spd": 15, "Lck": 6, "Def": 7, "Res": 12},
		"growths": {"HP": 40, "Str": 35, "Mag": 20, "Skl": 40, "Spd": 50, "Lck": 30, "Def": 30, "Res": 40},
		"mods": {"HP": 0, "Str": -2, "Mag": 0, "Skl": -1, "Spd": 3, "Lck": 0, "Def": 0, "Res": 1},
		"baseClass1": "outlaw",
		"baseClass2": "dark_mage"
	},

	"nyx": {
		"name": "Nyx",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "dark_mage",
		"startingLevel": 9,
		"bases": {"HP": 20, "Str": 1, "Mag": 12, "Skl": 5, "Spd": 11, "Lck": 3, "Def": 4, "Res": 8},
		"growths": {"HP": 30, "Str": 5, "Mag": 50, "Skl": 35, "Spd": 50, "Lck": 20, "Def": 15, "Res": 30},
		"mods": {"HP": 0, "Str": 0, "Mag": 3, "Skl": -2, "Spd": 2, "Lck": -1, "Def": -2, "Res": 1},
		"baseClass1": "dark_mage",
		"baseClass2": "outlaw"
	},

	"camilla": {
		"name": "Camilla",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "revenant_knight",
		"startingLevel": 1,
		"bases": {"HP": 30, "Str": 19, "Mag": 11, "Skl": 15, "Spd": 19, "Lck": 12, "Def": 18, "Res": 15},
		"growths": {"HP": 40, "Str": 50, "Mag": 25, "Skl": 50, "Spd": 55, "Lck": 25, "Def": 35, "Res": 45},
		"mods": {"HP": 0, "Str": 1, "Mag": -1, "Skl": 1, "Spd": 1, "Lck": -2, "Def": 1, "Res": 0},
		"baseClass1": "revenant_knight",
		"baseClass2": "dark_mage",
	},

	"luna": {
		"name": "Selena",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "mercenary",
		"startingLevel": 10,
		"bases": {"HP": 24, "Str": 12, "Mag": 3, "Skl": 12, "Spd": 15, "Lck": 9, "Def": 11, "Res": 8},
		"growths": {"HP": 40, "Str": 30, "Mag": 5, "Skl": 25, "Spd": 45, "Lck": 30, "Def": 45, "Res": 30},
		"mods": {"HP": 0, "Str": -1, "Mag": 0, "Skl": -1, "Spd": 2, "Lck": 0, "Def": 1, "Res": 0},
		"baseClass1": "mercenary",
		"baseClass2": "pegasus_warrior"
	},

	"belka": {
		"name": "Beruka",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "wyvern_rider",
		"startingLevel": 9,
		"bases": {"HP": 23, "Str": 13, "Mag": 0, "Skl": 14, "Spd": 9, "Lck": 10, "Def": 14, "Res": 7},
		"growths": {"HP": 45, "Str": 30, "Mag": 10, "Skl": 55, "Spd": 30, "Lck": 45, "Def": 40, "Res": 25},
		"mods": {"HP": 0, "Str": -1, "Mag": 0, "Skl": 2, "Spd": -2, "Lck": 0, "Def": 2, "Res": -1},
		"baseClass1": "wyvern_rider",
		"baseClass2": "fighter"
	},

	"lazward": {
		"name": "Laslow",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "soleil",
		"startingClass": "mercenary",
		"startingLevel": 12,
		"bases": {"HP": 28, "Str": 15, "Mag": 0, "Skl": 16, "Spd": 13, "Lck": 14, "Def": 10, "Res": 7},
		"growths": {"HP": 50, "Str": 45, "Mag": 0, "Skl": 45, "Spd": 30, "Lck": 55, "Def": 35, "Res": 25},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": 2, "Spd": -1, "Lck": 1, "Def": -1, "Res": -1},
		"baseClass1": "mercenary",
		"baseClass2": "ninja"
	},

	"pieri": {
		"name": "Peri",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "cavalier",
		"startingLevel": 10,
		"bases": {"HP": 25, "Str": 13, "Mag": 0, "Skl": 9, "Spd": 13, "Lck": 9, "Def": 10, "Res": 10},
		"growths": {"HP": 30, "Str": 50, "Mag": 5, "Skl": 30, "Spd": 50, "Lck": 35, "Def": 25, "Res": 45},
		"mods": {"HP": 0, "Str": 1, "Mag": 0, "Skl": -1, "Spd": 1, "Lck": 0, "Def": -2, "Res": 2},
		"baseClass1": "cavalier",
		"baseClass2": "dark_mage"
	},

	"charlotte": {
		"name": "Charlotte",
		"gender": "F",
		"gen": 1,
		"support": true,
		"startingClass": "fighter",
		"startingLevel": 10,
		"bases": {"HP": 28, "Str": 15, "Mag": 0, "Skl": 10, "Spd": 13, "Lck": 9, "Def": 8, "Res": 2},
		"growths": {"HP": 65, "Str": 55, "Mag": 0, "Skl": 35, "Spd": 50, "Lck": 45, "Def": 20, "Res": 5},
		"mods": {"HP": 0, "Str": 3, "Mag": 0, "Skl": 0, "Spd": 2, "Lck": 0, "Def": -2, "Res": -2},
		"baseClass1": "fighter",
		"baseClass2": "rod_knight"
	},

	"benoit": {
		"name": "Benny",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "ignis",
		"startingClass": "knight",
		"startingLevel": 15,
		"bases": {"HP": 31, "Str": 15, "Mag": 0, "Skl": 15, "Spd": 6, "Lck": 12, "Def": 19, "Res": 10},
		"growths": {"HP": 50, "Str": 40, "Mag": 0, "Skl": 50, "Spd": 10, "Lck": 35, "Def": 55, "Res": 45},
		"mods": {"HP": 0, "Str": 0, "Mag": 0, "Skl": 0, "Spd": -3, "Lck": 0, "Def": 3, "Res": 1},
		"baseClass1": "knight",
		"baseClass2": "fighter"
	},

	"leo": {
		"name": "Leo",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "foleo",
		"startingClass": "dark_knight",
		"startingLevel": 2,
		"bases": {"HP": 34, "Str": 14, "Mag": 20, "Skl": 14, "Spd": 15, "Lck": 15, "Def": 16, "Res": 20},
		"growths": {"HP": 45, "Str": 25, "Mag": 55, "Skl": 35, "Spd": 45, "Lck": 45, "Def": 30, "Res": 45},
		"mods": {"HP": 0, "Str": -2, "Mag": 2, "Skl": 0, "Spd": -2, "Lck": 0, "Def": 0, "Res": 2},
		"baseClass1": "dark_mage",
		"baseClass2": "rod_knight"
	},

	"flannel": {
		"name": "Keaton",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "velour",
		"startingClass": "garou",
		"startingLevel": 15,
		"bases": {"HP": 35, "Str": 19, "Mag": 0, "Skl": 10, "Spd": 13, "Lck": 9, "Def": 16, "Res": 7},
		"growths": {"HP": 60, "Str": 60, "Mag": 0, "Skl": 20, "Spd": 35, "Lck": 30, "Def": 50, "Res": 25},
		"mods": {"HP": 0, "Str": 3, "Mag": 0, "Skl": -2, "Spd": -1, "Lck": 0, "Def": 2, "Res": -1},
		"baseClass1": "garou",
		"baseClass2": "fighter"
	},

	"xander": {
		"name": "Xander",
		"gender": "M",
		"gen": 1,
		"support": true,
		"child": "siegbert",
		"startingClass": "paladin",
		"startingLevel": 4,
		"bases": {"HP": 38, "Str": 23, "Mag": 4, "Skl": 18, "Spd": 15, "Lck": 20, "Def": 23, "Res": 11},
		"growths": {"HP": 45, "Str": 50, "Mag": 5, "Skl": 40, "Spd": 35, "Lck": 60, "Def": 40, "Res": 15},
		"mods": {"HP": 0, "Str": 2, "Mag": -1, "Skl": -1, "Spd": -1, "Lck": 2, "Def": 1, "Res": -2},
		"baseClass1": "cavalier",
		"baseClass2": "wyvern_rider"
	},

	"yuugiri": {
		"name": "Reina",
		"gender": "F",
		"gen": 1,
		"support": false,
		"startingClass": "golden_kite_warrior",
		"startingLevel": 1,
		"bases": {"HP": 28, "Str": 17, "Mag": 5, "Skl": 14, "Spd": 20, "Lck": 14, "Def": 10, "Res": 13},
		"growths": {"HP": 40, "Str": 45, "Mag": 5, "Skl": 20, "Spd": 45, "Lck": 10, "Def": 20, "Res": 10},
		"mods": {"HP": 0, "Str": 2, "Mag": 0, "Skl": 0, "Spd": 2, "Lck": -1, "Def": -2, "Res": -1},
		"baseClass1": "pegasus_warrior",
		"baseClass2": "spellcaster",
		"baseClass3": "ninja"
	},

	"crimson": {
		"name": "Scarlet",
		"gender": "F",
		"gen": 1,
		"support": false,
		"startingClass": "wyvern_lord",
		"startingLevel": 1,
		"bases": {"HP": 30, "Str": 23, "Mag": 4, "Skl": 17, "Spd": 19, "Lck": 14, "Def": 22, "Res": 6},
		"growths": {"HP": 30, "Str": 45, "Mag": 20, "Skl": 40, "Spd": 50, "Lck": 40, "Def": 25, "Res": 20},
		"mods": {"HP": 0, "Str": 2, "Mag": 0, "Skl": 0, "Spd": 1, "Lck": -1, "Def": 0, "Res": -2},
		"baseClass1": "wyvern_rider",
		"baseClass2": "outlaw",
		"baseClass3": "knight"
	},

	"flora": {
		"name": "Flora",
		"gender": "F",
		"gen": 1,
		"support": false,
		"startingClass": "maid",
		"startingLevel": 5,
		"bases": {"HP": 29, "Str": 18, "Mag": 16, "Skl": 25, "Spd": 15, "Lck": 11, "Def": 14, "Res": 23},
		"growths": {"HP": 35, "Str": 40, "Mag": 20, "Skl": 45, "Spd": 30, "Lck": 35, "Def": 30, "Res": 30},
		"mods": {"HP": 0, "Str": 1, "Mag": -1, "Skl": 2, "Spd": 0, "Lck": -1, "Def": 1, "Res": -1},
		"baseClass1": "rod_knight",
		"baseClass2": "dark_mage",
		"baseClass3": "mercenary"
	},

	"asyura": {
		"name": "Shura",
		"gender": "M",
		"gen": 1,
		"support": false,
		"startingClass": "adventurer",
		"startingLevel": 2,
		"bases": {"HP": 31, "Str": 18, "Mag": 10, "Skl": 21, "Spd": 24, "Lck": 13, "Def": 13, "Res": 21},
		"growths": {"HP": 30, "Str": 25, "Mag": 10, "Skl": 20, "Spd": 35, "Lck": 30, "Def": 15, "Res": 35},
		"mods": {"HP": 0, "Str": -1, "Mag": 0, "Skl": -1, "Spd": 3, "Lck": -1, "Def": -2, "Res": 2},
		"baseClass1": "outlaw",
		"baseClass2": "ninja",
		"baseClass3": "fighter"
	},

	"izana": {
		"name": "Izana",
		"gender": "M",
		"gen": 1,
		"support": false,
		"startingClass": "exorcist",
		"startingLevel": 5,
		"bases": {"HP": 31, "Str": 8, "Mag": 23, "Skl": 25, "Spd": 18, "Lck": 17, "Def": 14, "Res": 24},
		"growths": {"HP": 45, "Str": 15, "Mag": 35, "Skl": 55, "Spd": 30, "Lck": 45, "Def": 35, "Res": 35},
		"mods": {"HP": 0, "Str": 0, "Mag": 1, "Skl": 1, "Spd": -2, "Lck": 0, "Def": 0, "Res": 1},
		"baseClass1": "priest",
		"baseClass2": "samurai",
		"baseClass3": "herb_merchant"
	},

	"yukimura": {
		"name": "Yukimura",
		"gender": "M",
		"gen": 1,
		"support": false,
		"startingClass": "puppeteer",
		"startingLevel": 10,
		"bases": {"HP": 38, "Str": 25, "Mag": 3, "Skl": 29, "Spd": 23, "Lck": 18, "Def": 21, "Res": 22},
		"growths": {"HP": 25, "Str": 25, "Mag": 5, "Skl": 40, "Spd": 15, "Lck": 30, "Def": 25, "Res": 30},
		"mods": {"HP": 0, "Str": -1, "Mag": 0, "Skl": 3, "Spd": -1, "Lck": 0, "Def": -1, "Res": 0},
		"baseClass1": "herb_merchant",
		"baseClass2": "samurai",
		"baseClass3": "priest"
	},

	"fuuga": {
		"name": "Fuga",
		"gender": "M",
		"gen": 1,
		"support": false,
		"startingClass": "weapon_master",
		"startingLevel": 10,
		"bases": {"HP": 41, "Str": 29, "Mag": 0, "Skl": 27, "Spd": 25, "Lck": 18, "Def": 29, "Res": 15},
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 15, "Spd": 5, "Lck": 20, "Def": 10, "Res": 10},
		"mods": {"HP": 0, "Str": 2, "Mag": -1, "Skl": 1, "Spd": 0, "Lck": -1, "Def": 2, "Res": -2},
		"baseClass1": "samurai",
		"baseClass2": "oni",
		"baseClass3": "priest"
	},

	"anna": {
		"name": "Anna",
		"gender": "F",
		"gen": 1,
		"support": false,
		"startingClass": "outlaw",
		"startingLevel": 10,
		"bases": {"HP": 23, "Str": 9, "Mag": 11, "Skl": 10, "Spd": 14, "Lck": 15, "Def": 6, "Res": 15},
		"growths": {"HP": 35, "Str": 30, "Mag": 55, "Skl": 30, "Spd": 40, "Lck": 70, "Def": 20, "Res": 45},
		"mods": {"HP": 0, "Str": -1, "Mag": 1, "Skl": 0, "Spd": -1, "Lck": 2, "Def": -2, "Res": 2},
		"baseClass1": "outlaw",
		"baseClass2": "rod_knight",
		"baseClass3": "herb_merchant"
	},

	"m_kanna": {
		"name": "Kanna (M)",
		"gender": "M",
		"gen": 2,
		"parent1": "kamui",
		"startingClass": "dark_prince"
	},

	"f_kanna": {
		"name": "Kanna (F)",
		"gender": "F",
		"gen": 2,
		"parent1": "kamui",
		"startingClass": "dark_prince"
	},

	"shigure": {
		"name": "Shigure",
		"gender": "M",
		"gen": 2,
		"parent1": "azura",
		"startingClass": "pegasus_warrior"
	},

	"deere": {
		"name": "Dwyer",
		"gender": "M",
		"gen": 2,
		"parent1": "jakob",
		"startingClass": "rod_knight"
	},

	"sophie": {
		"name": "Sophie",
		"gender": "F",
		"gen": 2,
		"parent1": "silas",
		"startingClass": "cavalier"
	},

	"midoriko": {
		"name": "Midori",
		"gender": "F",
		"gen": 2,
		"parent1": "kaze",
		"startingClass": "herb_merchant"
	},

	"shinonome": {
		"name": "Shiro",
		"gender": "M",
		"gen": 2,
		"parent1": "ryoma",
		"startingClass": "lance_fighter"
	},

	"kisaragi": {
		"name": "Kiragi",
		"gender": "M",
		"gen": 2,
		"parent1": "takumi",
		"startingClass": "bowman"
	},

	"grey": {
		"name": "Asugi",
		"gender": "M",
		"gen": 2,
		"parent1": "saizou",
		"startingClass": "ninja"
	},

	"kinu": {
		"name": "Selkie",
		"gender": "F",
		"gen": 2,
		"parent1": "nishiki",
		"startingClass": "fox_spirit"
	},

	"hisame": {
		"name": "Hisame",
		"gender": "M",
		"gen": 2,
		"parent1": "hinata",
		"startingClass": "samurai"
	},

	"mitama": {
		"name": "Mitama",
		"gender": "F",
		"gen": 2,
		"parent1": "asama",
		"startingClass": "priestess"
	},

	"matoi": {
		"name": "Caeldori",
		"gender": "F",
		"gen": 2,
		"parent1": "tsubaki",
		"startingClass": "pegasus_warrior"
	},

	"shara": {
		"name": "Rhajat",
		"gender": "F",
		"gen": 2,
		"parent1": "tsukuyomi",
		"startingClass": "spellcaster"
	},

	"siegbert": {
		"name": "Siegbert",
		"gender": "M",
		"gen": 2,
		"parent1": "xander",
		"startingClass": "cavalier"
	},

	"foleo": {
		"name": "Forrest",
		"gender": "M",
		"gen": 2,
		"parent1": "leo",
		"startingClass": "rod_knight"
	},

	"ignis": {
		"name": "Ignatius",
		"gender": "M",
		"gen": 2,
		"parent1": "benoit",
		"startingClass": "knight"
	},

	"velour": {
		"name": "Velouria",
		"gender": "F",
		"gen": 2,
		"parent1": "flannel",
		"startingClass": "garou"
	},

	"lutz": {
		"name": "Percy",
		"gender": "M",
		"gen": 2,
		"parent1": "arthur",
		"startingClass": "wyvern_rider"
	},

	"ophelia": {
		"name": "Ophelia",
		"gender": "F",
		"gen": 2,
		"parent1": "odin",
		"startingClass": "dark_mage"
	},

	"soleil": {
		"name": "Soleil",
		"gender": "F",
		"gen": 2,
		"parent1": "lazward",
		"startingClass": "mercenary"
	},

	"eponine": {
		"name": "Nina",
		"gender": "F",
		"gen": 2,
		"parent1": "zero",
		"startingClass": "outlaw"
	},

};
characters.kamui.mods = calculateAvatarMods(assetStat, flawStat);

var classes = {
	"dark_prince": {
		"name": "Nohr Prince(ss)",
		"promotesTo": ["dark_blood", "white_blood"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 7, "Mag": 3, "Skl": 4, "Spd": 5, "Lck": 2, "Def": 5, "Res": 2},
		"growths": {"HP": 15, "Str": 15, "Mag": 10, "Skl": 10, "Spd": 10, "Lck": 10, "Def": 10, "Res": 5},
		"maxStats": {"HP": 40, "Str": 23, "Mag": 17, "Skl": 19, "Spd": 21, "Lck": 22, "Def": 21, "Res": 19}
	},

	"white_blood": {
		"name": "Hoshido Noble",
		"promotesTo": null,
		"promotesFrom": ["dark_prince"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 10, "Mag": 4, "Skl": 5, "Spd": 6, "Lck": 4, "Def": 7, "Res": 3},
		"growths": {"HP": 15, "Str": 15, "Mag": 10, "Skl": 10, "Spd": 10, "Lck": 10, "Def": 15, "Res": 0},
		"maxStats": {"HP": 60, "Str": 34, "Mag": 28, "Skl": 29, "Spd": 30, "Lck": 33, "Def": 31, "Res": 28}
	},

	"dark_blood": {
		"name": "Nohr Noble",
		"promotesTo": null,
		"promotesFrom": ["dark_prince"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 8, "Mag": 6, "Skl": 4, "Spd": 7, "Lck": 2, "Def": 6, "Res": 6},
		"growths": {"HP": 15, "Str": 10, "Mag": 15, "Skl": 5, "Spd": 15, "Lck": 5, "Def": 5, "Res": 15},
		"maxStats": {"HP": 60, "Str": 32, "Mag": 31, "Skl": 28, "Spd": 32, "Lck": 27, "Def": 29, "Res": 32}
	},	

	"samurai": {
		"name": "Samurai",
		"promotesTo": ["trueblade", "weapon_master"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 4, "Mag": 0, "Skl": 5, "Spd": 8, "Lck": 3, "Def": 3, "Res": 3},
		"growths": {"HP": 10, "Str": 10, "Mag": 0, "Skl": 15, "Spd": 20, "Lck": 15, "Def": 0, "Res": 10},
		"maxStats": {"HP": 40, "Str": 20, "Mag": 16, "Skl": 23, "Spd": 25, "Lck": 24, "Def": 18, "Res": 20}
	},

	"trueblade": {
		"name": "Swordmaster",
		"promotesTo": null,
		"promotesFrom": ["samurai"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 6, "Mag": 2, "Skl": 7, "Spd": 11, "Lck": 4, "Def": 5, "Res": 5},
		"growths": {"HP": 10, "Str": 10, "Mag": 5, "Skl": 15, "Spd": 20, "Lck": 15, "Def": 0, "Res": 10},
		"maxStats": {"HP": 55, "Str": 30, "Mag": 28, "Skl": 32, "Spd": 35, "Lck": 33, "Def": 27, "Res": 31},
		"bonus": {"Crit": 10, "Avo": 10}
	},

	"weapon_master": {
		"name": "Master of Arms",
		"promotesTo": null,
		"promotesFrom": ["samurai", "villager"],
		"classTier": "tier2",
		"bases": {"HP": 20, "Str": 8, "Mag": 0, "Skl": 6, "Spd": 9, "Lck": 3, "Def": 7, "Res": 3},
		"growths": {"HP": 20, "Str": 15, "Mag": 0, "Skl": 10, "Spd": 10, "Lck": 10, "Def": 10, "Res": 0},
		"maxStats": {"HP": 65, "Str": 33, "Mag": 25, "Skl": 30, "Spd": 30, "Lck": 31, "Def": 31, "Res": 28}
	},	

	"villager": {
		"name": "Villager",
		"promotesTo": ["weapon_master", "great_merchant"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 5, "Mag": 0, "Skl": 4, "Spd": 5, "Lck": 3, "Def": 4, "Res": 0},
		"growths": {"HP": 10, "Str": 10, "Mag": 0, "Skl": 10, "Spd": 10, "Lck": 20, "Def": 10, "Res": 0},
		"maxStats": {"HP": 35, "Str": 19, "Mag": 15, "Skl": 19, "Spd": 19, "Lck": 22, "Def": 18, "Res": 15}
	},

	"great_merchant": {
		"name": "Merchant",
		"promotesTo": null,
		"promotesFrom": ["herb_merchant", "villager"],
		"classTier": "tier2",
		"bases": {"HP": 20, "Str": 8, "Mag": 0, "Skl": 6, "Spd": 5, "Lck": 4, "Def": 8, "Res": 5},
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 10, "Spd": 5, "Lck": 15, "Def": 10, "Res": 5},
		"maxStats": {"HP": 65, "Str": 33, "Mag": 25, "Skl": 29, "Spd": 28, "Lck": 32, "Def": 33, "Res": 30}
	},	

	"herb_merchant": {
		"name": "Apothecary",
		"promotesTo": ["great_merchant", "puppeteer"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 18, "Str": 6, "Mag": 0, "Skl": 4, "Spd": 4, "Lck": 2, "Def": 6, "Res": 2},
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 10, "Spd": 10, "Lck": 5, "Def": 10, "Res": 5},
		"maxStats": {"HP": 45, "Str": 24, "Mag": 15, "Skl": 19, "Spd": 19, "Lck": 21, "Def": 23, "Res": 20}
	},

	"oni": {
		"name": "Oni Savage",
		"promotesTo": ["shura", "blacksmith"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 18, "Str": 6, "Mag": 1, "Skl": 2, "Spd": 5, "Lck": 0, "Def": 7, "Res": 1},
		"growths": {"HP": 20, "Str": 20, "Mag": 10, "Skl": 0, "Spd": 10, "Lck": 0, "Def": 20, "Res": 0},
		"maxStats": {"HP": 45, "Str": 24, "Mag": 19, "Skl": 16, "Spd": 20, "Lck": 17, "Def": 23, "Res": 18}
	},

	"shura": {
		"name": "Oni Chieftain",
		"promotesTo": null,
		"promotesFrom": ["oni"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 9, "Mag": 5, "Skl": 2, "Spd": 7, "Lck": 0, "Def": 10, "Res": 5},
		"growths": {"HP": 10, "Str": 20, "Mag": 15, "Skl": 0, "Spd": 10, "Lck": 0, "Def": 20, "Res": 5},
		"maxStats": {"HP": 60, "Str": 34, "Mag": 28, "Skl": 25, "Spd": 30, "Lck": 25, "Def": 36, "Res": 31}
	},	

	"blacksmith": {
		"name": "Blacksmith",
		"promotesTo": null,
		"promotesFrom": ["oni"],
		"classTier": "tier2",
		"bases": {"HP": 21, "Str": 8, "Mag": 0, "Skl": 9, "Spd": 8, "Lck": 3, "Def": 8, "Res": 2},
		"growths": {"HP": 20, "Str": 15, "Mag": 0, "Skl": 15, "Spd": 10, "Lck": 5, "Def": 15, "Res": 0},
		"maxStats": {"HP": 65, "Str": 33, "Mag": 25, "Skl": 32, "Spd": 31, "Lck": 30, "Def": 32, "Res": 27}
	},	

	"lance_fighter": {
		"name": "Spear Fighter",
		"promotesTo": ["holy_lancer", "basara"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 6, "Mag": 0, "Skl": 6, "Spd": 6, "Lck": 2, "Def": 5, "Res": 2},
		"growths": {"HP": 15, "Str": 15, "Mag": 0, "Skl": 15, "Spd": 15, "Lck": 5, "Def": 10, "Res": 5},
		"maxStats": {"HP": 40, "Str": 22, "Mag": 15, "Skl": 23, "Spd": 22, "Lck": 21, "Def": 22, "Res": 21}
	},

	"holy_lancer": {
		"name": "Spear Master",
		"promotesTo": null,
		"promotesFrom": ["lance_fighter"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 9, "Mag": 0, "Skl": 8, "Spd": 8, "Lck": 3, "Def": 7, "Res": 3},		
		"growths": {"HP": 15, "Str": 15, "Mag": 0, "Skl": 15, "Spd": 15, "Lck": 5, "Def": 10, "Res": 5},
		"maxStats": {"HP": 60, "Str": 34, "Mag": 25, "Skl": 33, "Spd": 32, "Lck": 29, "Def": 30, "Res": 29},
		"bonus": {"Crit": 10, "Ddg": 10}
	},	

	"basara": {
		"name": "Basara",
		"promotesTo": null,
		"promotesFrom": ["lance_fighter", "spellcaster"],
		"classTier": "tier2",
		"bases": {"HP": 20, "Str": 7, "Mag": 5, "Skl": 7, "Spd": 7, "Lck": 5, "Def": 7, "Res": 6},		
		"growths": {"HP": 20, "Str": 10, "Mag": 10, "Skl": 10, "Spd": 10, "Lck": 15, "Def": 5, "Res": 10},
		"maxStats": {"HP": 65, "Str": 31, "Mag": 30, "Skl": 30, "Spd": 31, "Lck": 35, "Def": 30, "Res": 32}
	},	

	"spellcaster": {
		"name": "Diviner",
		"promotesTo": ["exorcist", "basara"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 15, "Str": 0, "Mag": 4, "Skl": 5, "Spd": 6, "Lck": 1, "Def": 1, "Res": 3},
		"growths": {"HP": 0, "Str": 5, "Mag": 15, "Skl": 10, "Spd": 10, "Lck": 5, "Def": 0, "Res": 10},
		"maxStats": {"HP": 35, "Str": 17, "Mag": 22, "Skl": 20, "Spd": 23, "Lck": 19, "Def": 16, "Res": 20}
	},	

	"exorcist": {
		"name": "Onmyoji",
		"promotesTo": null,
		"promotesFrom": ["spellcaster", "priest", "priestess"],
		"classTier": "tier2",
		"bases": {"HP": 16, "Str": 0, "Mag": 7, "Skl": 6, "Spd": 7, "Lck": 2, "Def": 3, "Res": 6},		
		"growths": {"HP": 0, "Str": 0, "Mag": 20, "Skl": 10, "Spd": 15, "Lck": 0, "Def": 0, "Res": 15},
		"maxStats": {"HP": 45, "Str": 25, "Mag": 33, "Skl": 31, "Spd": 32, "Lck": 27, "Def": 25, "Res": 31}
	},

	"priest": {
		"name": "Monk",
		"promotesTo": ["mountain_priest", "exorcist"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 16, "Str": 0, "Mag": 3, "Skl": 5, "Spd": 5, "Lck": 4, "Def": 2, "Res": 5},
		"growths": {"HP": 0, "Str": 5, "Mag": 10, "Skl": 10, "Spd": 15, "Lck": 15, "Def": 0, "Res": 20},
		"maxStats": {"HP": 35, "Str": 18, "Mag": 21, "Skl": 20, "Spd": 22, "Lck": 23, "Def": 17, "Res": 24},
		"bonus": {"Ddg": 10},
		"gender": 'M'
	},

	"priestess": {
		"name": "Shrine Maiden",
		"promotesTo": ["war_priestess", "exorcist"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 16, "Str": 0, "Mag": 3, "Skl": 5, "Spd": 5, "Lck": 4, "Def": 2, "Res": 5},
		"growths": {"HP": 0, "Str": 5, "Mag": 10, "Skl": 10, "Spd": 15, "Lck": 15, "Def": 0, "Res": 20},
		"maxStats": {"HP": 35, "Str": 18, "Mag": 21, "Skl": 20, "Spd": 22, "Lck": 23, "Def": 17, "Res": 24},
		"bonus": {"Ddg": 10},
		"gender": 'F'
	},

	"mountain_priest": {
		"name": "Great Master",
		"promotesTo": null,
		"promotesFrom": ["priest"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 8, "Mag": 6, "Skl": 6, "Spd": 8, "Lck": 5, "Def": 6, "Res": 7},		
		"growths": {"HP": 10, "Str": 15, "Mag": 5, "Skl": 5, "Spd": 15, "Lck": 15, "Def": 10, "Res": 10},
		"maxStats": {"HP": 55, "Str": 32, "Mag": 30, "Skl": 31, "Spd": 33, "Lck": 32, "Def": 28, "Res": 32},
		"gender": 'M'
	},

	"war_priestess": {
		"name": "Priestess",
		"promotesTo": null,
		"promotesFrom": ["priestess"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 6, "Mag": 7, "Skl": 6, "Spd": 9, "Lck": 5, "Def": 5, "Res": 8},		
		"growths": {"HP": 10, "Str": 10, "Mag": 10, "Skl": 5, "Spd": 15, "Lck": 15, "Def": 0, "Res": 20},
		"maxStats": {"HP": 50, "Str": 29, "Mag": 32, "Skl": 30, "Spd": 33, "Lck": 34, "Def": 26, "Res": 34},
		"gender": 'F'
	},

	"pegasus_warrior": {
		"name": "Sky Knight",
		"promotesTo": ["falcon_warrior", "golden_kite_warrior"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 16, "Str": 3, "Mag": 0, "Skl": 5, "Spd": 7, "Lck": 4, "Def": 2, "Res": 6},
		"growths": {"HP": 0, "Str": 10, "Mag": 0, "Skl": 10, "Spd": 15, "Lck": 20, "Def": 0, "Res": 20},
		"maxStats": {"HP": 35, "Str": 19, "Mag": 16, "Skl": 21, "Spd": 23, "Lck": 25, "Def": 18, "Res": 25}
	},

	"falcon_warrior": {
		"name": "Falcon Knight",
		"promotesTo": null,
		"promotesFrom": ["pegasus_warrior"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 5, "Mag": 4, "Skl": 6, "Spd": 10, "Lck": 5, "Def": 5, "Res": 9},		
		"growths": {"HP": 0, "Str": 10, "Mag": 10, "Skl": 10, "Spd": 15, "Lck": 20, "Def": 0, "Res": 20},
		"maxStats": {"HP": 55, "Str": 28, "Mag": 27, "Skl": 30, "Spd": 34, "Lck": 35, "Def": 27, "Res": 35}
	},

	"golden_kite_warrior": {
		"name": "Kinshi Knight",
		"promotesTo": null,
		"promotesFrom": ["pegasus_warrior", "bowman"],
		"classTier": "tier2",
		"bases": {"HP": 17, "Str": 4, "Mag": 1, "Skl": 9, "Spd": 8, "Lck": 5, "Def": 4, "Res": 7},		
		"growths": {"HP": 0, "Str": 5, "Mag": 0, "Skl": 15, "Spd": 15, "Lck": 15, "Def": 0, "Res": 15},
		"maxStats": {"HP": 50, "Str": 27, "Mag": 26, "Skl": 33, "Spd": 31, "Lck": 34, "Def": 25, "Res": 31}
	},
	
	"bowman": {
		"name": "Archer",
		"promotesTo": ["holy_bowman", "golden_kite_warrior"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 5, "Mag": 0, "Skl": 7, "Spd": 5, "Lck": 2, "Def": 4, "Res": 1},
		"growths": {"HP": 10, "Str": 15, "Mag": 0, "Skl": 15, "Spd": 15, "Lck": 5, "Def": 10, "Res": 0},
		"maxStats": {"HP": 40, "Str": 21, "Mag": 15, "Skl": 23, "Spd": 21, "Lck": 20, "Def": 20, "Res": 17}
	},

	"holy_bowman": {
		"name": "Sniper",
		"promotesTo": null,
		"promotesFrom": ["bowman"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 7, "Mag": 0, "Skl": 10, "Spd": 9, "Lck": 3, "Def": 6, "Res": 2},		
		"growths": {"HP": 10, "Str": 15, "Mag": 0, "Skl": 20, "Spd": 15, "Lck": 5, "Def": 10, "Res": 0},
		"maxStats": {"HP": 55, "Str": 31, "Mag": 25, "Skl": 35, "Spd": 33, "Lck": 30, "Def": 31, "Res": 28},
		"bonus": {"Hit": 10, "Crit": 10}
	},

	"ninja": {
		"name": "Ninja",
		"promotesTo": ["jounin", "puppeteer"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 16, "Str": 3, "Mag": 0, "Skl": 8, "Spd": 8, "Lck": 1, "Def": 3, "Res": 3},
		"growths": {"HP": 5, "Str": 5, "Mag": 0, "Skl": 20, "Spd": 20, "Lck": 0, "Def": 5, "Res": 15},
		"maxStats": {"HP": 35, "Str": 17, "Mag": 15, "Skl": 25, "Spd": 25, "Lck": 18, "Def": 19, "Res": 20}
	},

	"jounin": {
		"name": "Master Ninja",
		"promotesTo": null,
		"promotesFrom": ["ninja"],
		"classTier": "tier2",
		"bases": {"HP": 17, "Str": 5, "Mag": 0, "Skl": 10, "Spd": 11, "Lck": 2, "Def": 4, "Res": 8},
		"growths": {"HP": 5, "Str": 5, "Mag": 0, "Skl": 20, "Spd": 20, "Lck": 0, "Def": 5, "Res": 20},
		"maxStats": {"HP": 55, "Str": 27, "Mag": 25, "Skl": 35, "Spd": 35, "Lck": 28, "Def": 26, "Res": 34},
		"bonus": {"Hit": 5, "Crit": 5, "Avo": 5, "Ddg": 5}
	},	

	"puppeteer": {
		"name": "Mechanist",
		"promotesTo": null,
		"promotesFrom": ["ninja", "herb_merchant"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 7, "Mag": 0, "Skl": 9, "Spd": 7, "Lck": 2, "Def": 6, "Res": 6},
		"growths": {"HP": 10, "Str": 10, "Mag": 0, "Skl": 15, "Spd": 10, "Lck": 5, "Def": 5, "Res": 15},
		"maxStats": {"HP": 60, "Str": 30, "Mag": 25, "Skl": 33, "Spd": 30, "Lck": 30, "Def": 31, "Res": 31}
	},	

	"fox_spirit": {
		"name": "Kitsune",
		"promotesTo": ["nine_tailed_fox"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 16, "Str": 5, "Mag": 1, "Skl": 6, "Spd": 8, "Lck": 4, "Def": 1, "Res": 4},	
		"growths": {"HP": 10, "Str": 10, "Mag": 0, "Skl": 15, "Spd": 20, "Lck": 10, "Def": 0, "Res": 20},
		"maxStats": {"HP": 40, "Str": 20, "Mag": 18, "Skl": 23, "Spd": 24, "Lck": 24, "Def": 18, "Res": 23}
	},

	"nine_tailed_fox": {
		"name": "Nine-Tails",
		"promotesTo": null,
		"promotesFrom": ["fox_spirit"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 6, "Mag": 2, "Skl": 9, "Spd": 10, "Lck": 5, "Def": 2, "Res": 8},		
		"growths": {"HP": 10, "Str": 10, "Mag": 0, "Skl": 15, "Spd": 20, "Lck": 10, "Def": 0, "Res": 20},
		"maxStats": {"HP": 55, "Str": 29, "Mag": 29, "Skl": 33, "Spd": 34, "Lck": 33, "Def": 27, "Res": 34},
		"bonus": {"Crit": 5, "Avo": 10, "Ddg": 10}
	},

	"cavalier": {
		"name": "Cavalier",
		"promotesTo": ["paladin", "great_knight"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 6, "Mag": 0, "Skl": 5, "Spd": 5, "Lck": 3, "Def": 5, "Res": 3},		
		"growths": {"HP": 10, "Str": 15, "Mag": 0, "Skl": 10, "Spd": 10, "Lck": 15, "Def": 10, "Res": 5},
		"maxStats": {"HP": 40, "Str": 22, "Mag": 15, "Skl": 21, "Spd": 20, "Lck": 24, "Def": 22, "Res": 21}
	},

	"paladin": {
		"name": "Paladin",
		"promotesTo": null,
		"promotesFrom": ["cavalier"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 8, "Mag": 1, "Skl": 7, "Spd": 7, "Lck": 4, "Def": 7, "Res": 6},		
		"growths": {"HP": 10, "Str": 15, "Mag": 0, "Skl": 10, "Spd": 10, "Lck": 15, "Def": 10, "Res": 10},
		"maxStats": {"HP": 60, "Str": 31, "Mag": 26, "Skl": 30, "Spd": 30, "Lck": 32, "Def": 32, "Res": 32}
	},

	"great_knight": {
		"name": "Great Knight",
		"promotesTo": null,
		"promotesFrom": ["cavalier", "knight"],
		"classTier": "tier2",
		"bases": {"HP": 21, "Str": 10, "Mag": 0, "Skl": 6, "Spd": 6, "Lck": 3, "Def": 10, "Res": 2},		
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 10, "Spd": 5, "Lck": 5, "Def": 20, "Res": 0},
		"maxStats": {"HP": 65, "Str": 35, "Mag": 25, "Skl": 29, "Spd": 27, "Lck": 28, "Def": 37, "Res": 28}
	},

	"knight": {
		"name": "Knight",
		"promotesTo": ["general", "great_knight"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 19, "Str": 8, "Mag": 0, "Skl": 5, "Spd": 3, "Lck": 3, "Def": 8, "Res": 1},		
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 15, "Spd": 5, "Lck": 10, "Def": 20, "Res": 0},
		"maxStats": {"HP": 45, "Str": 24, "Mag": 15, "Skl": 22, "Spd": 17, "Lck": 22, "Def": 26, "Res": 18}
	},

	"general": {
		"name": "General",
		"promotesTo": null,
		"promotesFrom": ["knight"],
		"classTier": "tier2",
		"bases": {"HP": 22, "Str": 11, "Mag": 0, "Skl": 7, "Spd": 3, "Lck": 4, "Def": 12, "Res": 3},		
		"growths": {"HP": 25, "Str": 20, "Mag": 0, "Skl": 15, "Spd": 0, "Lck": 10, "Def": 20, "Res": 5},
		"maxStats": {"HP": 70, "Str": 38, "Mag": 25, "Skl": 32, "Spd": 25, "Lck": 32, "Def": 40, "Res": 30}
	},

	"fighter": {
		"name": "Fighter",
		"promotesTo": ["berserker", "brave_hero"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 19, "Str": 7, "Mag": 0, "Skl": 6, "Spd": 6, "Lck": 2, "Def": 4, "Res": 1},		
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 15, "Spd": 15, "Lck": 5, "Def": 5, "Res": 0},
		"maxStats": {"HP": 45, "Str": 25, "Mag": 15, "Skl": 23, "Spd": 22, "Lck": 21, "Def": 19, "Res": 18}
	},

	"berserker": {
		"name": "Berserker",
		"promotesTo": null,
		"promotesFrom": ["fighter"],
		"classTier": "tier2",
		"bases": {"HP": 24, "Str": 12, "Mag": 0, "Skl": 8, "Spd": 9, "Lck": 0, "Def": 5, "Res": 0},		
		"growths": {"HP": 30, "Str": 25, "Mag": 0, "Skl": 15, "Spd": 15, "Lck": 0, "Def": 0, "Res": 0},
		"maxStats": {"HP": 70, "Str": 40, "Mag": 25, "Skl": 32, "Spd": 33, "Lck": 25, "Def": 27, "Res": 25},
		"bonus": {"Crit": 20, "Ddg": -5}
	},

	"mercenary": {
		"name": "Mercenary",
		"promotesTo": ["brave_hero", "bow_knight"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 5, "Mag": 0, "Skl": 7, "Spd": 6, "Lck": 2, "Def": 5, "Res": 2},		
		"growths": {"HP": 10, "Str": 15, "Mag": 0, "Skl": 20, "Spd": 15, "Lck": 5, "Def": 10, "Res": 5},
		"maxStats": {"HP": 40, "Str": 22, "Mag": 15, "Skl": 24, "Spd": 22, "Lck": 20, "Def": 21, "Res": 19}
	},

	"brave_hero": {
		"name": "Hero",
		"promotesTo": null,
		"promotesFrom": ["mercenary", "fighter"],
		"classTier": "tier2",
		"bases": {"HP": 20, "Str": 8, "Mag": 0, "Skl": 10, "Spd": 8, "Lck": 3, "Def": 7, "Res": 2},		
		"growths": {"HP": 20, "Str": 15, "Mag": 0, "Skl": 20, "Spd": 15, "Lck": 5, "Def": 10, "Res": 0},
		"maxStats": {"HP": 60, "Str": 32, "Mag": 25, "Skl": 35, "Spd": 32, "Lck": 31, "Def": 30, "Res": 27}
	},

	"bow_knight": {
		"name": "Bow Knight",
		"promotesTo": null,
		"promotesFrom": ["outlaw", "mercenary"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 6, "Mag": 0, "Skl": 8, "Spd": 9, "Lck": 3, "Def": 5, "Res": 6},		
		"growths": {"HP": 10, "Str": 10, "Mag": 0, "Skl": 15, "Spd": 15, "Lck": 10, "Def": 0, "Res": 10},
		"maxStats": {"HP": 55, "Str": 29, "Mag": 25, "Skl": 32, "Spd": 33, "Lck": 30, "Def": 27, "Res": 32}
	},

	"outlaw": {
		"name": "Outlaw",
		"promotesTo": ["adventurer", "bow_knight"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 16, "Str": 3, "Mag": 1, "Skl": 4, "Spd": 8, "Lck": 1, "Def": 2, "Res": 4},		
		"growths": {"HP": 0, "Str": 10, "Mag": 5, "Skl": 10, "Spd": 20, "Lck": 0, "Def": 0, "Res": 20},
		"maxStats": {"HP": 35, "Str": 19, "Mag": 18, "Skl": 20, "Spd": 24, "Lck": 18, "Def": 17, "Res": 22}
	},

	"adventurer": {
		"name": "Adventurer",
		"promotesTo": null,
		"promotesFrom": ["outlaw"],
		"classTier": "tier2",
		"bases": {"HP": 17, "Str": 4, "Mag": 6, "Skl": 6, "Spd": 10, "Lck": 2, "Def": 3, "Res": 8},		
		"growths": {"HP": 0, "Str": 5, "Mag": 15, "Skl": 5, "Spd": 20, "Lck": 0, "Def": 0, "Res": 20},
		"maxStats": {"HP": 50, "Str": 27, "Mag": 31, "Skl": 27, "Spd": 34, "Lck": 27, "Def": 25, "Res": 34}
	},

	"wyvern_rider": {
		"name": "Wyvern Rider",
		"promotesTo": ["wyvern_lord", "revenant_knight"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 17, "Str": 6, "Mag": 0, "Skl": 5, "Spd": 4, "Lck": 2, "Def": 7, "Res": 0},		
		"growths": {"HP": 10, "Str": 15, "Mag": 5, "Skl": 10, "Spd": 10, "Lck": 5, "Def": 20, "Res": 0},
		"maxStats": {"HP": 40, "Str": 22, "Mag": 17, "Skl": 21, "Spd": 20, "Lck": 19, "Def": 24, "Res": 15}
	},

	"wyvern_lord": {
		"name": "Wyvern Lord",
		"promotesTo": null,
		"promotesFrom": ["wyvern_rider"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 8, "Mag": 0, "Skl": 9, "Spd": 6, "Lck": 3, "Def": 10, "Res": 1},		
		"growths": {"HP": 10, "Str": 15, "Mag": 0, "Skl": 15, "Spd": 10, "Lck": 5, "Def": 20, "Res": 0},
		"maxStats": {"HP": 60, "Str": 33, "Mag": 25, "Skl": 33, "Spd": 29, "Lck": 28, "Def": 35, "Res": 26}
	},

	"revenant_knight": {
		"name": "Malig Knight",
		"promotesTo": null,
		"promotesFrom": ["wyvern_rider"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 7, "Mag": 6, "Skl": 6, "Spd": 5, "Lck": 0, "Def": 8, "Res": 6},		
		"growths": {"HP": 0, "Str": 15, "Mag": 15, "Skl": 10, "Spd": 5, "Lck": 0, "Def": 10, "Res": 15},
		"maxStats": {"HP": 55, "Str": 31, "Mag": 30, "Skl": 28, "Spd": 27, "Lck": 25, "Def": 31, "Res": 31}
	},

	"dark_mage": {
		"name": "Dark Mage",
		"promotesTo": ["sorcerer", "dark_knight"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 16, "Str": 0, "Mag": 6, "Skl": 3, "Spd": 3, "Lck": 1, "Def": 3, "Res": 5},		
		"growths": {"HP": 0, "Str": 10, "Mag": 20, "Skl": 0, "Spd": 10, "Lck": 0, "Def": 5, "Res": 10},
		"maxStats": {"HP": 35, "Str": 19, "Mag": 24, "Skl": 16, "Spd": 19, "Lck": 18, "Def": 19, "Res": 22}
	},

	"sorcerer": {
		"name": "Sorcerer",
		"promotesTo": null,
		"promotesFrom": ["dark_mage"],
		"classTier": "tier2",
		"bases": {"HP": 17, "Str": 0, "Mag": 9, "Skl": 4, "Spd": 6, "Lck": 1, "Def": 5, "Res": 8},		
		"growths": {"HP": 0, "Str": 0, "Mag": 25, "Skl": 0, "Spd": 10, "Lck": 0, "Def": 5, "Res": 15},
		"maxStats": {"HP": 50, "Str": 25, "Mag": 35, "Skl": 26, "Spd": 29, "Lck": 26, "Def": 29, "Res": 33},
		"bonus": {"Hit": 5, "Crit": 10, "Ddg": 5}
	},

	"dark_knight": {
		"name": "Dark Knight",
		"promotesTo": null,
		"promotesFrom": ["dark_mage"],
		"classTier": "tier2",
		"bases": {"HP": 19, "Str": 8, "Mag": 6, "Skl": 6, "Spd": 5, "Lck": 3, "Def": 8, "Res": 6},		
		"growths": {"HP": 15, "Str": 20, "Mag": 10, "Skl": 5, "Spd": 5, "Lck": 5, "Def": 15, "Res": 5},
		"maxStats": {"HP": 55, "Str": 32, "Mag": 31, "Skl": 28, "Spd": 27, "Lck": 31, "Def": 34, "Res": 30}
	},

	"rod_knight": {
		"name": "Troubadour",
		"promotesTo": ["strategist", "maid"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 15, "Str": 0, "Mag": 3, "Skl": 7, "Spd": 5, "Lck": 4, "Def": 1, "Res": 4},		
		"growths": {"HP": 0, "Str": 0, "Mag": 10, "Skl": 20, "Spd": 10, "Lck": 15, "Def": 0, "Res": 15},
		"maxStats": {"HP": 35, "Str": 16, "Mag": 19, "Skl": 24, "Spd": 20, "Lck": 23, "Def": 16, "Res": 21},
		"bonus": {"Ddg": 10}
	},

	"strategist": {
		"name": "Strategist",
		"promotesTo": null,
		"promotesFrom": ["rod_knight"],
		"classTier": "tier2",
		"bases": {"HP": 16, "Str": 0, "Mag": 7, "Skl": 6, "Spd": 7, "Lck": 5, "Def": 2, "Res": 7},		
		"growths": {"HP": 0, "Str": 0, "Mag": 15, "Skl": 5, "Spd": 10, "Lck": 20, "Def": 0, "Res": 15},
		"maxStats": {"HP": 45, "Str": 25, "Mag": 33, "Skl": 28, "Spd": 31, "Lck": 33, "Def": 25, "Res": 32}
	},

	"maid": {
		"name": "Maid/Butler",
		"promotesTo": null,
		"promotesFrom": ["rod_knight"],
		"classTier": "tier2",
		"bases": {"HP": 18, "Str": 4, "Mag": 5, "Skl": 9, "Spd": 8, "Lck": 4, "Def": 5, "Res": 4},		
		"growths": {"HP": 0, "Str": 10, "Mag": 10, "Skl": 15, "Spd": 15, "Lck": 10, "Def": 5, "Res": 10},
		"maxStats": {"HP": 50, "Str": 28, "Mag": 31, "Skl": 33, "Spd": 33, "Lck": 32, "Def": 29, "Res": 29}
	},	

	"garou": {
		"name": "Wolfskin",
		"promotesTo": ["managarmr"],
		"promotesFrom": null,
		"classTier": "tier1",
		"bases": {"HP": 19, "Str": 8, "Mag": 0, "Skl": 4, "Spd": 6, "Lck": 0, "Def": 4, "Res": 0},		
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 5, "Spd": 15, "Lck": 5, "Def": 10, "Res": 0},
		"maxStats": {"HP": 45, "Str": 24, "Mag": 15, "Skl": 18, "Spd": 22, "Lck": 17, "Def": 21, "Res": 15}
	},

	"managarmr": {
		"name": "Wolfssegner",
		"promotesTo": null,
		"promotesFrom": ["garou"],
		"classTier": "tier2",
		"bases": {"HP": 22, "Str": 11, "Mag": 0, "Skl": 6, "Spd": 7, "Lck": 1, "Def": 7, "Res": 1},		
		"growths": {"HP": 20, "Str": 20, "Mag": 0, "Skl": 5, "Spd": 15, "Lck": 5, "Def": 10, "Res": 0},
		"maxStats": {"HP": 65, "Str": 36, "Mag": 25, "Skl": 29, "Spd": 31, "Lck": 26, "Def": 32, "Res": 26},
		"bonus": {"Hit": 10, "Crit": 5, "Ddg": 10}
	},

	"singer": {
		"name": "Songstress",
		"promotesTo": null,
		"promotesFrom": null,
		"classTier": "special",
		"bases": {"HP": 16, "Str": 3, "Mag": 0, "Skl": 6, "Spd": 5, "Lck": 3, "Def": 2, "Res": 3},
		"growths": {"HP": 0, "Str": 10, "Mag": 0, "Skl": 20, "Spd": 20, "Lck": 20, "Def": 0, "Res": 0},
		"maxStats": {"HP": 45, "Str": 28, "Mag": 27, "Skl": 31, "Spd": 31, "Lck": 35, "Def": 27, "Res": 28}
	},

	"witch": {
		"name": "Witch",
		"promotesTo": null,
		"promotesFrom": null,
		"classTier": "special",
		"bases": {"HP": 17, "Str": 0, "Mag": 10, "Skl": 5, "Spd": 9, "Lck": 3, "Def": 4, "Res": 5},
		"growths": {"HP": 5, "Str": 0, "Mag": 25, "Skl": 5, "Spd": 20, "Lck": 5, "Def": 0, "Res": 10},
		"maxStats": {"HP": 50, "Str": 25, "Mag": 36, "Skl": 27, "Spd": 34, "Lck": 28, "Def": 26, "Res": 29},
		"bonus": {"Crit": 10, "Avo": 10}
	},

	"lodestar": {
		"name": "Lodestar",
		"promotesTo": null,
		"promotesFrom": null,
		"classTier": "special",
		"bases": {"HP": 19, "Str": 7, "Mag": 0, "Skl": 10, "Spd": 9, "Lck": 7, "Def": 7, "Res": 2},
		"growths": {"HP": 15, "Str": 10, "Mag": 0, "Skl": 20, "Spd": 10, "Lck": 25, "Def": 5, "Res": 5},
		"maxStats": {"HP": 60, "Str": 29, "Mag": 26, "Skl": 35, "Spd": 33, "Lck": 40, "Def": 30, "Res": 29},
		"bonus": {"Hit": 10, "Crit": 5, "Avo": 10}
	},
};

var capIndicator = '`';


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

	if (parts[0].length==1)
		parts[0] = ' '+parts[0];
	if (parts[1] == undefined) {
		if (parts[0].charAt(parts[0].length-1) == capIndicator)
			num = parts[0] + "  ";
		else
			num = dec ? parts[0] + "   " : parts[0];
	}
	else {
		if (parts[1].length==1)
			parts[1] = parts[1]+' ';
		num = parts[0] + "." + parts[1];
	}
	return num;
}

function capFormat(num) {
	var num = String(num);
	if (num.length==1) {
		num = "  /" + num;
	}
	else if (num.length==2) {
		num = "  /" + num;
	}
	return num;
}

function printAverageStats(character, promotion) {
	var character = characters[character];
	var class1 = classes[character.startingClass];
	var startingLevel = character.startingLevel;
	var class2;
	var unpromoted20Stats;
	var tier1levelcap = 20;
	var tier2levelcap = 20;
	if (class1.promotesTo) {
		if (promotion != undefined && (class1.promotesTo[0] == promotion || class1.promotesTo[1] == promotion))
			class2 = classes[promotion];
		else if (class1.classTier == "tier1")
			class2 = classes[class1.promotesTo[0]];
	}
	if (character.special) {
		tier1levelcap = 40;
	}

	var class1Growths = {};
	for (var stat in character.growths) {
		class1Growths[stat] = character.growths[stat] + class1.growths[stat];
	}

	var class1Levels = {};
	for (var i=startingLevel; i<tier1levelcap+1; i++) {
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
		if (i==20)
			unpromoted20Stats = expectedStats;

	}

	console.log(character.name);
	console.log(class1.name);

	console.log("Lvl    HP     Str    Mag    Skl    Spd    Lck    Def    Res   ");
	console.log("---   -----  -----  -----  -----  -----  -----  -----  -----  ");
	for (var level in class1Levels) {
		var display = numFormat(level, false) + "    ";
		for (var stat in class1Levels[level]) {
			display += numFormat(class1Levels[level][stat], true) + '  ';
		}
		console.log(display);
	}
	var tier1Caps = "Caps: ";
	for (var stat in class1.maxStats) {
		tier1Caps += capFormat(class1.maxStats[stat] + character.mods[stat]) + '  ';
	}
	console.log(tier1Caps);


	if (class2) {
		var class2Growths = {};
		for (var stat in character.growths) {
			class2Growths[stat] = character.growths[stat] + class2.growths[stat];
		}
		if (unpromoted20Stats) {
			for (var stat in unpromoted20Stats) {
				if (unpromoted20Stats[stat].charAt(unpromoted20Stats[stat].length-1)==capIndicator) {
					unpromoted20Stats[stat] = unpromoted20Stats[stat].slice(0, unpromoted20Stats[stat].length-1);
				}
				unpromoted20Stats[stat] = Number(numFormat(unpromoted20Stats[stat], true));				
			}
		}
		var promoted20Bases = newStats(unpromoted20Stats, class1.bases, class2.bases);

		var class2Levels = {};
		for (var i=1; i<tier2levelcap+1; i++) {
			var expectedPStats = {};
			for (var stat in class2Growths) {
				expectedPStats[stat] = promoted20Bases[stat] + class2Growths[stat]*(i-1)*(0.01);
				if (expectedPStats[stat] >= class2.maxStats[stat] + character.mods[stat]) {
					expectedPStats[stat] = class2.maxStats[stat] + character.mods[stat];
					expectedPStats[stat] = String(expectedPStats[stat]) + capIndicator;
				}
				expectedPStats[stat] = String(expectedPStats[stat]);
			}
			class2Levels[String(i)] = expectedPStats;
		}

		console.log("\n"+class2.name);
		console.log("Lvl    HP     Str    Mag    Skl    Spd    Lck    Def    Res   ");
		console.log("---   -----  -----  -----  -----  -----  -----  -----  -----  ");
		for (var level in class2Levels) {
			var display = numFormat(level, false) + "    ";
			for (var stat in class2Levels[level]) {
				display += numFormat(class2Levels[level][stat], true) + '  ';
			}
			console.log(display);
		}
		var tier2Caps = "Caps: ";
		for (var stat in class2.maxStats) {
			tier2Caps += capFormat(class2.maxStats[stat] + character.mods[stat]) + '  ';
		}
		console.log(tier2Caps);		

	}
}

function modTotal(character) {
	var mods = character.mods;
	var total = 0;
	for (var stat in mods)
		total += mods[stat];
	return total;
}


for (var key in characters) {
	var character = characters[key];
	var total = modTotal(character);
	if (total < 0) {
		console.log(character.name);
		console.log(character.mods);
		console.log(total);
	}

}

function createUnit(unit, endingclass) {
	var unit = characters[unit];
	if (typeof endingclass == "string")
		endingclass = classes[endingclass];
	var gen1 = {
		"name": unit.name, "gender": unit.gender, "gen": 1,
		"parent1": undefined, "parent2": undefined,
		"mods": unit.mods, "startingClass": unit.startingClass,
		"endingClass": endingclass
	};
	if (endingclass) {
		gen1["endingClass"] = endingclass;
		var caps = {};
		for (var stat in gen1.mods) {
			caps[stat] = endingclass.maxStats[stat] + gen1.mods[stat];
		}
		gen1["caps"] = caps;
	}
	return gen1;
}

// for all children except 3rd gen Kanna
function createChild(parent, child, endingclass) {
	var parent = parent;
	var child = child;
	var endingclass = endingclass;
	if (typeof parent == "string")
		parent = characters[parent];
	if (typeof child == "string")
		child = characters[child];
	if (typeof endingclass == "string")
		endingclass = classes[endingclass];

	var offspring = {
		"name": "",
		"gender": child.gender,
		"gen": 2,
		"parent1": child.parent1,
		"parent2": "",
		"mods": {},
		"startingClass": child.startingClass
	};

	if (child.name == "Shigure" || (child.name == "Kanna" && child.gender == "M")) {
		if (parent.gen == 1 && parent.gender != 'F' && parent.support)
			offspring["parent2"] = parent.name.toLowerCase();
		else
			return "" + child.name + " needs a compatible father";
	}
	else {
		if (parent.gen == 1 && parent.gender != 'M' && parent.support)
			offspring["parent2"] = parent.name.toLowerCase();
		else
			return "" + child.name + " needs a compatible mother";
	}
	offspring["name"] = characters[offspring["parent2"]].name + "!" + child.name;

	var parent1 = characters[offspring["parent1"]];
	var parent2 = characters[offspring["parent2"]];

	for (var stat in parent1.mods) {
		if (stat == "HP")
			offspring.mods[stat] = 0;
		else
			offspring.mods[stat] = parent1.mods[stat] + parent2.mods[stat] + 1;
	}

	if (endingclass) {
		offspring["endingClass"] = endingclass;
		var caps = {};
		for (var stat in parent1.mods) {
			caps[stat] = endingclass.maxStats[stat] + offspring.mods[stat];
		}
		offspring["caps"] = caps;
	}
	return offspring;
}

// for 3rd gen Kanna specifically
function createGen3Kanna(grandparent, parent, endingclass) {
	var grandparent = grandparent;
	var parent = parent;
	var endingclass = endingclass;
	if (typeof grandparent == "string")
		grandparent = characters[grandparent];
	if (typeof parent == "string")
		parent = characters[parent];
	if (typeof endingclass == "string")
		endingclass = classes[endingclass];

	var offspring = {
		"name": "",
		"gender": parent.gender,
		"gen": 3,
		"parent1": "kamui",
		"parent2": "",
		"grandparent": "",
		"mods": {},
		"startingClass": "dark_prince"
	};

	var parent1 = characters.kamui;
	offspring["parent2"] = parent.name.toLowerCase();
	offspring["grandparent"] = grandparent.name.toLowerCase();
	var parent2 = createChild(offspring["grandparent"], offspring["parent2"]);

	offspring.name = parent2.name + "!Kanna";

	for (var stat in parent1.mods) {
		if (stat == "HP")
			offspring.mods[stat] = 0;
		else
			offspring.mods[stat] = parent1.mods[stat] + parent2.mods[stat];
	}

	if (endingclass) {
		offspring["endingClass"] = endingclass;
		var caps = {};
		for (var stat in parent1.mods) {
			caps[stat] = endingclass.maxStats[stat] + offspring.mods[stat];
		}
		offspring["caps"] = caps;
	}
	return offspring;

}

function displayStats(unit) {
	console.log("Name: "+unit.name);
	console.log("Gender: "+unit.gender);
	console.log("Gen: "+unit.gen);
	console.log("Parent 1: "+unit.parent1);
	console.log("Parent 2: " +unit.parent2);
	console.log("Mods: "); console.log(unit.mods);
	console.log("Starting Class: "+unit.startingClass);
	console.log("Ending Class: "+unit.endingClass.name);
	console.log("Caps: "); console.log(unit.caps);
}

function combatStats(unit) {
	var combatStats = {"Base Hit": 0, "Base Crit": 0, "Base Avo": 0, "Base Ddg": 0};
	var classBonus = unit.endingClass.bonus;
	combatStats["Base Hit"] = Math.floor((unit.caps["Skl"]*3 + unit.caps["Lck"])/2) + (classBonus ? (classBonus["Hit"]||0):0);
	combatStats["Base Crit"] = Math.floor((unit.caps["Skl"]-4)/2) + (classBonus ? (classBonus["Crit"]||0):0);
	combatStats["Base Avo"] = Math.floor((unit.caps["Spd"]*3 + unit.caps["Lck"])/2) + (classBonus ? (classBonus["Avo"]||0):0);
	combatStats["Base Ddg"] = unit.caps["Lck"] + (classBonus ? (classBonus["Ddg"]||0):0);
	return combatStats;
}

//var kid = createUnit("crimson", "weapon_master");
//var kid = createChild("nyx", "eponine", "exorcist");
//displayStats(kid);
//console.log(combatStats(kid));
//var gen3kanna = createGen3Kanna("charlotte", "velour", "berserker");
//onsole.log(gen3kanna);
//printAverageStats("tsubaki", "weapon_master");

