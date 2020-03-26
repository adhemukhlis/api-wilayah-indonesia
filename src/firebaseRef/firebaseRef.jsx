import firebase from "./firebaseInit";
export const PathDic = {
	wilayah: 'wilayah',
	provinsi: 'provinsi',
	id_provinsi: 'id_provinsi',
	kabupaten_kota: 'kabupaten_kota',
	id_kab_kot:'id_kabupaten_kota',
	kecamatan:'kecamatan',
	id_kecamatan:'id_kecamatan',
	kelurahan:'desa_kelurahan'
};
const rootRef = firebase
	.database( )
	.ref( )
	.child( PathDic.wilayah );
const refProvinsi = rootRef.child( PathDic.provinsi );
const refKabupatenKota = rootRef.child( PathDic.kabupaten_kota );
const refKecamatan = rootRef.child( PathDic.kecamatan );
const refKelurahan = rootRef.child( PathDic.kelurahan );
export const getProvinsi = ( callback ) => refProvinsi.once("value", data => {
	let arr = [ ];
	data.forEach(val => {
		arr.push(val.val( ))
	});
	callback( arr )
});
export const getProvinsiName = ( id_provinsi, callback ) => refProvinsi
	.child( id_provinsi )
	.once("value", data => {
		callback( data.val( ).name )
	});
export const getKabupatenKota = ( id_provinsi, callback ) => refKabupatenKota
	.orderByChild( PathDic.id_provinsi )
	.equalTo( id_provinsi )
	.once("value", data => {
		let arr = [ ];
		data.forEach(val => {
			arr.push(val.val( ))
		});
		callback( arr )
	});
	export const getKabupatenKotaName = ( id_kab_kot, callback ) => refKabupatenKota
	.child( id_kab_kot )
	.once("value", data => {
		callback( data.val( ).name )
	});
	export const getKecamatan = ( id_kab_kot, callback ) => refKecamatan
	.orderByChild( PathDic.id_kab_kot )
	.equalTo( id_kab_kot )
	.once("value", data => {
		let arr = [ ];
		data.forEach(val => {
			arr.push(val.val( ))
		});
		callback( arr )
	});
	export const getKecamatanName = ( id_kecamatan, callback ) => refKecamatan
	.child( id_kecamatan )
	.once("value", data => {
		callback( data.val( ).name )
	});

	export const getKelurahan = ( id_kecamatan, callback ) => refKelurahan
	.orderByChild( PathDic.id_kecamatan )
	.equalTo( id_kecamatan )
	.once("value", data => {
		let arr = [ ];
		data.forEach(val => {
			arr.push(val.val( ))
		});
		callback( arr )
	});