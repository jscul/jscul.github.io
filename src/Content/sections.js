import Home from 'Content/Home';
import About from 'Content/About';
import Skills from 'Content/Skills';
import Experience from 'Content/Experience';
import Portfolio from 'Content/Portfolio';
import Recommendations from 'Content/Recommendations';
import Contact from 'Content/Contact';

export default [
	{
		id: 'home',
		component: Home,
		path: '/',
	},
	{
		id: 'about',
		path: '/about',
		component: About,
	},
	{
		id: 'skills',
		path: '/skills',
		component: Skills,
	},
	{
		id: 'experience',
		path: '/experience',
		component: Experience,
	},
	{
		id: 'projects',
		path: '/projects',
		component: Portfolio,
	},
	{
		id: 'recommendations',
		path: '/recommendations',
		component: Recommendations,
	},
	{
		id: 'contact',
		path: '/contact',
		component: Contact,
	},
];
