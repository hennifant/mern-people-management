import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import PeopleTableRow from "./PeopleTableRow";

const PeopleList = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/people/")
      .then(({ data }) => {
        setPeoples(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return peoples.map((res, i) => {
      return <PeopleTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default PeopleList;
