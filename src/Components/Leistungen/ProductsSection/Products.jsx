import React from "react";
import './Products.css'
import adjustment__icon from '../../../Assets/adjustments-icon.svg'
import search__icon from '../../../Assets/search-icon.svg'
import bulb__icon from '../../../Assets/bulb-icon.svg'
import persona__icon from '../../../Assets/persona-icon.svg'
import chart__icon from '../../../Assets/chart-area-line-icon.svg'
import message__icon from '../../../Assets/message-icon.svg'
import shopping__icon from '../../../Assets/shopping-cart-icon.svg'
import switch__icon from '../../../Assets/switch-icon.svg'
import vertical__icon from '../../../Assets/switch-vertical-icon.svg'
import sitemap__icon from '../../../Assets/sitemap-icon.svg'
import trending__icon from '../../../Assets/trending-up-icon.svg'
import atom__icon from '../../../Assets/atom-icon.svg'


export const Products = () => {
    return (
        <div className="products--container">
            <div className="product--1">
                <div className="product--heading--section">
                    <div className="products--headings">
                        <div className="product--count">1</div>
                        <div className="product--heading--wrap">
                            <div className="heading--1">
                                Die Produktentwicklung
                            </div>
                            <div className="heading--2">
                                Wie Sie Ihren Kunden<br />
                                mit besseren Produkten<br />
                                begeistern.
                            </div>
                        </div>
                    </div>
                    <div className="products--description">
                        Statt das Produkt stellen wir Ihren Kunden in den Mittelpunkt. Mit „Customer Centricity“<br />
                        erarbeiten wir ein Konzept, damit Sie Ihre Ziele schneller erreichen – maßgeschneidert <br />
                        nach den Erwartungen, Bedürfnisse und Wünschen des Kunden. Lernen Sie Ihren Kunden <br />
                        besser kennen, damit Sie Produkte und Services so attraktiv wie möglich gestalten!<br />
                        So verbessern Sie das Kundenerlebnis und sichern sich größere Marktanteile.
                    </div>
                </div>

                <div className="product--grid">
                    <div className="grid--heading--main">
                        Wie wir helfen können
                    </div>
                    <div className="product--grid--wrap">
                        <div className="grid--section--1">
                        <div className="product--wrap--1">
                                <div className="product--1">
                                    <img className='adjustment--icon' src={adjustment__icon} alt="adjustment--icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Entwicklung <br/>strategisch begleiten
                                    </div>
                                    <div className="grid--decription">
                                    Wie schaffen Sie Produkte, nach denen Kunden lechzen? Wir sorgen für <br/>
                                    frische Ideen, neue Perspektiven und bessere Produkte.
                                    </div>
                                </div>
                            </div>
                            <div className="product--wrap--2">
                                <div className="product--1">
                                    <img className='search--icon' src={search__icon} alt="search--icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Größere Befragungen <br/>managen
                                    </div>
                                    <div className="grid--decription">
                                    Wie gewinnen Sie mehr wertvolle Informationen? Wir planen, steuern und <br/>
                                    kontrollieren, damit Sie zuverlässige Ergebnisse erhalten.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid--section--1">
                            <div className="product--wrap--1">
                                <div className="product--1">
                                    <img className='persona__icon' src={persona__icon} alt="persona__icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Buyer Personas <br/>entwickeln
                                    </div>
                                    <div className="grid--decription">
                                    Wie gewinnen Sie mehr wertvolle Informationen? Wir planen, steuern und <br/>
                                    kontrollieren, damit Sie zuverlässige Ergebnisse erhalten.
                                    </div>
                                </div>
                            </div>
                            <div className="product--wrap--2">
                                <div className="product--1">
                                    <img className='bulb__icon' src={bulb__icon} alt="bulb__icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                        Kundenwünsche<br />
                                        definieren
                                    </div>
                                    <div className="grid--decription">
                                        Was treibt Ihre Kunden an? Wir finden Wünsche, Träume und Probleme <br />
                                        Ihrer Zielgruppe, damit Sie passende Lösungen bieten.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product--1">
                <div className="product--heading--section">
                    <div className="products--headings">
                        <div className="product--count">2</div>
                        <div className="product--heading--wrap">
                            <div className="heading--1">
                            Die digitale Kommunikation
                            </div>
                            <div className="heading--2">
                            Wie Sie Ihre Zielgruppe<br/>
                             bestmöglich ansprechen.
                            </div>
                        </div>
                    </div>
                    <div className="products--description">
                    Sie brauchen nicht nur ein klares Branding. Eine starke Webseite mit konkretem <br/>
                    Nutzenversprechen und die richtigen Inhalte zur Erläuterung Ihres Angebots sind <br/>
                    mindestens genauso wichtig. Nach unserer Beratung zieht Ihre Webseite die richtigen <br/>
                    Zielgruppen an und verwandelt diese konsequent in zahlende Kunden. Machen Sie Ihre <br/>
                    Webpräsenz zu Ihrem wichtigsten Vertriebsmitarbeiter.
                    </div>
                </div>

                <div className="product--grid">
                    <div className="grid--heading--main">
                        Wie wir helfen können
                    </div>
                    <div className="product--grid--wrap">
                        <div className="grid--section--1">
                        <div className="product--wrap--1">
                                <div className="product--1">
                                    <img className='adjustment--icon' src={chart__icon} alt="adjustment--icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Webentwicklung <br/>managen
                                    </div>
                                    <div className="grid--decription">
                                    Wie erzielt Ihre Webseite bessere Ergebnisse? Wir sorgen für eine <br/>
                                    attraktive Corporate Webseite und höhere Konversionsraten.
                                    </div>
                                </div>
                            </div>
                            <div className="product--wrap--2">
                                <div className="product--1">
                                    <img className='search--icon' src={message__icon} alt="search--icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Kommunikationsstrategie <br/> entwickeln
                                    </div>
                                    <div className="grid--decription">
                                    Wie erreichen Sie Ihre Kunden? Wir definieren die richtigen Kanäle, die <br/>
                                    passende Ansprache und ein verführerisches Nutzerversprechen.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid--section--1">
                            <div className="product--wrap--1">
                                <div className="product--1">
                                    <img className='persona__icon' src={shopping__icon} alt="persona__icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Online-Marketing-<br/>Maßnahmen umsetzen
                                    </div>
                                    <div className="grid--decription">
                                    Wie erreichen Sie Ihre Ziele schnell und wirtschaftlich? Wir <br/>unterstützen
                                     Sie beim Umsetzen sämtlicher Marketingstrategien.
                                    </div>
                                </div>
                            </div>
                            <div className="product--wrap--2">
                                <div className="product--1">
                                    <img className='bulb__icon' src={switch__icon} alt="bulb__icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Interims<br/> CEO
                                    </div>
                                    <div className="grid--decription">
                                    Sie brauchen Hilfe auf allen Ebenen? Wir springen ein und sorgen für neue <br/>
                                    Denkweisen und Strukturen für langanhaltenden Erfolg.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="product--1">
                <div className="product--heading--section">
                    <div className="products--headings">
                        <div className="product--count">3</div>
                        <div className="product--heading--wrap">
                            <div className="heading--1">
                            Prozesse digitalisieren
                            </div>
                            <div className="heading--2">
                            Wie Sie sich für die<br/>
                             Zukunft rüsten und <br/>
                             Prozesse optimieren.
                            </div>
                        </div>
                    </div>
                    <div className="products--description">
                    Ob B2C oder B2B: Kunden erwarten schnelle Rückmeldungen und eine reibungslose <br/>
                    Angebotserstellung, Angebotsauslieferung und Nacharbeit. Wer seine Prozesse nicht auf <br/>
                    die digitale Welt umstellt, wird früher oder später scheitern. Wo stehen Sie und wo <br/>
                    möchten Sie hin? Nutzen Sie Technik und Strategien von morgen und erzielen Sie bereits <br/>
                    heute Wettbewerbsvorteile!
                    </div>
                </div>

                <div className="product--grid">
                    <div className="grid--heading--main">
                        Wie wir helfen können
                    </div>
                    <div className="product--grid--wrap">
                        <div className="grid--section--1">
                        <div className="product--wrap--1">
                                <div className="product--1">
                                    <img className='adjustment--icon' src={vertical__icon} alt="adjustment--icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Changemanagement <br/>umsetzen
                                    </div>
                                    <div className="grid--decription">
                                    Wie realisieren Sie Änderungen möglichst effizient? Wir stehen <br/>Ihnen zur 
                                    Seite, damit Sie sich auf das 
                                    Wesentliche konzentrieren.
                                    </div>
                                </div>
                            </div>
                            <div className="product--wrap--2">
                                <div className="product--1">
                                    <img className='search--icon' src={sitemap__icon} alt="search--icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Digitalisierung und <br/>Automatisierung 
                                    </div>
                                    <div className="grid--decription">
                                    Wie optimieren Sie Ihr Geschäftsmodell? Wir vereinfachen Prozesse, <br/>
                                    automatisieren und beschleunigen Unternehmen jeder Branche.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid--section--1">
                            <div className="product--wrap--1">
                                <div className="product--1">
                                    <img className='persona__icon' src={trending__icon} alt="persona__icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Costumer Lifetime <br/>Value nutzen
                                    </div>
                                    <div className="grid--decription">
                                    Wie erzielen Sie mehr Gewinn bei geringeren Marketingausgaben? <br/>
                                    Wir sorgen dafür, dass Sie ungenutztes Potenzial ausschöpfen.
                                    </div>
                                </div>
                            </div>
                            <div className="product--wrap--2">
                                <div className="product--1">
                                    <img className='bulb__icon' src={atom__icon} alt="bulb__icon" />
                                </div>
                                <div className="product--2">
                                    <div className="grid--heading">
                                    Deep Learning und <br/>KI einbetten
                                    </div>
                                    <div className="grid--decription">
                                    Wie können Sie smarte Technologie gewinnbringend nutzen? Wir helfen <br/>
                                    Ihnen, damit Sie sich für die Zukunft bestens aufstellen
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}