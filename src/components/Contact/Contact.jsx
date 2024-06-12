import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <FaUser className={css.icons} /> {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icons} /> {number}
        </p>
      </div>
      <button onClick={handleDeleteContact}>Delete</button>
    </>
  );
}
