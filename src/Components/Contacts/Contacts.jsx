import { ContactsItem } from "./ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getContacts, getFilterValue } from "../../redux/selectors";

export const Contacts = () => {

  const contacts = useSelector(getContacts);
  const filteredName = useSelector(getFilterValue);

  const visibleContacts = filteredName ? 
  contacts.filter(contact => (contact.name).toLowerCase().includes(filteredName.toLowerCase())) : contacts;

  return (
    <div className="container">
      <ul>
        {visibleContacts.length ? visibleContacts.map(contact => {
          return (<ContactsItem contact={contact}/>)
        }) : <h2>No matches found</h2>}
      </ul>
    </div>
  );
};

