import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { PropsForm } from './ContactFormContainer';

class ContactForm extends Component<PropsForm> {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [name]: value });
  };

  handlerSubmitContactFrom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, number } = this.state;
    if (name === '' && number === '') return;

    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
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

export default ContactForm;
