const angka = [-1, 4, 6, 2, 7, -5, -4, 3, 8, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
// 	if (angka[i] >= 3) {
// 		newAngka.push(angka[1]);
// 	}
// }
// console.log(newAngka);


// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// 0 + -1 + 4 + 6 + 2 + 7 + -5 + -4 + 3 + 8 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 6,7,8,9
.map(a => a * 3) // 18, 21, 24, 27
.reduce((acc, curr) => acc + curr); // 90
console.log(hasil);