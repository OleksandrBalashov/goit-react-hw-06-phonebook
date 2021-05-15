import React from 'react';
import Layout from './components/Layout';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { connect } from 'react-redux';
import { RootState } from './redux/store';

interface Props {
  length: number;
}

const App = ({ length }: Props) => (
  <>
    <Layout>
      <h1 className="app__title">Phonebook</h1>
      <ContactForm />
      {length !== 0 && <ContactList />}
    </Layout>
  </>
);

const mapStateToProps = (state: RootState) => ({
  length: state.contacts.items.length,
});

export default connect(mapStateToProps)(App);
