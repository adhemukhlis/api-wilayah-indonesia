import React, { Component } from 'react';
import { Link } from "react-router-dom";
class PageHome extends Component {
	render( ) {
		return (
			<div style={{
				display: 'flex',
				minHeight: '100vh',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#111'
			}}>
				<div>
					<h1 style={{
						color: '#fff'
					}}>API Wilayah Indonesia</h1>
					<div style={{
						display: 'flex',
						width:'100%',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
						<span><Link to="/doc">dokumentasi</Link></span>
						<span><Link to="/wilayah">data wilayah</Link></span>
					</div>
				</div>
			</div>
		)
	}
}
export default PageHome;