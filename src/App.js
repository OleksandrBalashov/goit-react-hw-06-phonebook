import Layout from './components/Layout';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { connect } from 'react-redux';

const App = ({ length }) => (
  <>
    <Layout>
      <h1 className="app__title">Phonebook</h1>
      <ContactForm />
      {length !== 0 && <ContactList />}
    </Layout>
  </>
);

const mapStateToProps = state => ({
  length: state.contacts.items.length,
});

export default connect(mapStateToProps)(App);
