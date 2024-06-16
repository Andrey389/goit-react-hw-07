import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <FaUser className={css.icons} /> {contact.name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icons} /> {contact.number}
        </p>
      </div>
      <button onClick={handleDeleteContact}>Delete</button>
    </>
  );
}
