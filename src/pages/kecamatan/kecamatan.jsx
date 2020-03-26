import React, { Component } from "react";
import { getKabupatenKotaName, getKecamatan, PathDic } from "../../firebaseRef/firebaseRef";
import { withRouter } from "react-router-dom";
import { Container } from "../style";
import TableContent from "../table";
class PageKecamatan extends Component {
	state = {
		kecamatan: [],
		kabupaten_kota: null
	};
	componentDidMount( ) {
		const { match } = this.props;
		getKabupatenKotaName(match.params.id_kab_kot, ( data ) => this.setState({ kabupaten_kota: data }));
		getKecamatan(match.params.id_kab_kot, ( data ) => this.setState({ kecamatan: data }))
	}
	render( ) {
		const { match } = this.props;
		const { kabupaten_kota, kecamatan } = this.state;
		return (
			<div style={Container}>
				<h1>Kecamatan</h1>
				<TableContent col_label="Kecamatan" parent_label="Kab/kota" parent_value={kabupaten_kota} data_content={kecamatan} row_key={PathDic.kabupaten_kota} link_key={( PathDic.wilayah + "/" + match.params.id_provinsi + "/" + match.params.id_kab_kot )}/>
			</div>
		)
	}
}
export default withRouter( PageKecamatan );