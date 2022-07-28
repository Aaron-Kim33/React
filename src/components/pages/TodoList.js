import React, { useState } from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import List from "../list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    // todos : 현재상태 
    // setTodos : 현재 상태를 바꿔줄 메소드
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
      //id , title, body , isDone(상태표시)로 배열을 만들었음
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
