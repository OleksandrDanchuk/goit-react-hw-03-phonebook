import { Component } from 'react';
import css from './App.module.css';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import { getLocalStorage, saveLocalStorage } from 'checkLocalStorage';
const KEY_LOCAL_CONTACTS = 'cotacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const stateLocalStorage = getLocalStorage(KEY_LOCAL_CONTACTS);
    if (stateLocalStorage) {
      this.setState({ contacts: stateLocalStorage });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length === 0) {
      localStorage.removeItem(KEY_LOCAL_CONTACTS);
      return;
    }
    if (prevState.contacts !== this.state.contacts) {
      saveLocalStorage(KEY_LOCAL_CONTACTS, this.state.contacts);
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  deleteContact = ({ target: { id } }) => {
    // deleteLocalStorage(KEY_LOCAL_CONTACTS, id);
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(obj => obj.id !== id) };
    });
  };

  addContact = objContact => {
    if (this.checkName(objContact.name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, objContact],
      }));
      // recordLocalStorage(KEY_LOCAL_CONTACTS, objContact);
    }
  };

  checkName = name => {
    const resultCheck = this.state.contacts.find(
      obj => obj.name.toLowerCase() === name.toLowerCase()
    );
    if (resultCheck) {
      alert(`${name} is already in contacts.`);
    }
    return !resultCheck;
  };

  filterContacts = () => {
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    const filterRender = this.filterContacts();

    return (
      <div className={css.container}>
        <h2>Phonebook</h2>
        <FormAddContacts addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} value={this.state.filter} />
        <ListContacts
          filterRender={filterRender}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
