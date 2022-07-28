import React from "react";
import "./style.css";

function Todo({ todo, onDeleteHandler, onEditHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHandler(todo.id)}
          //onDeleteHandler 등은 List.js에서 확인가능
          //삭제하기 버튼을 누르면 List의 기능 작동
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
          //취소나 완료버튼을 누르면 
        >
          {todo.isDone ? "취소" : "완료"}
          {/*isDone이 true면 취소버튼, false면 완료버튼이 뜬다*/}
        </button>
      </div>
    </div>
  );
}

export default Todo;
