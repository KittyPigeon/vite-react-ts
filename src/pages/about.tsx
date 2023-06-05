import React, { useRef, useState, createRef, forwardRef, useImperativeHandle } from 'react'
function Child(props: any) {
    const func = () => {
        console.log('ceshi ')
    }
    useImperativeHandle(props.onRef, () => {
        return {
            func: func
        }
    })
    return (<div>子路由</div>)
}
const Child2 = forwardRef((props, ref) => {
    const add = () => {
        console.log('tianjia')
    }
    useImperativeHandle(ref, () => {
        return {
            add: add
        }
    })
    return (<div className='子元素'></div>)
})
function Father() {
    const c: any = createRef()
    const onSet = () => {
        c.current.add();
    }
    return <div>
        <button onClick={() => { onSet() }}>点击</button>
        <Child2 ref={c}></Child2>
    </div>
}
function About() {
    const inputRef = useRef<HTMLInputElement>(null);
    const childRef: any = createRef();
    const onHandle = () => {
        console.log('测试', childRef)
        childRef.current.func();
    }
    return (<div className="about">
        <button onClick={() => { onHandle() }}>子组件方法</button>
        <button onClick={() => { inputRef.current?.focus() }}>元素获取焦点</button>
        <input ref={inputRef}></input>
        <Child onRef={childRef}></Child>
        <Father></Father>
    </div>)
}

export default About