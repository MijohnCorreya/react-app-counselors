import React from "react";
import './Idea.css'
import image_1 from '../../../Assets/intro-img-1.jpg'
import image_2 from '../../../Assets/intro-img-2.jpg'
import image_3 from '../../../Assets/intro-img-3.jpg'

export const Idea = () => {
    return (
        <div className="idea--container">
            <div className="idea--descriptions">
                <p className="heading--1">Leistungen</p>
                <p className="heading--2">Ideen muss man haben.</p>
                <p className="details">
                    Ein funktionierendes Geschäftsmodell und ein überzeugendes
                    Produkt oder Service aber auch! Und KundInnen muss man dann
                    ja auch noch erreichen.<br /><br />

                    Der Weg von der ersten Idee bis zu am Markt etablierten Innovation ist oftmals
                    ziemlich holprig. Dafür aber immer auch aufregend und lohnenswert!<br /><br />

                    Deswegen: Wir begleiten Sie über Ihren gesamten Innovationsprozess hinweg.
                    Oder auch nur an Ort und Stelle – wenn Sie uns brauchen aber trotzdem mit Gesamtüberblick.<br /><br />
                </p>
                <div className="services--details">
                    <div className="contact--details">
                        <div className="heading">Rufen Sie uns an</div>
                        <div>+49 (0) 7152 31 99 840</div>
                    </div>
                    <div className="contact--details">
                        <div className="heading">Schreiben Sie uns</div>
                        <div>info@sps-counselors.com</div>
                    </div>
                </div>
            </div>
            <div className="images--wrap">
                <div className="image--wrap--1">
                    <div className="image--item--1">
                        <img className='description__image' src={image_1} alt="computer" />
                    </div>
                    <div className="image--item--2">
                        <img className='description__image' src={image_2} alt="computer" />
                    </div>
                </div>
                <div className="image--wrap--2">
                    <img className='description__image' src={image_3} alt="computer" />
                </div>
            </div>
        </div>
    )
}