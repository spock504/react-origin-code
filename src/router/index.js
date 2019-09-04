import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import ForwardRefPage from "../page/forward-ref";
import ContentPage from "../page/content"
import ConcurrentModalPage from "../page/concurrent-modal"
import SuspensePage from "../page/suspense"
import HooksPage from "../page/hooks"
import ChildrenPage from "../page/children"



function RouterComponent() {
  return (
    <Fragment>
      <Route path="/forwardRef" component={ForwardRefPage} />
      <Route path="/content" component={ContentPage} />
      <Route path="/concurrentModal" component={ConcurrentModalPage} />
      <Route path="/suspense" component={SuspensePage} />
      <Route path="/hooks" component={HooksPage} />
      <Route path="/children" component={ChildrenPage} />
    </Fragment>
  );
}

export default RouterComponent;
