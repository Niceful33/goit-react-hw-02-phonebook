import React from 'react';
import propTypes from 'prop-types';

const ContactList = ({ filter, onDeleteItem }) => {
  //   console.log(filter);
  return (
    <ul>
      {filter.map(({ name, number, id }) => (
        <li key={id}>
          <span>
            {name}:{number}
          </span>
          <button type="button" onClick={() => onDeleteItem(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  filter: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteItem: propTypes.func.isRequired,
};
