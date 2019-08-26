import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ForwardRef from './forward-ref'
import { BrowserRouter as Router } from "react-router-dom";
import { hashHistory } from 'react-router'


const routeConfig = [
  { path: '/',
    component: App,
    childRoutes: [
      { path: 'forwardRef', component: ForwardRef },
      // { path: 'inbox',
      //   component: Inbox,
      //   childRoutes: [
      //     { path: '/messages/:id', component: Message },
      //     { path: 'messages/:id',
      //       onEnter: function (nextState, replaceState) {
      //         replaceState(null, '/messages/' + nextState.params.id)
      //       }
      //     }
      //   ]
      // }
    ]
  }
]

ReactDOM.render(<Router routes={routeConfig} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
