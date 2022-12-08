import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import css from 'components/App/App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
