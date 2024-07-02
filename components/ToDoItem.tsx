import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { todoStore } from "../store/index.ts";

interface Props {
  todo: ToDo;
}

export const ToDoItem = ({ todo }: Props) => {
  const removeTodo = todoStore((state) => state.removeTodo);

  return (
    <div
      style={{
        backgroundColor: "rgba(154, 146, 150, 0.16)",
        marginBottom: "1rem",
        borderRadius: "0.25rem",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox />
        <Typography>{todo.description} </Typography>
      </div>
      <Button onClick={() => removeTodo(todo.id)}>
        <DeleteIcon color="error" />
      </Button>
    </div>
  );
};

export default ToDoItem;
