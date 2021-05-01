import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Route, Switch} from 'react-router';

import analytics from './analytics.firebase';

import Blog from './Content/Blog';
import Content from './Content';

import sections from './Content/sections';

for (let i = 0; i < sections.length; i++) {
	if (i !== 0) sections[i].previous = sections[i - 1].path;
	if (i !== sections.length - 1) sections[i].next = sections[i + 1].path;
}

export default ({history, match}) => {
	return (
		<Switch>
			<Route path={'/blog'}>
				<Blog />
			</Route>
			<Route path={'/'}>
				<Content history={history} />
			</Route>
		</Switch>
	);
};
