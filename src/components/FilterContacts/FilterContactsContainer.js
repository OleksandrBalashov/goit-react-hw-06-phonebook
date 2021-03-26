import { connect } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contact-actions';
import FilterContacts from './FilterContacts';

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
  onClick: () => dispatch(filterContacts('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
