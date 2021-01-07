import {NavLink} from 'react-router-dom';

const onClick = e => {
  e.preventDefault();
  // get first child, id is on the span for the bracket movement
  let id = e.target.firstChild.id;
  if (!id) id = e.target.id;
  const el = document.getElementById(`${id}-page`);
  if (el)
    el.scrollIntoView({
      behavior: 'smooth',
    });
};

export default props => {
  return (
    <NavLink {...props} onClick={onClick}>
      {props.children}
    </NavLink>
  );
};
