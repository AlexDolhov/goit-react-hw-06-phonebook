import { Container, SectionContainer } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (contacts) {
  //     return parsedContacts;
  //   }
  //   return [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <SectionContainer>
        <h1>Phonebook</h1>
        <ContactForm />
      </SectionContainer>
      <SectionContainer>
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </SectionContainer>
    </Container>
  );
};
