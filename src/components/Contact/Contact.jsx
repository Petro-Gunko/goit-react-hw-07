import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact1 } from "../../redux/contactsOps.js";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact1(id));

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
      <button className={css.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
