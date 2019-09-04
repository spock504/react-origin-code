import React, { Suspense } from 'react'

let data = '';
let promise = '';
function requestData() {
  if (data) return data;
  if (promise) throw promise;
  promise = new Promise((resolve => {
    setTimeout(()=>{
      data = 'Data resolved'
      resolve()
    },2000)
  }))
  throw promise
}

function SuspenseComp () {
  const data = requestData();
  return <p>{data}</p>
}

export default () => {
  return (
    <Suspense fallback="loading data">
      <SuspenseComp />
    </Suspense>
  )
}
