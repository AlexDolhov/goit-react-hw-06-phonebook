import { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
// import { Formik } from 'formik';
// model.id = nanoid();

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    // console.log(name, value);

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    // console.log(name.value, number.value);
    this.addContact(name.value, number.value);
    this.reset();
  };

  changeFilter = e => this.setState({ filter: e.currentTarget.value });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="number">
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <label>
          Find contacts by name
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label>
        <h2>Contacts</h2>
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button type="button" onClick={() => this.deleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}
