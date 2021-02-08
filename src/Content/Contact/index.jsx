import React, {useState} from 'react';

import './style.scss';

export default ({section}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <h1>Contact Me</h1>
        <div className={'center-content'}>
          <div>
            <label htmlFor=''>Email?</label>
            <input />
          </div>
          <div>
            <label htmlFor=''>Name?</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor=''>
              Hello{name ? ` ${name.split(' ')[0].trim()}` : ''}, what can I do
              for ya?
            </label>
            <textarea columns={2} rows={2} />
          </div>
        </div>
      </section>
    </>
  );
};
