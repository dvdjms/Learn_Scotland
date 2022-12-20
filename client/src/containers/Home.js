import React from "react";
import Header from "../components/Header";
import Leaderboard from "../components/Leaderboard";
import { useEffect, useState } from "react";
const baseURL = "http://localhost:9000/api/users/";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    return fetch(baseURL)
      .then((res) => res.json())
      .then((results) => setUsers(results));
  };

  return (
    <div>
      <Header />
    </div>
  );
}
