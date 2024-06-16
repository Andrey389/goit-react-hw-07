import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";
// import { statusFilters } from "../../redux/filtersSlice";

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <ul className={css.ulContainer}>
      {contacts.map((contact) => {
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
};
