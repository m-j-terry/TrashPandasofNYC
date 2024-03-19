import { useState } from 'react';
import Sheets from '../components/Sheets'

export default function About(props) {
	return(
		<div className="AboutPage">
			<center>
			<div className="background">
				<img src='https://res.cloudinary.com/dlqhluouv/image/upload/v1710826594/IMG_0150_q61tb8.jpg'></img>
			</div>
			<h1>About the Project</h1>
			<div>
				<h2>Who are we?</h2>
				<p>My name is Michael. I am a (former) educator, software developer, writer, and social activist. </p>
				<p>Magdalena and I began a journey in November of 2019. We had been dumpster diving around Brooklyn and Manhattan since 2018 when we decided to create an instagram account to document the quantity (and quality) of all the things we were finding in the trash. Toothpaste. Candy bars. Razors. Feminine hygeine products. Crackers and other dry goods. Holiday goods. And so much more!</p>
				<p>When we made our instagram, I also started a <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGM2bcNxW9mAuIU95k3llQI_n396jS7gEC-2j7huUvP8ctfU_OlkSygpK2A3uA2kjIphcQX8L_oJ6p/pubhtml">spreadsheet</a> to document the total value of everything we were pulling from the trash—six nights a week, 52 weeks a year!</p>
				<p>While we have not posted on our instagram in quite sometime nor have we updated our spreadsheet, the 'data' we collected was monumental. Just the two of us checking a couple of stores' dumpsters each night were able to document over $150,000 of wasted goods in the year and a half we collected data, which was more than our combined income at the time! We didn't sell any of it. We 'redistributed' it out to friends and across our community at work and to our community through neighborhood fridges/pantries and directly off our stoop. </p>
				<p>But if this is the trend for small cornerstore CVS' and Walgreens in the little sliver of New York that we covered each night, imagine this trend magnified across the city, the country, the entire global market.</p>
				<h2>The Trash Pandas Dumpster Diving Spreadsheet</h2>
				<Sheets />
			</div>				
			</center>
		</div>
	) 
}
