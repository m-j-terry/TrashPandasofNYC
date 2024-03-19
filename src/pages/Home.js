import { useState } from 'react';
import WasteFacts from '../components/WasteFacts'
export default function Home(props) {
	return(
		<div className="HomePage">
			<center>
			<div className="background">
				<img src='https://whatdesigncando.s3.eu-central-1.amazonaws.com/app/uploads/20210120101404/iStock-927987734-1440x959.jpg'></img>
			</div>
			<h1 id="title">Trash Pandas of NYC</h1>
			<WasteFacts />
			</center>
		</div>
	) 
}
