import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleChange, value }) => {
  return (
    <div className={css.filter_container}>
      <p>Find contacts by name</p>
      <input
        className={css.filter_input}
        type="text"
        name="filter"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
