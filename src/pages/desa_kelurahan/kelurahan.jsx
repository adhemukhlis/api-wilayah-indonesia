import React, { Component } from "react";
import { PathDic, getKecamatanName, getKelurahan } from "../../firebaseRef/firebaseRef";
import { withRouter } from "react-router-dom";
import { Container } from "../style";
import TableContent from "../table";
class PageKelurahan extends Component {
	state = {
		kelurahan: [],
		kecamatan: null
	};
	componentDidMount( ) {
		const { match } = this.props;
		getKecamatanName(match.params.id_kecamatan, ( data ) => this.setState({ kecamatan: data }));
		getKelurahan(match.params.id_kecamatan, ( data ) => this.setState({ kelurahan: data }))
	}
	render( ) {
		const { kecamatan, kelurahan } = this.state;
		return (
			<div style={Container}>
				<h1>Kelurahan</h1>
				<TableContent col_label="Kelurahan" parent_label="Kecamatan" parent_value={kecamatan} data_content={kelurahan} row_key={PathDic.kelurahan}/>
			</div>
		)
	}
}
export default withRouter( PageKelurahan );