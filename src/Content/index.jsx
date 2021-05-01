import sections from './sections';

import './style.scss';

export default ({history}) => {
	return sections.map((section, i) => {
		const Section = section.component;
		return <Section key={i} history={history} section={section} />;
	});
};
