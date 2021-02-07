import {Route} from 'react-router-dom';

import Header from './Header';

import './style.scss';

export default (props) => {
  return (
    <div className={`overlay ${props.page}`}>
      <Header {...props} />
    </div>
  );
};
