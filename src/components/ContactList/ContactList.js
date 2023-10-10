import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { filterSelector, contactsSelector } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(filterSelector);
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const filteredContacts = filter
    ? contacts.entities.filter(entity =>
        entity.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts.entities;
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} name={name} phone={phone} id={id} />
        ))}
    </ul>
  );
};
