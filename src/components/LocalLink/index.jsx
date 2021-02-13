import {useState, useEffect} from 'react';

import {NavLink, useHistory} from 'react-router-dom';

export default ({find, to, block = 'start', children, ...props}) => {
  const history = useHistory();

  const onClick = (e) => {
    // let scroll listener handle updating the url
    e.preventDefault();

    if (to && !find) history.replace(to);

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
    <NavLink to={to} {...props} onClick={onClick} replace={false}>
      {children}
    </NavLink>
  );
};
