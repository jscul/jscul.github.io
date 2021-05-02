import React, {useState, useRef, useEffect} from 'react';

import {NavLink, Route} from 'react-router-dom';

import LocalLink from 'components/LocalLink';

import './style.scss';

export default ({section, history}) => {
	return (
		<>
			<section id={'about-page'} className={''}>
				<p>Humble Beginning</p>
				<p>
					I have 4+ years of extensive professional experience building robust
					software for a variety of clients through collaboration with
					designers, R&D teams, and other developers.
				</p>
				<p>
					My focus is on building robust servers, microservices, and serverless
					functions to meet client needs and data strategy objectives.
				</p>
				<a
					className={'download-resume'}
					rel={'noopener noreferrer'}
					href='https://docs.google.com/document/d/1LhkF9qWNv8Byz4rozTVjh-Iz9Kuok6ebYlqBhagRHvQ/export?format=pdf'>
					resume <span className='material-icons'>download</span>
				</a>
			</section>
			<section id={'about-page'} className={''}>
				<h1>Education</h1>
				<p>Georgia Institute of Technology (2021-PRESENT)</p>
				<p>Santa Monica College</p>
			</section>
		</>
	);
};
