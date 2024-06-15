import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

export default function App() {
  const dispatch = useDispatch();
  const { items, isLoding, error } = useSelector();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoding && <p>Loding contacts ...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <ContactList />}
    </>
  );
}
