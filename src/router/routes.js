import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: Contact,
		key: '@trash.pandas_ofnyc',
		path: '/pandas'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: About,
		key: 'Dumpster Diving Spreadsheet',
		path: '/sheet'
	}
];

export default routes;
