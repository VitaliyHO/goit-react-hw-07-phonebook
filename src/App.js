import { AddContactForm } from "./Components/AddContactForm/AddContactForm";
import { Contacts } from "./Components/Contacts/Contacts";
import { Search } from "./Components/Search/Search";

function App() {

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <Search />
      <Contacts />
    </div>
  );
}

export default App;
