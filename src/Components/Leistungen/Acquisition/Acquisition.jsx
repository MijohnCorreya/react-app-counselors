import React from 'react'
import './Acquisition.css'
import image from '../../../Assets/intro-leistungen.jpg'
import profile from '../../../Assets/elke-musterfrau.jpg'
import { Button } from '../../ComponentLibrary/Button/Button'

export const Acquisition = () => {
    return (
        <div className='acquisition--container'>
            <div className='section--1'>
                <div className='acquisition--heading'>
                    Wie viel Geld lassen Sie<br /> auf dem Tisch liegen?
                </div>
                <div className='acquisition--image'>
                    <img className='image--1' src={image} alt="computer" />
                </div>
                <div className='acquisition--description'>
                    <div className='description--item--1'>
                        Kundengewinnung durch digitalen Vertrieb
                    </div>
                    <div className='description--item--2'>
                        Wer digitale Möglichkeiten nicht ausschöpft, verliert Kunden täglich an die Konkurrenz – denn jede Zielgruppe<br />
                        sucht online nach Lösungen und Produkten. Ob Sie noch keinen digitalen Vertrieb haben oder mit der bisherigen<br />
                        Performance unzufrieden sind: Als Online-Marketer mit über 15 Jahren Erfahrung und nachweisbaren<br />
                        Erfolgsgeschichten sorgen wir dafür, dass Sie mehr Leads gewinnen und mehr Umsatz erzielen.
                    </div>
                    <div className='description--item--3'>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={() => { }}
                        >
                            Jetzt zur Kostenlosen Beratung
                        </Button>
                    </div>
                </div>
            </div>
            <div className='section--2'>
                <div className='quotes--wrap'>
                    <div className='quote'>
                        „Wer digitale Möglichkeiten nicht ausschöpft, verliert<br/> 
                    Kunden an die Konkurrenz – denn jede Zielgruppe sucht <br/>
                    online nach Lösungen und Produkten.“
                    </div>
                    <div className='profile'>
                        <div className='profile--image'>
                        <img className='profile' src={profile} alt="profile" />
                        </div>
                        <div className='profile--details'>
                            <div className='name'>Elke Musterfrau</div>
                            <div className='company'>Unternehmo GmbH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}