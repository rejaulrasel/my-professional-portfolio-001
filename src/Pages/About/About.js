import React from 'react';
import './About.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <Header></Header>
            <section>
            <div className="container text-white mx-auto my-5 py-5 ">
                <div className="row gx-5">
                    <div className="col-md-6 col-12  ">
                        <h3>I'm Rejaul Hasan</h3>
                        <p>I'm a passionate web designer and developer.I believe in hard work.I am doing my work honestly.I like to learn different things and want to build a foundation of my knowledge</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="row-col-12">
                            <h3><span className='heading-border'>Front-End</span></h3>
                            <div className='skills'>
                                <p className="skill">HTML</p>
                                <p className="skill">CSS</p>
                                <p className="skill">Bootstrap</p>
                                <p className="skill">Tailwind CSS</p>
                                <p className="skill">Material UI</p>
                                <p className="skill">JavaScript</p>
                                <p className="skill">ES6</p>
                            </div>
                        </div>
                        <div className="row-col-12">
                        <h3><span className='heading-border'>Back-end</span></h3>
                            <div className='skills'>
                                <p className="skill">Node.js</p>
                                <p className="skill">Express.js</p>
                                <p className="skill">MongoDB</p>
                                <p className="skill">Firebase</p>
                        </div>
                        <div className="row-col-12">
                            <h3>Tools</h3>
                            <div className='skills'>
                                <p className="skill">Firebase</p>
                                <p className="skill">VS Code</p>
                                <p className="skill">Chrome Dev Tool</p>
                                <p className="skill">Heroku</p>
                                <p className="skill">Netlify</p>
                        </div>
                        <div className="row-col-12">
                            <h3>Version Control</h3>
                            <div className="skills">
                                <p className="skill">Github</p>
                            </div>
                        </div>
                        <div className="row-col-12"></div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
        <Footer></Footer>
        </div>
    );
};

export default About;