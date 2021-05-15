import { RootState } from './../../redux/store';
import { connect, ConnectedProps } from 'react-redux';
import ContactList from './ContactList';
import { deleteContact } from '../../redux/contacts/contact-actions';
import { string } from 'prop-types';

type getVisibleContactsType = (items: any, filter: string) => any[];
type element = {
  name: string
}

const getVisibleContacts: getVisibleContactsType = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }: element) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }: RootState) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = {
  onDeleteContact: (id: string) => deleteContact(id),
};

const connector =  connect(mapStateToProps, mapDispatchToProps);
export type PropsContacts = ConnectedProps<typeof connector>;
export default connector(ContactList);