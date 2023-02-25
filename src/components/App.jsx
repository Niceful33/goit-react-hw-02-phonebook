import React from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHandler = data => {
    const checkContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    return checkContact
      ? alert('таке імя вже існує')
      : this.setState({ contacts: [...this.state.contacts, data] });
  };

  hendlerFilterChange = inputSearch => {
    this.setState({ filter: inputSearch });

    this.filteredName();
  };
  filteredName = () => {
    const { contacts, filter } = this.state;
    // console.log(contacts);
    const filterName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterName;
  };
  deleteitem = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onInput={this.hendlerFilterChange} />
        <ContactList
          events={this.state.contacts}
          filter={this.filteredName()}
          onDeleteItem={this.deleteitem}
        />
      </>
    );
  }
}

export default App;
