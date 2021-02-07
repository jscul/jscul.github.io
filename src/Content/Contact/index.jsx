import React, {useState} from 'react';

import {NavLink} from 'react-router-dom';

import logo from 'assets/programmer.png';

import './style.scss';

export default ({section}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  return (
    <>
      <div className={'center-content'}>
        <div className={'title'} style={{}}>
          CONTACT
        </div>
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
    </>
  );
};
