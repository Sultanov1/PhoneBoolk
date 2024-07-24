import {useAppDispatch} from '../app/hooks';
import {useEffect} from 'react';
import {fetchContacts} from '../store/contactThunk';
import {useSelector} from 'react-redux';
import {selectNewContacts} from '../store/contactSlice';

const ContactListPage = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectNewContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="my-3">Contacts</h1>
      <div className="list-group border-1">
        {contacts.map(contact => (
          <div className="list-group-item list-group-item-action" style={{margin: '10px 0'}}>
            <img
              src={contact.photo}
              alt={contact.name}
              className="rounded me-2" style={{width: '250px'}}/>
            <span className="ms-5 fs-1">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactListPage;