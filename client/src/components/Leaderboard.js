import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Leaderboard(props) {
  const [listToSort, setListToSort] = useState([]);
  const [listToSort2, setListToSort2] = useState([]);
  const [listToSort3, setListToSort3] = useState([]);
  const [listToSort4, setListToSort4] = useState([]);
  const [inOrder, setInOrder] = useState([]);
  const [inOrder2, setInOrder2] = useState([]);
  const [inOrder3, setInOrder3] = useState([]);
  const [inOrder4, setInOrder4] = useState([]);
  const [allInOrder, setAllInOrder] = useState([]);

  useEffect(() => {
    const newSortedList = props.users.map((user) => {
      return {
        name: user.name,
        score1: user.score1,
      };
    });
    const newSortedList2 = props.users.map((user) => {
      return {
        name: user.name,
        score2: user.score2,
      };
    });
    const newSortedList3 = props.users.map((user) => {
      return {
        name: user.name,
        score3: user.score3,
      };
    });
    const newSortedList4 = props.users.map((user) => {
      return {
        name: user.name,
        score4: user.score4,
      };
    });

    setListToSort(newSortedList);
    setListToSort2(newSortedList2);
    setListToSort3(newSortedList3);
    setListToSort4(newSortedList4);

    setInOrder(
      listToSort.sort((a, b) => {
        return b.score1 - a.score1;
      })
    );
    setInOrder2(
      listToSort2.sort((a, b) => {
        return b.score2 - a.score2;
      })
    );
    setInOrder3(
      listToSort3.sort((a, b) => {
        return b.score3 - a.score3;
      })
    );
    setInOrder4(
      listToSort4.sort((a, b) => {
        return b.score4 - a.score4;
      })
    );

}, [props.users]);


  const displayLeaderboard = inOrder.map((user, index) => {
    return (
      <li key={index} className="leaderboard-item">
        <p>{user.name}</p>
        <p>{user.score1}</p>
      </li>
    );
  });
  const displayLeaderboard2 = inOrder2.map((user, index) => {
    return (
      <li key={index} className="leaderboard-item">
        <p>{user.name}</p>
        <p>{user.score2}</p>
      </li>
    );
  });
  const displayLeaderboard3 = inOrder3.map((user, index) => {
    return (
      <li key={index} className="leaderboard-item">
        <p>{user.name}</p>
        <p>{user.score3}</p>
      </li>
    );
  });
  const displayLeaderboard4 = inOrder4.map((user, index) => {
    return (
      <li key={index} className="leaderboard-item">
        <p>{user.name}</p>
        <p>{user.score4}</p>
      </li>
    );
  });

  return (
    <QuizContainer>
      <h1>Quiz 1 Leaderboard {displayLeaderboard}</h1>
      <QuizLink>Take Quiz 1</QuizLink>
      <h1>Quiz 2 Leaderboard {displayLeaderboard2}</h1>
      <QuizLink>Take Quiz 2</QuizLink>
      <h1>Quiz 3 Leaderboard {displayLeaderboard3}</h1>
      <QuizLink>Take Quiz 3</QuizLink>
      <h1>Quiz 4 Leaderboard {displayLeaderboard4}</h1>
      <QuizLink>Take Quiz 4</QuizLink>
    </QuizContainer>
  );
}

const QuizContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
`;

const QuizLink = styled.button`
  height: 4.3vw;
  background-color: blue;
`;
