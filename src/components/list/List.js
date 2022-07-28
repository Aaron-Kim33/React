import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ todos, setTodos }) {
  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      //console.log(todo.id, todoId)
      // todo.id는 1부터 마지막까지 순회 (1~last)
      // todoId는 본인의 고유 id 값
      return todo.id !== todoId;
      //이 부분은 잘 모르겠네..
    });

    setTodos(newTodos);
    //이 부분도..
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      
      if (todo.id === todoId) {
        //둘의 값이 같으면
        return {
          ...todo,
          // 새로 적은 값을 스프레드로 반환
          isDone: !todo.isDone,
          // true false를 바꿔줌 --> 완료버튼 누르면 아래로 이동, 취소버튼 누르면 위로 이동
        };
      } else {
        //console.log({...todo})
        //{id: 2, title: '리액트 공부하기', body: '리액트 기초를 공부해봅시다.', isDone: true}
        return  {...todo} ;
        
        //둘의 값이 같은 경우가 아니라면 true false는 유지하고 값을 반환
      }
      
    });

    setTodos(newTodos);
    //...?
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            //여기서 todo.isDone은 false이므로 
            //true면, 
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
            //false면 null; Working에 있던 자리가 빈칸이 되고 밑으로 이동
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            //여기서 todo.isDone은 true이므로
            //true면,
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
              //위 처럼 똑같이 완료, 삭제의 기능을 주고
            );
          } else {
            return null;
            //Done칸에 있던 자리에 null을 반환하며 위로 이동
          }
        })}
      </div>
    </div>
  );
}

export default List;
