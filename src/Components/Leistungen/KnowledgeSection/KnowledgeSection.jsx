import React from "react";
import './KnowledgeSection.css'
import image_1 from '../../../Assets/wissen-img-1.jpg'
import image_2 from '../../../Assets/wissen-img-2.jpg'

export const KnowledgeSection = () => {
    return (
        <div className="knowledge--container">
            <div className="knowledge--heading--section">
                <div className="heading--1">Wissen</div>
                <div className="heading--2">
                    Was sie von Anfang an<br />
                    wissen müssen.
                </div>
            </div>
            <div className="knowledge--description--details">
                <div className="knowledge--description">
                    <div className="decription--image">
                        <img className='wissen' src={image_1} alt="wissen" />
                    </div>
                    <div className="knowledge--details">
                        <div className="knowledge--heading">
                            Wer stehenbleibt, verliert.
                        </div>
                        <div className="knowledge--paragraph">
                            Digitaler Vertrieb bedeutet nicht, dass Sie alle klassischen<br />
                            Marketingkanäle ersetzen. Sie erweitern Ihr Repertoire, lassen digitale<br />
                            und analoge Maßnahmen verschmelzen und streuen so Ihre<br />
                            Gewinnchancen! Ob Produkt- oder Serviceanbieter: Wer in Zukunft<br />
                            wettbewerbsfähig bleiben möchte, braucht einen leistungsstarken<br />
                            Online-Vertrieb. Ihre Kunden erwarten es, Ihre Mitbewerber tun es. <br />Und Sie?
                        </div>
                    </div>
                </div>
                <div className="knowledge--description--2">

                    <div className="knowledge--description">
                        <div className="decription--image">
                            <img className='wissen' src={image_2} alt="wissen" />
                        </div>
                        <div className="knowledge--details--2">
                            <div className="knowledge--heading">
                                Marketing muss Ergebnisse bringen.
                            </div>
                            <div className="knowledge--paragraph">
                                Im Gegensatz zu anderen Online-Agenturen, Beratern und <br />
                                selbsternannten Experten messen wir Erfolg nicht an Klicks und Traffic.<br />
                                Es geht um Ihren Return on Invest! Deshalb identifizieren wir gemeinsam <br />
                                Ihre wichtigsten Ziele, entwerfen klare Kennzahlen – und bringen Ihr <br />
                                Unternehmen mit datengetriebenem Performance Marketing auf die <br />
                                nächste Stufe. Wir packen an; Sie optimieren Ihre Marketingausgaben <br />
                                und erhalten nachhaltige Ergebnisse, die messbar sind!
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}