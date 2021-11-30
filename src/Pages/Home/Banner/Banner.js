import React from 'react';
import './Banner.css'
import img from '../../../images/693-removebg-preview.png'
import Type from '../Type';
const Banner = () => {
    return (

        <div className="row g-0 text-light">
            <div className=" col-md-7 col-12">
                <div className='p-5 mt-5 w-75'>
                    <p>Hello, I'm</p>
                    <h1 className='fw-bold'>REJAUL HASAN</h1>
                    <br />
                    <h3>
                    <Type></Type>
                    </h3>
                    <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.
                    </p>
                    <button className='btn-danger py-2 px-3 rounded-3 me-4'>About me</button>
                    <button style={{'backgroundColor' : '#0a192f', 'color' : 'white', 'border': '1px solid green'}}  className='btn-regular py-2 px-3'>Get In Touch</button>
                </div>
            </div>
            <div className="col-md-5 col-12 ">
        <img src={img} className='img-fluid' alt="" />
            </div>

        </div>
    );
};

export default Banner;