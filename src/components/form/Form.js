import React, { useState } from "react";
import "./style.css";

function Form({ setTodos, todos }) {
  // setTodos = id: 0 title:빈칸 body:빈칸 상태:false
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    //target = event의 행위가 일어나는 주체
    //여기서는 제목,내용의 input 인듯함
    console.log({name, value})
    // name과 value(타이핑한 text가 될 것)
    // 아래의 {todo.title} , {todo.body} 인듯함
    setTodo({ ...todo, [name]: value, id: todos.length + 1 });
    //todo 는 initialState => id :0, 타이틀,바디: 빈칸, 상태:false 
    //id에 +1을 해줘서 구별
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //새로고침 방지
    setTodos([...todos, todo]);
    // ...todos => TodoList.js의 todos 즉, 리액트 공부하기~ 이 부분임
    // 거기에 todo(제목, 내용에 입력한 값을) 붙여넣어준다. setTods(현재값을 변경해주는 메소드)를 사용해서.
    setTodo(initialState);
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
    {/* onSubmit은 form에 묶어놓고 사용 시, form 내부의 컴포넌트에 focus를 주었을 때, 엔터를 눌러도 onSubmit을 호출하게 된다.
      대신 기본적으로 새로고침이 작동된다고 함 그래서 위에서 preventDefault를 씀*/}
    
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          //제목
          value={todo.title}
          //제목에 적은 text
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          //내용
          value={todo.body}
          //내용에 적은 text
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
