import React from 'react'
import './Workshops.css'
import image from '../../../Assets/workshops-img.jpg'
import { Button } from '../../ComponentLibrary/Button/Button'

export const Workshops = () => {
    return (
        <div className='workshop--section'>
            <div className='workshop--wrap--1'>
                <div className='workshop--heading--1'>
                    Workshops
                </div>
                <div className='workshop--heading--2'>
                    Wissen <br />schadet<br /> nicht.
                </div>
                <div className='workshop--image'>
                    <img className='workshop--image' src={image} alt="workshop" />
                </div>
            </div>
            <div className='workshop--wrap--2'>
                <div className='workshop--description'>
                    Digitales Kommunikations-Know-How für die Praxis noch weniger.<br />
                    In unseren Workshops vermitteln wir hands-on, wie 2020 Kommunikation im Internet funktioniert.
                </div>
                <div className='workshop--list'>
                    <div className='workshop--list--detais--1'>
                        <div className='workshop--location'>
                            <div className='workshop--date'>10.05.2020</div>
                            <div className='workshop--place'>Stuttgart</div>
                        </div>
                        <div className='workshop--title'>Digital Marketing</div>
                    </div>
                    <div className='workshop--list--detais--2'>
                        <div className='workshop--price'>790,– €</div>
                        <div>
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
                <div className='workshop--list'>
                    <div className='workshop--list--detais--1'>
                        <div className='workshop--location'>
                            <div className='workshop--date'>18.05.2020</div>
                            <div className='workshop--place'>Stuttgart</div>
                        </div>
                        <div className='workshop--title'>Storytelling & Content Marketing</div>
                    </div>
                    <div className='workshop--list--detais--2'>
                        <div className='workshop--price'>790,– €</div>
                        <div>
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
                <div className='workshop--list'>
                    <div className='workshop--list--detais--1'>
                        <div className='workshop--location'>
                            <div className='workshop--date'>03.06.2020</div>
                            <div className='workshop--place'>Stuttgart</div>
                        </div>
                        <div className='workshop--title'>Brand Strategy</div>
                    </div>
                    <div className='workshop--list--detais--2'>
                        <div className='workshop--price'>790,– €</div>
                        <div>
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
                <div className='workshop--list'>
                    <div className='workshop--list--detais--1'>
                        <div className='workshop--location'>
                            <div className='workshop--date'>24.06.2020</div>
                            <div className='workshop--place'>Stuttgart</div>
                        </div>
                        <div className='workshop--title'>Business Development</div>
                    </div>
                    <div className='workshop--list--detais--2'>
                        <div className='workshop--price'>790,– €</div>
                        <div>
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
    )
}