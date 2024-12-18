// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Aditya";
// arr[1] = "Anwar";
// arr[2] = "Maulana";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Aditya", "Anwar", "Maulana"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Aditya", "Anwar", "Maulana", "Uhuy"];

// for ( var i = 0; i < arr.length; i++ ) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
// 1. join
// var arr = ["Aditya", "Anwar", "Maulana"];
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('Doni', 'Fikri');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Doni');
// arr.shift('Doni');
// console.log(arr.join(' - '));

// var arr = ['Aditya','Anwar', 'Maulana'];
// 4. slice & splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(1, 2, 'Doni', 'Fikri');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal, akhir);
// var arr = ['Aditya', 'Anwar', 'Maulana', 'Doni', 'Fikri'];
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));


// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Aditya', 'Anwar', 'Maulana'];
// for( var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }

// angka.forEach(function(e) {
// 	console.log(e);
// });
// nama.forEach(function(e, i) {
// 	console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map
// var angka = [1,3,5,7,8,4];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,3,5,7,8,4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));


// 9. Filter & find
var angka = [1,3,2,4,7,6,9,10,8];
var angka2 = angka.find(function(x) {
	return x > 4;
});
console.log(angka2);