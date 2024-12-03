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
	
	return (0);
}
