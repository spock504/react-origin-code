# react-origin-code
源码阅读中的示例

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 1. Api 

### lazy
  文件位置：`page/suspense` 
  >  打开控制台，lazy 的文件会在页面显示的时候才进行加载。并且`suspense`包裹的组件，会先显示fallback的内容，直到lazy的文件都加载完毕。

###  hook
文件位置: `page/hooks`
 - useState:  `const [name, setName] = useState('somebody')`  
> 当前状态和一个更新它的函数   ( hook每次Render的内容 形成一个快照并保留下来)
    `利用 useRef 可以规避 capture value 特性`
 - useEffect：`  useEffect(() => {   
   console.log("component update")
    return () => {
      console.log("unbind")
    }
  },[])`
> 作用是依赖变化的时候，执行函数（第一个参数），其中第二个参数为依赖。 传递一个空数组作为useEffect的第二个参数：这样就能避免在组件更新执行useEffect，只会在组件mount时执行
### memo
一个类似 *PureComponent* 功能的方法,具体实现查看react-dom。

## 2. 更新

### 更新方式
render , setState, forceUpdate 


  
  
