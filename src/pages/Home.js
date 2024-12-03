import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
	const [persons, setpersons] = useState([]);
	const { id } = useParams();
	
	useEffect(() => {
		loadpersons();
	}, []);
	
	const loadpersons = async () => {
		const result = await axios.get("http://localhost:8080/persons");
		console.log(result.data);
		setpersons(result.data);
	};
	
	const deletePerson = async (id) => {
		await axios.delete(`http://localhost:8080/person/${id}`);
		loadpersons();
	};
	
	return (<div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Név</th>
              <th scope="col">Felhasználónév</th>
              <th scope="col">Email</th>
              <th scope="col">Művelet</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((Person, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{Person.name}</td>
                <td>{Person.username}</td>
                <td>{Person.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewPerson/${Person.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editPerson/${Person.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deletePerson(Person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>);
}
