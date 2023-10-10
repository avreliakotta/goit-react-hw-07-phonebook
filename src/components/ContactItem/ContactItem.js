import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contactsSlice';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  // const handleDeleteContact = () => {
  //   dispatch(deleteContact(id));
  // };
  return (
    <li className={css.contactItem}>
      <span className={css.contact}>
        {name} : {phone}
      </span>
      <button
        type="button"
        // onClick={() => handleDeleteContact(id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
