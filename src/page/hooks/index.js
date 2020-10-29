import React,{ useState, useEffect } from 'react'

export default () => {
  // 利用数组解构的方式接收状态名及其设置方法 即 当执行setName方法时就会改变name的值
  const [name, setName] = useState('somebody')

  useEffect(() => { // 生命周期方法
    console.log("component update")
    return () => {
      console.log("unbind")
    }
  },[]) //注意这个[]，表示需要监听的变化内容，为空则都不监听，只在组件渲染的时候执行一次

  return (
    <>
      <h4>useState: 利用数组解构的方式接收状态名及其设置方法 即 当执行setName方法时就会改变name的值</h4>
      <h4>useEffect: 在组件mount时执行，但也会在组件更新时执行。</h4>
      <p>my name is: {name}</p>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
    </>
  )
}
