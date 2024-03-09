import { useState } from 'react';
import Instagram from '../components/Instagram'


export default function Contact(props) {
	return(
		<div className="ContactPage">
			<center>
			<h1>This is the {props.page} page</h1>
			<div>
				<h2>Trash Pandas Instagram</h2>
				<Instagram />
			</div>			
			</center>
		</div>
	) 
}
