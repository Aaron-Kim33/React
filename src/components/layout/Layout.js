import React from "react";
import "./style.css";

const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
  //props.children은 주로 자식 컴포넌트 또는 html 엘리먼트가 어떻게 구성되어있는지 모르는데, 
  //화면에 표시해야 하는 경우 사용합니다.

};

export default Layout;
