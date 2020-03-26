# API Wilayah Indonesia

## Deskripsi

Layanan API wilayah Indonesia :
 - Provinsi
 - Kabupaten/kota
 - Kecamatan
 - Desa/Kelurahan
## Struktur Data
API ini menggunakan layanan *Firebase Database* dengan struktur:

```yml
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


## Penggunaan
Ada beberapa cara untuk menggunakan API ini 
 - Firebase Database
 - REST API
### Firebase Database

firebase *config* :
```
const  config  = {
	databaseURL: "https://api-wilayah-indonesia-firebase.firebaseio.com"
};
firebase.initializeApp(config)
```
#### firebase root
```
const  rootRef  =  firebase.database( ).ref( ).child( 'wilayah' );
```
#### GET
```
const  refProvinsi  =  rootRef.child( 'provinsi' );
const  refKabupatenKota  =  rootRef.child( 'kabupaten_kota' );
const  refKecamatan  =  rootRef.child( 'kecamatan' );
const  refKelurahan  =  rootRef.child( 'desa_kelurahan' );

refProvinsi.once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
		arr.push(val.val( ))
	});
	// arr => array provinsi
	//[{id,name},{id,name},...]
	console.log(arr);
})

refKabupatenKota.orderByChild( 'id_provinsi' ).equalTo( ':id_provinsi:' ).once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
	arr.push(val.val( ))
});

refKecamatan.orderByChild( 'id_kabupaten_kota' ).equalTo( ':id_kabupaten_kota:' ).once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
	arr.push(val.val( ))
});
refKelurahan.orderByChild( 'id_kecamatan' ).equalTo( ':id_kecamatan:' ).once("value", data  => {
	let  arr  = [ ];
	data.forEach(val  => {
	arr.push(val.val( ))
});


});
refProvinsi.child( ":id_provinsi:" ).once("value", data  => {
	console.log( data.val( ).name )
});

refKabupatenKota.child( ":id_kabupaten_kota:" ).once("value", data  => {
	console.log( data.val( ).name )
});

refKecamatan.child( ":id_kecamatan:" ).once("value", data  => {
	console.log( data.val( ).name )
});

refKelurahan.child( ":id_desa_kelurahan:" ).once("value", data  => {
	console.log( data.val( ).name )
});


```
