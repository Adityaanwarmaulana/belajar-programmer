// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
// 	nama: 'Aditya',
// 	energi: 10,
// 	makan: function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo Kang ${this.nama}, selamat makan`);
// 	}
// }

// let mahasiswa2 = {
// 	nama: 'Soni',
// 	energi: 30,
// 	makan: function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo Kang ${this.nama}, selamat makan`);
// 	}
// }



// 2. Function Declaration

// const methodMahasiswa = {
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo Kang ${this.nama}, selamat makan!`);
// 	},

// 	main: function (jam) {
// 		this.energi -= jam;
// 		console.log(`Halo Kang ${this.nama}, selamat bermain!`);
// 	},

// 	tidur: function(jam) {
// 		this.energi += jam * 2;
// 		console.log (`Halo Kang ${this.nama}, selamat tidur!`);
// 	}
// }


// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }

// let Adit = Mahasiswa('Adit', 100);
// let Soni = Mahasiswa('Soni', 10);



// function Mahasiswa(nama, energi) {
// 	// let mahasiswa = Object.create(methodMahasiswa);
// 	// let mahasiswa = {};
// 	// let this = Object.create(Mahasiswa.prototype);
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
// 	this.energi += porsi;
// 	return `Halo Kang ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
// 	this.energi -= jam;
// 	return `Halo Kang ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
// 	this.energi += jam * 2;
// 	return `Halo Kang ${this.nama}, selamat tidur!`;
// }

// let Adit = new Mahasiswa(`Adit`, 10);


// versi class
// class Mahasiswa {
// 	constuctor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;
// }

// makan(porsi) {
// 	this.energi += porsi;
// 	return `Halo Kang ${this.nama}, selamat makan!`;
// }

// main(jam) {
// 	this.energi -= jam;
// 	return `Halo Kang ${this.nama}, selamat bermain!`;
// }

// tidur(jam) {
// 	this.energi += jam * 2;
// 	return `Halo Kang ${this.nama}, selamat tidur!`;
// 	}
// }

// let Adit = new Mahasiswa('Adit', 10);
// let Soni = new Mahasiswa('Soni', 30);








// 3. Constructor Function
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo Kang ${this.nama}, selamat makan!`);
// 	}

// 	this.main = function (jam) {
// 		this.energi -= jam;
// 		console.log(`Halo Kang ${this.nama}, selamat bermain!`);
// 	}
// }

// let Adit = new Mahasiswa('Adit', 100);
// let Soni = new Mahasiswa('Soni', 10);






// 4. Object.create