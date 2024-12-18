// Destructuring Assignment

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Adit'];

// const [salam, satu, dua, nama] = perkenalan;

// Skipping Items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items 
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
// 	return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);
// console.log(c);

// Distructuring Object
// const mhs = {
// 	nama: 'Aditya',
// 	umur: 26
// }

// const {nama, umur} = mhs;
// console.log(nama);


// Assignment tanpa deklarasi object

// ({nama, umur} = {nama: 'Aditya', umur: 26});
// console.log(nama);


// Assignment ke variabel baru
// const mhs = {
// 	nama: 'Aditya',
// 	umur: 26
// }

// const {nama: n, umur: u} = mhs;
// console.log(u);


// Memberikan default value
// const mhs = {
// 	nama: 'Aditya',
// 	umur: 26,
// 	email: 'Aaa.com'
// }

// const {nama, umur, email = 'Aditya@.com'} = mhs;
// console.log(email);


// Memberi nilai default + assign ke variabel baru
// const mhs = {
// 	nama: 'Aditya',
// 	umur: 26,
// 	email: 'Aaa.com'
// }

// const {nama: n, umur: u, email: e = 'Aditya@.com'} = mhs;
// console.log(n);



// Rest Parameter
// const mhs = {
// 	nama: 'Aditya',
// 	umur: 26,
// 	email: 'Aaa.com'
// }

// const {nama, ...value} = mhs;
// console.log(value);


// Mengambil field pada Object, setelah dikirim sebagai parameter untuk function
const mhs = {
	id: 123,
	nama: 'Aditya',
	umur: 26,
	email: 'Aaa.com'
}

function getIdMhs({id, nama}) {
	return nama;
}
console.log(getIdMhs(mhs));