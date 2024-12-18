// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Kang Adit';

// creation phase pada Global Context
//nama variabel = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase



// var nama = 'Aditya Anwar Maulana';
// var umur = 26;

// console.log(sayHello());

// function sayHello() {
// 	return`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


// var nama = `Aditya Anwar Maulana`;
// var username = '@adityaanwarmaulana09';

// function cetakURL() {
// 	var instagramURL = 'http://instagram.com/';
// 	return instagramURL + username;
// }

// console.log(cetakURL('@soni'));





// function a() {
// 	console.log('ini a');

// 	function b() {
// 		console.log('ini b');

// 		function c() {
// 			console.log('ini c');
// 		}

// 		c();
// 	}

// 	b();
// }

// a();




function satu() {
	var nama = 'Aditya Anwar Maulana';
	console.log(nama);
}

function dua() {
	console.log(nama);
}

console.log(nama);
var nama = 'Soni';
satu();
dua('Sapi');
console.log(nama);

