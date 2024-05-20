import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contactsSlice";

import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.container}>
      {contacts.map((contact) => (
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
