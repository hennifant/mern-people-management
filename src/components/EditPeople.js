// EditPeople Component for update People data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleForm from "./PeopleForm";

// EditPeople Component
const EditPeople = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  //onSubmit handler
  const onSubmit = (peopleObject) => {
    axios
      .put(
        "http://localhost:4000/peoples/update-people" + props.match.params.id,
        peopleObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("People successfully updated");
          props.history.push("/people-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize people form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/peoples/update-people" + props.match.params.id
      )
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  // Return people form
  return (
    <PeopleForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update People
    </PeopleForm>
  );
};

// Export EditPeople Component
export default EditPeople;
