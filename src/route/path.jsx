export const PATH_DIR = {
	root:'/',
	doc:'/doc',
  provinsi: "/wilayah",
  kab_kot: "/wilayah/:id_provinsi",
  kecamatan: "/wilayah/:id_provinsi/:id_kab_kot",
  des_kel: "/wilayah/:id_provinsi/:id_kab_kot/:id_kecamatan",
};
