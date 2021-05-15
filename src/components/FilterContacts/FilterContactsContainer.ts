import { connect, ConnectedProps } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contact-actions';
import { RootState } from '../../redux/store';
import FilterContacts from './FilterContacts';

export type PropsContacts = ConnectedProps<typeof connector>;

const mapStateToProps = (state: RootState) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    filterContacts(event.target.value),
  onClick: () => filterContacts(''),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FilterContacts);
