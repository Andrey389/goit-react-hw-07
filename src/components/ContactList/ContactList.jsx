import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const Contacts = useSelector(selectContacts);
  const Filters = useSelector(selectNameFilter);
  const VisibleContacts = Contacts.filter((Contact) => {
    if ("id" in Contact && "name" in Contact && "number" in Contact) {
      if (
        typeof Contact.id === "string" &&
        typeof Contact.name === "string" &&
        typeof Contact.number === "string"
      ) {
        return Contact.name.toLowerCase().includes(Filters.toLowerCase());
      }
    }
    return false;
  });

  return (
    <ul className={css.ulContainer}>
      {VisibleContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.container}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
}
