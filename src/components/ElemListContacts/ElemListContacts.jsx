import PropTypes from 'prop-types';
import css from './ElemListContacts.module.css';

export const ElemListContacts = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <li className={css.list}>
        <p>
          {name}: {number}
        </p>
        <button className={css.btn} id={id} onClick={deleteContact}>
          Delete
        </button>
      </li>
    </>
  );
};

ElemListContacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
