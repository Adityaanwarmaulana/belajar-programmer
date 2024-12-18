// membuat Object
// var mhs = {
// 	nama : "Aditya Anwar Maulana",
// 	umur : "26",
// 	ips : [3.14, 3.45, 3.65],
// 	alamat : {
// 		jalan : "Jl. Abc No 11",
// 		kota : "Karawang"
// 	}
// };

// Object Literal
var mhs1 = {
	nama : 'Aditya Anwar Maulana',
	nim : '19260141',
	jurusan : 'Teknik Informatika'
}

var mhs2 = {
	nama : 'Dodi',
	nim : '123',
	jurusan : 'Teknik Informatika'
}

// Function Declaration
function buatObjectMahasiswa(nama, nim, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('Soni', '111', 'Teknik mesin');


// Constructor
function Mahasiswa(nama, nim, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nim = nim;
	this.jurusan = jurusan;
	// return this;
}

var mhs4 = new Mahasiswa('Erik', '000', 'Teknik Listrik');