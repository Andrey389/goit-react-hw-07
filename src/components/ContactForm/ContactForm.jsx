import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const UserChema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Занадто короткий! Мінімум 3 символи!")
    .max(50, "Занадто довгий! Максимум 50 символів!")
    .required("Це обов'язкове поле!"),
  number: Yup.string()
    .min(3, "Занадто короткий! Мінімум 3 символи!")
    .max(50, "Занадто довгий! Максимум 50 символів!")
    .required("Це обов'язкове поле!"),
});
export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (value, action) => {
    dispatch(addContact(value));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserChema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor="">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.group}>
          <label htmlFor="">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btnForm} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
