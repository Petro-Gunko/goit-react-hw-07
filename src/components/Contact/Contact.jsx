import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button
        className={css.btnDelete}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
