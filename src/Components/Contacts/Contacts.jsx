import { ContactsItem } from "./ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { selectContacts, selectFilterValue } from "../../redux/selectors";

export const Contacts = () => {

  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectFilterValue);

  const visibleContacts = filteredName ? 
  contacts.filter(contact => (contact.name).toLowerCase().includes(filteredName.toLowerCase())) : contacts;

  return (
    <div className="container">
      <ul>
        {visibleContacts.length ? visibleContacts.map(contact => {
          return (<ContactsItem contact={contact}/>)
        }) : <h2>No contacts found</h2>}
      </ul>
    </div>
  );
};

