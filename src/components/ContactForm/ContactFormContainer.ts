import { Payload } from './../../redux/contacts/contact-actions';
import { connect, ConnectedProps } from 'react-redux';
import { addContact } from '../../redux/contacts/contact-actions';
import ContactForm from './ContactForm';

const mapDispatchToProps = {
  onSubmitForm: (contact: Payload) => addContact(contact),
}

const connector= connect(null, mapDispatchToProps)

export type PropsForm = ConnectedProps<typeof connector>;
export default connector(ContactForm);
