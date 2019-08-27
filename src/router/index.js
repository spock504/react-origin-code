import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import ForwardRefPage from "../page/forward-ref";
import ContentPage from "../page/content"

function RouterComponent() {
  return (
    <Fragment>
      <Route path="/forwardRef" component={ForwardRefPage} />
      <Route path="/content" component={ContentPage} />

    </Fragment>
  );
}

export default RouterComponent;
