import React from 'react';

function ChildrenDemo(props) {
  console.log("props.children",props.children)
  console.log("props.children.map",React.Children.map(props.children,c => [c,[c,c]]))
  return props.children;
}

export default () => {
  return (
    <ChildrenDemo>
      <span>1aaa</span>
      <span>2bbb</span>
    </ChildrenDemo>
  )
}
