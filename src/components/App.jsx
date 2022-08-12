import { Form } from './Form/Form';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import {
  errorSelector,
  loadingSelector,
} from 'redux/contacts/contacts-selectors';

const App = () => {
  const customError = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        {customError && <p>{customError}</p>}
        {!customError && <ContactList />}
        {loading && (
          <p>
            <b>Working...</b>
          </p>
        )}
      </Section>
    </div>
  );
};

export { App };
