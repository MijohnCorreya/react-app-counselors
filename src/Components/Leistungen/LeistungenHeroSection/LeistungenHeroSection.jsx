import React from "react"
import Navbar from '../../ComponentLibrary/Navbar/Navbar'
import './LeistungenHeroSection.css'
import { Button } from '../../ComponentLibrary/Button/Button'

export const LeistungenHeroSection = () => {
    return (
        <div>
            <div className='Leistungen--hero--container'>
                <div className='Leistungen--hero--section--1'></div>
                <div className='Leistungen--hero--section--2'>
                    <div className='nav'>
                        <Navbar />
                    </div>
                    <div className='Leistungen--hero--banner'>
                        <div className='Leistungen--item--1'></div>
                        <div className='Leistungen--item--2'>
                            <p className='Leistungen--heading'>
                                Wechseln Sie auf<br />
                                die Überholspur.
                            </p>
                            <p className='Leistungen--description'>
                                mit 1:1 Beratung für den digitalen Vertrieb.
                            </p>
                            <div className='Leistungen--banner--button'>
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
        </div>
    )
}