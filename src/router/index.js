import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import ForwardRefPage from "../page/forward-ref";
import ContentPage from "../page/content"
import ConcurrentModalPage from "../page/concurrent-modal"
import SuspensePage from "../page/suspense"


function RouterComponent() {
  return (
    <Fragment>
      <Route path="/forwardRef" component={ForwardRefPage} />
      <Route path="/content" component={ContentPage} />
      <Route path="/concurrentModal" component={ConcurrentModalPage} />
      <Route path="/suspense" component={SuspensePage} />
    </Fragment>
  );
}

export default RouterComponent;
