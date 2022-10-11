import React from "react";
import './StrategySection.css'
import { Button } from '../../ComponentLibrary/Button/Button'
import image_1 from '../../../Assets/digitale-geschaeftsmodelle.jpg'
import image_2 from '../../../Assets/digitale-kommunikation.jpg'
import image_3 from '../../../Assets/digital-business.jpg'
import image_4 from '../../../Assets/digitale-produkte-services.jpg'

export const StrategySection = () => {
    return (
        <div className="strategy--container">
            <div className="heading">
                <p className="heading--1">Leistungen</p>
                <p className="heading--2">So kommen wir<br /> gemeinsam voran.</p>
            </div>
            <div className="strategy--wrap">
                <div className="strategy--wrap--1">
                    <div className="strategy--1">
                        <div className="strategy--card">
                            <div className="strategy--item--1">
                                <div className="strategy--heading">
                                    <div className="strategy--heading--1">
                                        Digitale <br/>
                                        Geschäftsmodelle
                                    </div>
                                    <div className="strategy--heading--2">
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
                                <div className="strategy--decription">
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen, die<br />
                                    mittem im Innovationsprozess stecken.
                                </div>
                                <div className="strategy--list">
                                    <ul className='list'>
                                        <li><i className="fa-solid fa-minus"></i>Ideation</li>
                                        <li><i className="fa-solid fa-minus"></i>Customer Journes Design</li>
                                        <li><i className="fa-solid fa-minus"></i>Value Proposition Design</li>
                                        <li><i className="fa-solid fa-minus"></i>Trendforschung</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="strategy--item--2">
                                <img className='strategy--image--1' src={image_1} alt="code" />
                            </div>
                        </div>
                    </div>
                    <div className="strategy--2">
                        <div className="strategy--card">
                            <div className="strategy--item--1">
                                <div className="strategy--heading">
                                    <div className="strategy--heading--1">
                                        Digitale <br/>
                                        Kommunikation
                                    </div>
                                    <div className="strategy--heading--2">
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
                                <div className="strategy--decription">
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen, die<br />
                                    mittem im Innovationsprozess stecken.
                                </div>
                                <div className="strategy--list">
                                    <ul className='list'>
                                        <li><i className="fa-solid fa-minus"></i>Digital Marketing</li>
                                        <li><i className="fa-solid fa-minus"></i>Storytelling & Content Marketing</li>
                                        <li><i className="fa-solid fa-minus"></i>Brand Strategies</li>
                                        <li><i className="fa-solid fa-minus"></i>Interne Kommunikation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="strategy--item--2">
                                <img className='strategy--image--1' src={image_2} alt="code" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="strategy--wrap--2">
             
                    <div className="strategy--1">
                        <div className="strategy--card">
                            <div className="strategy--item--1">
                                <div className="strategy--heading">
                                    <div className="strategy--heading--1">
                                        Digitale <br/>
                                        Geschäftsmodelle
                                    </div>
                                    <div className="strategy--heading--2">
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
                                <div className="strategy--decription">
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen, die<br />
                                    mittem im Innovationsprozess stecken.
                                </div>
                                <div className="strategy--list">
                                    <ul className='list'>
                                        <li><i className="fa-solid fa-minus"></i>Business Development</li>
                                        <li><i className="fa-solid fa-minus"></i>Transformation</li>
                                        <li><i className="fa-solid fa-minus"></i>Agile Prozesse</li>
                                        <li><i className="fa-solid fa-minus"></i>Innovationsmanagement</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="strategy--item--2">
                                <img className='strategy--image--1' src={image_3} alt="code" />
                            </div>
                        </div>
                    </div>
                    <div className="strategy--2">
                        <div className="strategy--card">
                            <div className="strategy--item--1">
                                <div className="strategy--heading">
                                    <div className="strategy--heading--1">
                                        Digitale <br/>
                                        Produkte/Services
                                    </div>
                                    <div className="strategy--heading--2">
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
                                <div className="strategy--decription">
                                    Das Jahr 2020. Jetzt mal im Ernst: Kommunikation kann<br />
                                    schnell zur Hürde werden. Vor allem für Unternehmen, die<br />
                                    mittem im Innovationsprozess stecken.
                                </div>
                                <div className="strategy--list">
                                    <ul className='list'>
                                        <li><i className="fa-solid fa-minus"></i>Design Thinking</li>
                                        <li><i className="fa-solid fa-minus"></i>UX Design</li>
                                        <li><i className="fa-solid fa-minus"></i>MVP Design</li>
                                        <li><i className="fa-solid fa-minus"></i>Launch Projekte</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="strategy--item--2">
                                <img className='strategy--image--1' src={image_4} alt="code" />
                            </div>
                        </div>
                    </div>
   
                </div>
            </div>
        </div>
    )
}