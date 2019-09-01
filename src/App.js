import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import RouterComponent from './router'


function App() {
  return (
    <div className="App-box">
      <div className="App-header">react源码 解析目录</div>
      <div className="flex-row">
        <ul className="content">
          <li><Link to="/forwardRef">forwardRef</Link></li>
          <li><Link to="/content">content</Link></li>
          <li><Link to="/suspense">suspense</Link></li>
        </ul>
        <div className={`flex-1 margin-left-20`}>
          <RouterComponent  />
        </div>
      </div>
    </div>
  );
}

export default App;
