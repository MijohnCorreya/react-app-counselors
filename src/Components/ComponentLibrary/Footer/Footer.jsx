import React from "react";
import './Footer.css'
import footer_logo from '../../../Assets/counselors-logo.svg'
import map__pin from '../../../Assets/map-pin-icon.svg'
import phone_icon from '../../../Assets/phone-icon.svg'
import email_icon from '../../../Assets/mail-icon.svg'
import { Button } from '../../ComponentLibrary/Button/Button'

//Footer component

export const Footer = () => {
    return (
        <div className="footer">
            <div className="contacts--wrap">
                <div className="footer--logo">
                    <img src={footer_logo} alt="footer--logo" />
                </div>
                <div className="footer--contact--details">
                    <div className="footer--address--wrap">
                        <div className="map-pin--icon">
                            <img src={map__pin} alt="map__pin" />
                        </div>
                        <div>
                            Hauptstraße 40<br />
                            71229 Leonberg
                        </div>
                    </div>
                    <div className="footer--contact--info">
                        <div className="phone--details">
                            <div className="phone--icon">
                                <img src={phone_icon} alt="phone_icon" />
                            </div>
                            <div className="phone--number">
                                +49 (0) 7152 31 99 840
                            </div>
                        </div>
                        <div className="email--details">
                            <div className="email--icon">
                                <img src={email_icon} alt="email_icon" />
                            </div>
                            <div className="email--id">
                                info@sps-counselors.com</div>
                        </div>

                    </div>
                </div>
                <div className="copy--rights">
                    © 2020 SPS Counselors GmbH. Alle Rechte vorbehalten.
                </div>
            </div>
            <div className="leads--wrap">
                <div className="leads--description">
                    Erfahren Sie als erster die neusten Entwicklungen aus der Welt des<br />
                    Unternehmertums mit unserem Newsletter! Melden Sie sich jetzt an!
                </div>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Ihre E-Mail Adresse'
                        />
                        <Button
                            className='btns'
                            buttonStyle='btn--rounded--small'
                            buttonSize='btn--x-small'
                            onClick={() => { console.log("Button Clicked") }}
                        >
                            <i className='fa-solid fa-arrow-right' />
                        </Button>
                    </form>
                </div>
                <div className="footer--links">
                    <div className="link--item link--1">AGB</div>
                    <div className="link--item link--2">Datenschutzbestimmungen</div>
                    <div className="link--3">Impressum</div>
                </div>
            </div>
        </div>
    )
}