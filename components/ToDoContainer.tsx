import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import ToDoItem from "./ToDoItem";

import { todoStore } from "../store/index.ts";

function ToDoContainer() {
  const todos = todoStore((state) => state.todos);
  const addTodo = todoStore((state) => state.addTodo);

  const handleAddTodo = (event: any) => {
    event.preventDefault();
    addTodo(event.target[0].value);
  };
  return (
    <div
      style={{
        margin: "5rem 0",
        backgroundColor: "#FFF",
        minHeight: "300px",
        padding: "2rem",
        borderRadius: "1rem",
        minWidth: "40vw",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "3rem", fontWeight: 500, marginBottom: "1rem" }}
      >
        To-Do List{" "}
      </Typography>
      <form
        onSubmit={handleAddTodo}
        style={{
          display: "flex",
          marginBottom: "1rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="write down you task"
          variant="outlined"
          sx={{ marginRight: "1rem" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ background: "linear-gradient(0.125turn, #e66465, #9198e5)" }}
        >
          Submit
        </Button>
      </form>
      {todos.map((todo) => {
        return <ToDoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default ToDoContainer;
