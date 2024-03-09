import { useState } from 'react';
import WasteFacts from '../components/WasteFacts'
export default function Home(props) {
	return(
		<div className="HomePage">
			<center>
			<h1>This is the {props.page} page</h1>
			<WasteFacts />
			</center>
		</div>
	) 
}
