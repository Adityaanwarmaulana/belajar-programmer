// Callback
// Synchronous Callback
// function halo(nama) {
// 	alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
// 	const nama = prompt('Masukkan Nama : ');
// 	callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [
// {
// 	"nama": "Aditya",
// 	"nim": "123",
// 	"email": "AAM.com",
// 	"jurusan": "Teknik Informatika"
// },
// {
// 	"nama": "Anwar",
// 	"nim": "456",
// 	"email": "A.com",
// 	"jurusan": "Teknik Informatika"
// },
// {
// 	"nama": "Maulana",
// 	"nim": "789",
// 	"email": "M.com",
// 	"jurusan": "Teknik Informatika"
// },
// ];
// console.log('mulai');
// mhs.forEach(m => {
// 	for (let i = 0; i < 10000000; i++ ) {
// 		let date = new Date();
// 	}
// 	console.log(m.nama)});
// console.log('selesai');


// Asynchronous Callback
// function getDataMahasiswa(url, succes, error) {
// 	let xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function() {
// 		if(xhr.readyState === 4) {
// 			if (xhr.status === 200) {
// 				success(xhr.response);
// 			} else if(xhr.status === 404) {
// 				error();
// 			}
// 		}
// 	}

// 	xhr.open('get', url);
// 	xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
// 	const mhs = JSON.parse(results);
// 	mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');


// JQuery
console.log('mulai');
$.ajax({
	url: 'data/mahasiswa.json',
	succes: (mhs) => {
		mhs.forEach(m => console.log(m.nama));
	},
	error: (e) => {
		console.log(e.responseText);
	}
});
console.log('selesai');