import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactsList } from 'components/ContactsList/ContactsList';
// import { Filter } from 'components/Filter/Filter';
import css from 'components/App/App.module.css';

export function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      {/* {items.length > 0 && (
        <>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )} */}
    </div>
  );
}
