import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contacts/contact-actions';
import { connect } from 'react-redux';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    initialState: {
      name: '',
      number: '',
    },
  };

  state = {
    ...this.props.initialState,
  };

  handleInputChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handlerSubmitContactFrom = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.props.initialState });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.wrap}>
        <form className={styles.form} onSubmit={this.handlerSubmitContactFrom}>
          <div className={styles.wrapLabel}>
            <label className={styles.label}>
              <p className={styles.text}>Name</p>
              <input
                type="text"
                name="name"
                className={styles.input}
                value={name}
                placeholder=" "
                onChange={this.handleInputChange}
              />
            </label>
            <label className={styles.label}>
              <p className={styles.text}>Phone</p>
              <input
                type="tel"
                name="number"
                className={styles.input}
                value={number}
                placeholder=" "
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);