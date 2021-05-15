import React from 'react';
import ContactFilter from '../FilterContacts';
import { PropsContacts } from './ContactListContainer';
import styles from './Contacts.module.css';

const ContactList = ({ contacts, onDeleteContact }: PropsContacts) => {
  const onDelete = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.dataset.id;

    onDeleteContact(id);
  };

  return (
    <>
      <ContactFilter />
      <ul className={styles.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={styles.item}>
            <p className={styles.text}>
              {name}: {number}
            </p>
            <button
              data-id={id}
              type="button"
              className={styles.button}
              onClick={onDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
