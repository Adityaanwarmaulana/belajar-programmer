// Rest parameter

// function myFunc() {
// 	// return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// 	// return myArgs;
// 	// return Array.from(arguments);
// 	return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// function jumlahkan(...angka) {
// 	let total = 0;
// 	for(const a of angka) {
// 		total += a;
// 	}

// 	return total;
// 	return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));



// array destructuring
// const kelompok1 = ['A', 'B', 'C', 'D', 'E'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);


// object distructuring
// const team = {
// 	pm: 'Aditya',
// 	frontEnd1: 'Anwar',
// 	frontEnd2: 'Maulana',
// 	backEnd: 'Budi',
// 	ux: 'Dodi',
// 	devOps: 'Aku'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);


// filtering
function filterBy(type, ...values) {
	return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 5, 3, 'Aditya', false, true, 11, "Budi"));