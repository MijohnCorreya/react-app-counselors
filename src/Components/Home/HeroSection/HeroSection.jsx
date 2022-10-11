import React from 'react'
import Navbar from '../../ComponentLibrary/Navbar/Navbar'
import './HeroSection.css'
import { Button } from '../../ComponentLibrary/Button/Button'

//Component for showing the top banner and hero descriptions

const HeroSection = () => {
    return (
        <div className='hero--container'>
            <div className='hero--section--1'></div>
            <div className='hero--section--2'>
                <div className='nav'>
                    <Navbar />
                </div>
                <div className='hero--banner'>
                    <div className='item--1'></div>
                    <div className='item--2'>
                        <p className='heading'>
                            Morgen sieht die Welt<br />
                            schon wieder anders aus.
                        </p>
                        <p className='description'>
                            Wir verbinden Wissen in den Bereichen Digitalisierung, Kommunikation<br />
                            sowie Finanzen und können dank ihres Netzwerks durchschlagende<br />
                            Unternehmensstrategien für Kunden jeder Branche entwickeln.
                        </p>
                        <div className='banner--button'>
                            <Button
                                className='btns'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                onClick={() => { }}
                            >
                                SCHREIBEN SIE UNS
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

