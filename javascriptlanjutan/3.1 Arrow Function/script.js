// Function Expression
// const tampilNama = function (nama) {
// 	return `Halo, ${nama}`;
// }
// console.log(tampilNama('Aditya'));

// untuk satu parameter
// const tampilNama = (nama) => {
// 	return `Halo, ${nama}`;
// }
// console.log('Adit');

// parameter dua
// const tampilNama = (nama, waktu) => {
// 	return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Budi', 'Malam'));

// implisit return
// const tampilNama = nama =>
// 	`Halo, ${nama}`;
// console.log('Adit');

// const tampilNama = () => `Hallo World!`;
// console.log(tampilNama());


// let mahasiswa = ['Aditya', 'Anwar', 'Maulana'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);


// konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
// 	this.nama = 'Aditya';
// 	this.umur = 26;
// 	this.sayHello = function () {
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }

// const aditya = new Mahasiswa();


// Arrow Function
// const Mahasiswa = function () {
// 	this.nama = 'Aditya';
// 	this.umur = 26;
// 	this.sayHello = () => {
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }

// const aditya = new Mahasiswa();


// Object Literal
// const mhs1 = {
// 	nama: 'Aditya',
// 	umur: 26,
// 	sayaHello: function () {
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }



// const Mahasiswa = function () {
// 	this.nama = 'Aditya';
// 	this.umur = 26;
// 	this.sayHello = function () {
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}	
// 		setInterval(() => {
// 			console.log(this.umur++);
// 		}, 500);

// }

// const aditya = new Mahasiswa();



const box = document.querySelector('.box');
box.addEventListener('click', function () {
	let satu = 'size';
	let dua = 'caption';

	if (this.classList.contains(satu)) {
		[satu, dua] = [dua, satu];
	}
	
	this.classList.toogle('size');
	setTimeout(() => {
		this.classList.toogle('caption');
	}, 600);
});