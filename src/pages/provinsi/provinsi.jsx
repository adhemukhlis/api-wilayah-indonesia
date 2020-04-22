import React, { Component } from "react";
import { getProvinsi, PathDic } from "../../firebaseRef/firebaseRef";
import { Container } from "../style";
import TableContent from "../table";
class PageProvinsi extends Component {
	state = {
		provinsi: [ ]
	};
	componentDidMount( ) {
		getProvinsi(( data ) => this.setState({ provinsi: data }))
	}
	render( ) {
		const { provinsi } = this.state;
		return (
			<div style={Container}>
				<h1 style={{color:'#222'}}>Provinsi</h1>
				<TableContent col_label="Provinsi" data_content={provinsi} row_key={PathDic.provinsi} link_key={'wilayah'}/>
			</div>
		)
	}
}
export default PageProvinsi;