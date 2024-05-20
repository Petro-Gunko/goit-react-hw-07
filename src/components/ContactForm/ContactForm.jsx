import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact1 } from "../../redux/contactsOps";

import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .required("Is required!"),
  callnumber: Yup.string()
    .trim()
    .min(3, "Min 3 chars!")
    .max(50, "Max 50 chars!")
    .required("Is required!"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.callnumber,
    };
    dispatch(addContact1(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", callnumber: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <div className={css.field}>
          <label htmlFor="username">Name</label>
          <Field type="text" name="username" />
          <ErrorMessage
            className={css.ErrorMessage}
            name="username"
            component="span"
          />
        </div>
        <div className={css.field}>
          <label htmlFor="callnumber">Number</label>
          <Field type="number" name="callnumber" />
          <ErrorMessage
            className={css.ErrorMessage}
            name="callnumber"
            component="span"
          />
        </div>
        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
