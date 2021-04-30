import {useRef, useState, useEffect} from 'react';

import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';
import useAnimationFrame from './useAnimationFrame';

import './style.scss';

function BiPaperPlane({submitted, ...props}) {
	return (
		<div className={`plane-container${submitted ? ' flying' : ''}`}>
			<svg
				style={{}}
				stroke='currentColor'
				fill='currentColor'
				strokeWidth={0}
				viewBox='0 0 24 24'
				{...props}>
				<path d='M20.563,3.34c-0.292-0.199-0.667-0.229-0.989-0.079l-17,8C2.219,11.429,1.995,11.788,2,12.18 c0.006,0.392,0.24,0.745,0.6,0.902L8,15.445v6.722l5.836-4.168l4.764,2.084c0.128,0.057,0.265,0.084,0.4,0.084 c0.181,0,0.36-0.049,0.52-0.146c0.278-0.169,0.457-0.463,0.479-0.788l1-15C21.021,3.879,20.856,3.54,20.563,3.34z M18.097,17.68 l-5.269-2.306L16,9.167l-7.649,4.25l-2.932-1.283L18.89,5.794L18.097,17.68z' />
			</svg>
		</div>
	);
}

const placeholders = [
	{
		name: 'Samwise Gamgee',
		email: 'shire_sam@gmail.com 🌱',
		message: 'Send me a message?',
		from: 'LOTR',
	},
];

export default ({section}) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [errors, setErrors] = useState([]);

	const {executeRecaptcha} = useGoogleReCaptcha();

	const [placeholderIndex, setPlaceholderIndex] = useState(0);
	const placeholder = placeholders[placeholderIndex];

	const onChange = (e) => {
		console.log(e);
	};

	const onSubmit = async (e) => {
		const token = await executeRecaptcha('login_page');
		const res = await fetch(`https://formspree.io/f/mzbkqdzo`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				name,
				message,
				'g-recaptcha-response': token,
			}),
			headers: {Accept: 'application/json'},
		});
		const json = await res.json();

		if (json.ok) {
			setEmail('');
			setName('');
			setMessage('');
			setSubmitted(true);
		} else {
			setErrors(json.errors);
		}
	};

	return (
		<>
			<section id={`${section.id}-page`} className={'page scroll-offset'}>
				<h1>Contact the Developer</h1>
				<div className='contact-form'>
					<div>
						<label htmlFor=''>Full name?</label>
						<input
							autoCorrect={'0'}
							autoComplete={'false'}
							placeholder={placeholder['name']}
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className={'error'}>
						{errors
							.filter((err) => err.field === 'name')
							.map((err) => `${err.message}`)}
					</div>
					<div>
						<label htmlFor=''>Email?</label>
						<input
							autoCorrect={'0'}
							autoComplete={'false'}
							placeholder={placeholder['email']}
							value={email}
							onChange={(e) => {
								setErrors(errors.filter((err) => err.field !== 'email'));
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className={'error'}>
						{errors
							.filter((err) => err.field === 'email')
							.map((err) => `${err.message}`)}
					</div>
					<div>
						<textarea
							placeholder={placeholder['message']}
							autoCorrect={'0'}
							autoComplete={'false'}
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
							columns={2}
							rows={4}
						/>
					</div>
					<div className={'error'}>
						{errors
							.filter((err) => err.field === 'message')
							.map((err) => `${err.message}`)}
					</div>
					<div className={'submit-row'}>
						<div className={'disclaimer'}>
							<i className={'material-icons'}>privacy_tip</i>
							<div className={'message-wrapper'}>
								<div className={'message'}>
									<div>
										This contact form is protected using Google's reCAPTCHA
										service.
									</div>
									<div>
										<a href=''>Privacy Policy</a>
										<a href=''>Terms of Service</a>
									</div>
									<div>🤖</div>
								</div>
							</div>
						</div>
						<button disabled={!name || !email || !message} onClick={onSubmit}>
							<span>SEND </span>
							<BiPaperPlane submitted={submitted} />
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
