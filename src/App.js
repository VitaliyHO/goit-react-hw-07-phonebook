import { useDispatch, useSelector } from "react-redux";
import { AddContactForm } from "./Components/AddContactForm/AddContactForm";
import { Contacts } from "./Components/Contacts/Contacts";
import { Search } from "./Components/Search/Search";
import { selectContacts, selectError, selectIsLoading } from "./redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";

function App() {

  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);



  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <Search />
      {isLoading && <p>Loading...</p>}
      {error && <b>{error}</b>}
      {items.length > 0 && <Contacts /> || !error && <b>Your contacts list is empty</b>}
    </div>
  );
}

export default App;
