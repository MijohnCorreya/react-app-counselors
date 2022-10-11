import React from "react";
import './Startup.css'
import { Button } from '../../ComponentLibrary/Button/Button'

export const Startup = () => {
    return (
        <div className="startup--container">
            <div className="startup--wrap--1">
                <div className="description--container-1">1</div>
                <div className="description--container-2">
                    <div className="startup--title-1">
                        Start-Up Pitching Sessions
                    </div>
                    <div className="startup--title-2">
                        Start-ups, Investoren und<br />
                        Innovationsbegeisterte aufgepasst.
                    </div>
                    <div className="startup--description--wrap">
                        <div className="startup--paragraph--wrap">
                            <div className="paragraph--section">
                                <div className="startup--description">
                                    Einmal im Quartal veranstalten wir in unserem HQ in Stuttgart die Start-up Pitching Sessions – zum Präsentieren von Ideen, zum <br />
                                    Austauschen, zum gemeinsamen Innovieren. Wir geben Start-ups aber nicht nur eine Bühne, mit unseren Leistungen für Start-ups <br />
                                    unterstützen wir sie in allen Fragen, die während der Gründungsphase so anfallen.
                                </div>
                                <div className="startup--buttons">
                                    <div className="startup--button--primary">
                                        <Button
                                            className='btn'
                                            buttonStyle='btn--outline'
                                            buttonSize='btn--large'
                                            onClick={() => { console.log("Button Clicked") }}
                                        >
                                            Leistungen für Start-Ups
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="termin--section">
                            <div className="description--container-3">
                    <div className="termin--wrap">
                        <div className="termin--heading">
                        Nächster Termin
                        </div>
                        <div className="termin--description">
                        12.06.2020
                        </div>
                        <div className="termin--button">
                        <div className='banner--button'>
                            <Button
                                className='btns'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                onClick={() => { }}
                            >
                                JETZT ANMELDEN
                            </Button>
                        </div>
                        </div>
                    </div>
                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* */}
            </div>
            <div className="startup--wrap--2"></div>
        </div>
    )
}