import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

export default function ContactList() {
  const reduxContacts = useSelector(selectContacts);
  const reduxFilter = useSelector(selectNameFilter);

  const filteredContacts = reduxContacts.filter(
    (contact) =>
      typeof contact.name === "string" &&
      contact.name.toLowerCase().includes(reduxFilter.toLowerCase())
  );
  return (
    <ul className={css.container}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
}
