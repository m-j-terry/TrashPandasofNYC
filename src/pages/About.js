import { useState } from 'react';
import Sheets from '../components/Sheets'

export default function About(props) {
	return(
		<div className="AboutPage">
			<center>
			<h1>This is the {props.page} page</h1>
			<div>
				<h2>Trash Pandas Waste Spreadsheet</h2>
				<Sheets />
			</div>				
			</center>
		</div>
	) 
}
