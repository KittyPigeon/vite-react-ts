import { useState, useEffect } from 'react'


function Count() {
    const [count, setCount] = useState(0)
    const [pay, setPay] = useState({
        name: '宋江'
    })

    const handlePay = () => {
        setPay((pay) => {
            console.log(pay)
            // pay.name = '海贼王';
            pay={name:'王飞'}
            return pay
        })
    }
    useEffect(() => {
        console.log('count变化', count)
    }, [])
    useEffect(() => {
        console.log('pay变化')
    }, [pay])
    useEffect(() => {
        return () => {
            console.log('组件销毁')
        }
    }, [])
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            {pay.name}
            <button onClick={() => { handlePay() }}>对象</button>
            <button onClick={() => { setCount(0) }}>count变化</button>
        </div >
    )
}

export default Count;