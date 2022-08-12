import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useSelector } from 'react-redux';
import { loadingSelector } from 'redux/contacts/contacts-selectors';

export default function ContactItem({ name, number, onDelete, id }) {
  const loading = useSelector(loadingSelector);
  return (
    <li className={css.li}>
      <span className={css.names}>{name}:</span>
      <span className={css.phones}>{number}</span>
      <button
        className={css.buttons}
        type="button"
        disabled={loading}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
