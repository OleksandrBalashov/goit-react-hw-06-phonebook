import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contact-actions';
import ContactFilter from '../FilterContacts';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ContactFilter />
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
  ),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
