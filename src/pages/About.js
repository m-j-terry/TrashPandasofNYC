import { useState, useEffect } from 'react';
import Sheets from '../components/Sheets'
import us from '../../public/img/us.jpeg'

export default function About(props) {
	const [id, setId] = useState('')
	useEffect(() => {
		setId("active")
		console.log(id)
	}, [])
	return(
		<div className="AboutPage">
			<center>
			<div id={id} className="background">
				<img src={us}></img>
			</div>
			<h1 id={id}>About the Project</h1>
			<div>
				<h2 id={id}>Who are we?</h2>
				<p id={id}>My name is Michael. I am a (former) educator, software developer, writer, and social activist. </p>
				<p id={id}>Magdalena and I had been dumpster diving around Brooklyn and Manhattan for over a year when we decided to create an <a id={id} href="https://www.instagram.com/trash.pandas_ofnyc/?hl=en">instagram account</a> in 2019 to document the quantity (and quality) of all the things we were finding in the trash. Toothpaste. Candy bars. Razors. Pads and tampons. Crackers and dry goods. Pet food and products. Holiday items, decorations and treats. And so much more!</p>
				<p id={id}>When we made our <a id={id} href="https://www.instagram.com/trash.pandas_ofnyc/?hl=en">instagram</a>, I also started a <a id={id} href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGM2bcNxW9mAuIU95k3llQI_n396jS7gEC-2j7huUvP8ctfU_OlkSygpK2A3uA2kjIphcQX8L_oJ6p/pubhtml">spreadsheet</a> to document the total value of everything we were pulling from the trash—six nights a week, 52 weeks a year!</p>
				<p id={id}>While we have not posted on our instagram in quite sometime nor have we updated our spreadsheet since 2021, the 'data' we collected is so valuable. Just the two of us checking a couple of dumpsters each night were able to document over $150,000 of wasted goods in a year and a half, which was more than our combined income at the time!</p>
				<p id={id}>We didn't sell any of it. We 'redistributed' it out to friends/coworkers and to our community through neighborhood fridges/pantries and directly off our stoop. Imagine a world where hundreds of millions of dollars of usable (already created and distributed!) goods were given to those who would use them rather than being sent to the landfill!</p>
				<h2 id={id}>The Trash Pandas Dumpster Diving Spreadsheet</h2>
				<Sheets />
			</div>				
			</center>
		</div>
	) 
}
