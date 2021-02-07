import {useState, useEffect} from 'react';

import {NavLink, useHistory} from 'react-router-dom';

export default ({find, to, block = 'start', children, ...props}) => {
  const history = useHistory();

  const onClick = (e) => {
    // let scroll listener handle updating the url
    e.preventDefault();

    if (to) history.push(to);

    if (find) {
      const el = document.getElementById(find);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block,
        });
      }
    }
  };

  return (
    <NavLink to={to} {...props} onClick={onClick}>
      {children}
    </NavLink>
  );
};
