// CreatePeople Component for add new people

// Import Modules
import React, { useState } from "react";
import axios from "axios";
import PeopleForm from "./PeopleForm.js";

// CreatePeople Component
const CreatePeople = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  // onSubmit handler
  const onSubmit = (peopleObject) => {
    axios
      .post("http://localhost:4000/peoples/create-people", peopleObject)
      .then((res) => {
        if (res.status === 200) alert("People successfully created");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return People form
  return (
    <PeopleForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create People
    </PeopleForm>
  );
};

// Export CreatePeople Component
export default CreatePeople;
