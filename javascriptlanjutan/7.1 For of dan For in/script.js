// For..of
// Array
// const mhs = ['Aditya', 'Anwar', 'Maulana'];

// for(let i = 0; i < mhs.length; i++) {
// 	console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for(const m of mhs) {
// 	console.log(m);
// }

// String 
// const nama = 'Aditya';
// for(const n of nama) {
// 	console.log(n);
// }


// const mhs = ['Aditya', 'Anwar', 'Maulana'];
// mhs.forEach((m, i) => {
// 	console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
// 	console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }


// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));
// for(n of liNama) {
// 	console.log(n.innerHTML);
// }


// Arguments
// function jumlahkanAngka() {
// 	// return arguments.reduce((a, i) => a + i);
// 	// [1, 2, 3].forEach(a => jumlah += a);
// 	let jumlah = 0;
// 	for(a of arguments) {
// 		jumlah += a;
// 	}
// 	return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// for..in
const mhs = {
	nama: 'Aditya',
	umur: 26,
	email: 'Adit.com'
}

for(m in mhs) {
	console.log(mhs[m]);
}