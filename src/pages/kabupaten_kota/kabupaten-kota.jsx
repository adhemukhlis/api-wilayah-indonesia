import React, { Component } from "react";
import { PathDic, getKabupatenKota, getProvinsiName } from "../../firebaseRef/firebaseRef";
import { withRouter } from "react-router-dom";
import { Container } from "../style";
import TableContent from "../table";
class PageKabKot extends Component {
	state = {
		kabupaten_kota: [],
		provinsi: null
	};
	componentDidMount( ) {
		const { match } = this.props;
		getProvinsiName(match.params.id_provinsi, ( data ) => this.setState({ provinsi: data }));
		getKabupatenKota(match.params.id_provinsi, ( data ) => this.setState({ kabupaten_kota: data }))
	}
	render( ) {
		const { match } = this.props;
		const { provinsi, kabupaten_kota } = this.state;
		return (
			<div style={Container}>
				<h1>Kabupaten Kota</h1>
				<TableContent col_label="Kabupaten Kota" parent_label="Provinsi" parent_value={provinsi} data_content={kabupaten_kota} row_key={PathDic.kabupaten_kota} link_key={( PathDic.wilayah + "/" + match.params.id_provinsi )}/>
			</div>
		)
	}
}
export default withRouter( PageKabKot );