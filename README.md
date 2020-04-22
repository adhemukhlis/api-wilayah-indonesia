# API Wilayah Indonesia

## Deskripsi

Layanan API wilayah Indonesia :
 - Provinsi
 - Kabupaten/kota
 - Kecamatan
 - Desa/Kelurahan
## Struktur Data
API ini menggunakan layanan *Firebase Database* dengan struktur:

```jsx
//root
{
	wilayah: {
		provinsi: {
			":id:": {
				"id": ":id:",
				"name": ":name:"
			},
		},
		kabupaten_kota: {
			":id:": {
				"id": ":id:",
				"id_provinsi": ":id:",
				"name": ":name:"
			},
		},
		kecamatan: {
			":id:": {
				"id": ":id:",
				"id_kabupaten_kota": ":id:",
				"name": ":name:"
			},
		},
		desa_kelurahan: {
			":id:": {
				"id": ":id:",
				"id_kecamatan": ":id:",
				"name": ":name:"
			},
		}
	}
}
```
live JSON demo : 
https://api-wilayah-indonesia-firebase.firebaseio.com/.json?orderBy=%22$key%22&equalTo=%22_wilayah%22&print=pretty

*tetap gunakan node "wilayah" saat production, node "_wilayah" hanya menampilhan beberapa data*


## Penggunaan
Ada beberapa cara untuk menggunakan API ini 
 - Firebase Database
 - REST API
### Firebase Database

firebase *config* :
``` jsx
const  config  = {
	databaseURL: "https://api-wilayah-indonesia-firebase.firebaseio.com"
};
firebase.initializeApp(config)
```
#### firebase root
``` jsx
const  rootRef  =  firebase.database( ).ref( ).child( 'wilayah' );
```
#### GET
``` jsx
const  refProvinsi  =  rootRef.child( 'provinsi' );
const  refKabupatenKota  =  rootRef.child( 'kabupaten_kota' );
const  refKecamatan  =  rootRef.child( 'kecamatan' );
const  refKelurahan  =  rootRef.child( 'desa_kelurahan' );

const getAllProvinsi =()=> refProvinsi.once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
		arr.push(val.val( ))
	});
	// arr => array provinsi
	//[{id,name},{id,name},...]
	console.log(arr);
})

const getAllKabKot =(id_provinsi)=> refKabupatenKota.orderByChild( 'id_provinsi' ).equalTo( id_provinsi ).once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
		arr.push(val.val( ))
	});
	// arr => array Kabupaten dan Kota
	//[{id,name},{id,name},...]
	console.log(arr);
});

const getAllKecamatan =(id_kabkot)=> refKecamatan.orderByChild( 'id_kabupaten_kota' ).equalTo( id_kabkot ).once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
		arr.push(val.val( ))
	});
	// arr => array Kecamatan
	//[{id,name},{id,name},...]
	console.log(arr);
});

const getAllKelurahan =(id_kecamatan)=> refKelurahan.orderByChild( 'id_kecamatan' ).equalTo( id_kecamatan ).once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
		arr.push(val.val( ))
	});
	// arr => array Kelurahan
	//[{id,name},{id,name},...]
	console.log(arr);
});

const getProvinsi =(id_provinsi)=> refProvinsi.child( id_provinsi ).once("value", data  => {
	console.log( data.val( ).name )
});

const getKabkot =(id_kabkot)=> refKabupatenKota.child( id_kabkot ).once("value", data  => {
	console.log( data.val( ).name )
});

const getKecamatan =(id_kecamatan)=> refKecamatan.child( id_kecamatan ).once("value", data  => {
	console.log( data.val( ).name )
});

const getKelurahan =(id_kelurahan)=> refKelurahan.child( id_kelurahan ).once("value", data  => {
	console.log( data.val( ).name )
});
```
