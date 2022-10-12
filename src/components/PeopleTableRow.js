import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const PeopleTableRow = (props) => {
  const { _id, name, email, rollno } = props.obj;

  const deletePeople = () => {
    axios
      .delete("http://localhost:4000/peoples/delete-people/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("People successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <Link className="edit-link" to={"/edit-people/" + _id}>
          Edit
        </Link>
        <Button onClick={deletePeople} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default PeopleTableRow;
