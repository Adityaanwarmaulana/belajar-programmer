var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, mie, susu, sayur, soda) :');

switch( item ) {
	case 'nasi' : 
	case 'daging' :
	case 'susu' :
	case 'sayur' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'mie' :
	case 'soda' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	default :
		alert('angka yang anda masukkan salah');
		break;
}