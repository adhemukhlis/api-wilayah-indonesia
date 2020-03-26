import React, { Component } from 'react';
import { Container } from "../style";
class PageDoc extends Component {
	render( ) {
		return (
			<div style={Container}>
				<table style={{
					marginTop: '10vw'
				}} width="100%" border="1px solid black">
					<thead>
						<tr height="50px">
							<th>Struktur Data</th>
						</tr>
					</thead>
					<tbody>
						<tr >
							<td>
								<code>
									<i>*root</i>
								</code>
								<ul>
									<li>wilayah
										<ul>
											<li>provinsi
												<ul>
													<li>:id
														<ul>
															<li>:id</li>
															<li>:name</li>
														</ul>
													</li>
												</ul>
											</li>
											<li>kabupaten_kota
												<ul>
													<li>:id
														<ul>
															<li>:id</li>
															<li>:id_provinsi</li>
															<li>:name</li>
														</ul>
													</li>
												</ul>
											</li>
											<li>kecamatan
												<ul>
													<li>:id
														<ul>
															<li>:id</li>
															<li>:id_kabupaten_kota</li>
															<li>:name</li>
														</ul>
													</li>
												</ul>
											</li>
											<li>desa_kelurahan
												<ul>
													<li>:id
														<ul>
															<li>:id</li>
															<li>:id_kecamatan</li>
															<li>:name</li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
export default PageDoc;