// Destructuring 

// function kalkulasi(a, b) {
// 	return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);


// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);



// function kalkulasi(a, b) {
// 	return {
// 		tambah: a + b,
// 		kurang: a - b,
// 		kali: a * b,
// 		bagi: a / b
// 	}
// }

// const {kali, bagi, tambah, kurang} = kalkulasi(2, 3);
// console.log(kali);


// Distructuring function arguments
// const mhs1 = {
// 	nama: 'Adit',
// 	umur: 26,
// 	email: 'Aditok.com'
// }

// function cetakMhs(nama, umur) {
// 	return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));


const mhs1 = {
	nama: 'Adit',
	umur: 26,
	email: 'Aditok.com',
	nilai: {
		tugas: 90,
		uts: 95,
		uas: 100
	}
}

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
	return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilia uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));