// Tagged Templates
// const nama = 'Aditya AM';
// const umur = 26;

// function coba(strings, ...values) {
// 	// let result = '';
// 	// strings.forEach((str, i) => {
// 	// 	result += `${str}${values[i] || ''}`;
// 	// });
// 	// return result;

// 	return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Highligt
const nama = 'Aditya AM';
const umur = 26;
const email = 'Aditya.com';

function highligt(strings, ...values) {
	return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highligt`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

document.body.innerHTML = str;