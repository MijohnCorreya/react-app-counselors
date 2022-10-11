import React from 'react'
import './Blog.css'
import image_1 from '../../../Assets/blog-img-1.jpg'
import image_2 from '../../../Assets/blog-img-2.jpg'
import image_3 from '../../../Assets/blog-img-3.jpg'
import image_4 from '../../../Assets/blog-img-4.jpg'
import human from '../../../Assets/author-icon-1.svg'
import calender from '../../../Assets/calendar-icon.svg'
import { Button } from '../../ComponentLibrary/Button/Button'

//Component to represent all the blogs

export const Blog = () => {
    return (
        <div className='blog'>
            <div className='blog--heading'>
                <div className='blog--heading--1'>Blog</div>
                <div className='blog--heading--2'>
                    Die wichtigsten News <br />
                    aus der digitalen Welt.
                </div>
            </div>
            <div className='blog--list--container'>
                <div className='blog--card--wrap'>
                    <div className='blog--card--1'>
                        <div className='blog--details'>
                            <div className='description'>
                                <div className='blog-title'>
                                    Digitale Kommunikation
                                </div>
                                <div className='blog-content'>
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen,<br />
                                    die mittem im Innovationsprozess stecken.
                                </div>
                            </div>
                            <div className='image'>
                                <img className='blog-1' src={image_1} alt="blog-1" />
                            </div>
                        </div>
                        <div className='blog--footer'>
                            <div className='blog--profile'>
                                <div className='author'>
                                    <div><img src={human} alt="blog-2" /></div>
                                    <div><span>Arthur Schenk</span></div>
                                </div>
                                <div className='date'>
                                    <div><img src={calender} alt="blog-3" /></div>
                                    <div><span>13.01.2020</span></div>
                                </div>

                            </div>
                            <div className='blog--button'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--rounded'
                                    buttonSize='btn--small'
                                    onClick={() => { console.log("Button Clicked") }}
                                >
                                    <i className='fa-solid fa-arrow-right' />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='blog--card--2'>
                        <div className='blog--details'>
                            <div className='description'>
                                <div className='blog-title'>
                                    Digitale Geschäftsmodelle
                                </div>
                                <div className='blog-content'>
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen,<br />
                                    die mittem im Innovationsprozess stecken.
                                </div>
                            </div>
                            <div className='image'>
                                <img className='blog-2' src={image_2} alt="blog-4" />
                            </div>
                        </div>
                        <div className='blog--footer'>
                            <div className='blog--profile'>
                                <div className='author'>
                                    <div><img src={human} alt="blog-5" /></div>
                                    <div><span>Arthur Schenk</span></div>
                                </div>
                                <div className='date'>
                                    <div><img src={calender} alt="blog-6" /></div>
                                    <div><span>13.01.2020</span></div>
                                </div>

                            </div>
                            <div className='blog--button'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--rounded'
                                    buttonSize='btn--small'
                                    onClick={() => { console.log("Button Clicked") }}
                                >
                                    <i className='fa-solid fa-arrow-right' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog--card--wrap'>
                    <div className='blog--card--1'>
                        <div className='blog--details'>
                            <div className='description'>
                                <div className='blog-title'>
                                    Sit amet ar aetrum 2.0
                                </div>
                                <div className='blog-content'>
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen,<br />
                                    die mittem im Innovationsprozess stecken.
                                </div>
                            </div>
                            <div className='image'>
                                <img className='blog-img-3' src={image_3} alt="blog-7" />
                            </div>
                        </div>
                        <div className='blog--footer'>
                            <div className='blog--profile'>
                                <div className='author'>
                                    <div><img src={human} alt="blog-8" /></div>
                                    <div><span>Arthur Schenk</span></div>
                                </div>
                                <div className='date'>
                                    <div><img src={calender} alt="blog-9" /></div>
                                    <div><span>13.01.2020</span></div>
                                </div>

                            </div>
                            <div className='blog--button'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--rounded'
                                    buttonSize='btn--small'
                                    onClick={() => { console.log("Button Clicked") }}
                                >
                                    <i className='fa-solid fa-arrow-right' />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='blog--card--2'>
                        <div className='blog--details'>
                            <div className='description'>
                                <div className='blog-title'>
                                    Lorem ipsum digital
                                </div>
                                <div className='blog-content'>
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen,<br />
                                    die mittem im Innovationsprozess stecken.
                                </div>
                            </div>
                            <div className='image'>
                                <img className='blog-4' src={image_4} alt="blog-10" />
                            </div>
                        </div>
                        <div className='blog--footer'>
                            <div className='blog--profile'>
                                <div className='author'>
                                    <div><img src={human} alt="blog-11" /></div>
                                    <div><span>Arthur Schenk</span></div>
                                </div>
                                <div className='date'>
                                    <div><img src={calender} alt="blog-12" /></div>
                                    <div><span>13.01.2020</span></div>
                                </div>

                            </div>
                            <div className='blog--button'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--rounded'
                                    buttonSize='btn--small'
                                    onClick={() => { console.log("Button Clicked") }}
                                >
                                    <i className='fa-solid fa-arrow-right' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='load--more--section'>
                <Button
                    className='btn'
                    buttonStyle='btn--outline--primary'
                    buttonSize='btn--large'
                    onClick={() => { console.log("Button Clicked") }}
                >
                    Weitere Artikel laden
                </Button>
            </div>
        </div>
    )
}