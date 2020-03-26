import React, { Component } from "react";
import { Link } from "react-router-dom";
import './table.css'
class TableComponent extends Component {
	render( ) {
		const {
			col_label,
			parent_label,
			parent_value,
			data_content,
			row_key,
			link_key
		} = this.props;
		return (
			<table width="100%" border="1px solid black">
				<thead>{parent_label  && parent_value 
						? <tr height="50px">
								<th>{parent_label}</th>
								<th>{parent_value}</th>
							</tr>
						: null}
					<tr height="50px">
						<th>Total</th>
						<th>{data_content.length}</th>
					</tr>
					<tr height="50px">
						<th>id</th>
						<th>{col_label}</th>
					</tr>
				</thead>
				<tbody>{data_content.map(data => {
						return (
							<tr key={row_key + "-" + data.id}>
								<td>{data.id}</td>
								<td>
									{
										link_key?<Link to={"/" + link_key + "/" + data.id}>{data.name}</Link>:data.name
									}
									
								</td>
							</tr>
						)
					})}</tbody>
			</table>
		)
	}
}
export default TableComponent;