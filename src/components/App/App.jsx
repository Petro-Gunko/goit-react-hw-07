import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import initialContacts from "../../contacts.json";

import { useState, useEffect } from "react";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("updatedContacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handleDeleteTask = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("updatedContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteTask} />
    </div>
  );
}
