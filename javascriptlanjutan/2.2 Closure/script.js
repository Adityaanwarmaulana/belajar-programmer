// function init() {
// 	// let nama = 'Aditya';
// 	return function (nama) {
// 		console.log(nama);
// 	}
// 	return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Aditya');
// panggilNama('Maulana');


// function ucapkanSalam(waktu) {
// 	return function(nama) {
// 		console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
// 	}
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Aditya');
// selamatSiang('Anwar');
// selamatMalam('Maulana');


let add = (function() {
	let counter = 0;
	return function () {
		return ++counter;
	}
})();

counter = 100;


console.log(add());
console.log(add());