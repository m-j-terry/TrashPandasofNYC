import { useState, useEffect } from 'react';
import Instagram from '../components/Instagram'
import diving2 from '../../public/img/diving2.jpeg'
import garbage from '../../public/img/garbage.jpeg'

export default function Contact(props) {
	const [id, setId] = useState('')

	useEffect(() => {
		setId('active')
	}, [])

	return(
		<div className="ContactPage">
			<div id={id} className="background">
				<img src={garbage}></img>
			</div>
			<div className="column">
				<div id={id} className="header">
					<a href="https://www.instagram.com/trash.pandas_ofnyc/?hl=en"><img className="thumbnail" src={diving2}></img></a>
					<div className="column">
						<h1><a href="https://www.instagram.com/trash.pandas_ofnyc/?hl=en">{props.page}</a></h1>
						<div className="row">
							<div className="column">
								<p>277</p>
								<p>posts</p>
							</div>
							<div className="column">
								<p>~6,400</p>
								<p>followers</p>
							</div>
							<div className="column">
								<p>418</p>
								<p>following</p>
							</div>
						</div>
					</div>
				</div>
				<p className="left">Maggie, Michael, Boone and Marcel</p>
				<p className="left">Let's save the planet; come dive into the trash with us!</p>
			</div>
			<div id="instaDisplay">
				<Instagram />
			</div>		
			<div id="footer" className="column">
				<h2 id="center" >waste and eco-warriors</h2>	
				<div className="row">
					<p><a href="https://www.instagram.com/anurbanharvester/?hl=en">@anurbanharvester</a> | <a href="https://www.linkedin.com/in/matt-homewood/">Matt Homewood</a></p>
					<p><a href="https://www.instagram.com/thetrashwalker/?hl=en">@theTrashWalker</a> | <a href="https://www.linkedin.com/in/anna-sacks-718025a6/">Anna Sacks</a></p>
					<p><a href="https://www.instagram.com/pattiegonia/?hl=en">@pattiegonia</a></p>
					<p><a href="https://www.tiktok.com/@dumpsterdivingmama?_t=8kpUs6fCoQQ&_r=1">@dumpsterdivingmama</a></p>
					<p><a href="https://www.instagram.com/letsreducefoodwastenyc/?hl=en">@letsreducefoodwastenyc</a></p>
				</div>
			</div>	
		</div>
	) 
}
