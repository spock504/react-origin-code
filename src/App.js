import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import RouterComponent from './router'


function App() {
  return (
    <div className="App-box">
      <div className="App-header">react源码 解析目录</div>
      <ul>
        <li><Link to="/forwardRef">forwardRef</Link></li>
        <li><Link to="/content">content</Link></li>
      </ul>
      <RouterComponent />
    </div>
  );
}

export default App;
