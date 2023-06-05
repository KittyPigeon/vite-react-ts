import './index.less'
import React, { useRef, useState, createRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className='container'>
                首页
        </div>
    )
}

export default Home;