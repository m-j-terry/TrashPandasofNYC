import { useState } from 'react';
import WasteFacts from '../components/WasteFacts'
export default function Home(props) {
	return(
		<div className="HomePage">
			<center>
			<div className="background">
				<img src="https://media.istockphoto.com/id/838559072/photo/new-york-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=HTV4d0kBuAHQjOjfORFv9BJmnNjM359-acMFe83zoIc="></img>
			</div>
			<h1>Trash Pandas NYC</h1>
			<WasteFacts />
			</center>
		</div>
	) 
}
