import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterContacts.module.css';
import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contact-actions';

const FilterContacts = ({ value, onChange }) => (
  <>
    <h3 className={styles.text}>Find contacts by name:</h3>
    <label className={styles.label}>
      <input
        type="text"
        className={styles.input}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

FilterContacts.defaultProps = {
  value: '',
};

FilterContacts.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
