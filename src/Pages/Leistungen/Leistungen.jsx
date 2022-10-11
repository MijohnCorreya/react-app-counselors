import React from "react";
import { Acquisition } from "../../Components/Leistungen/Acquisition/Acquisition";
import { KnowledgeSection } from "../../Components/Leistungen/KnowledgeSection/KnowledgeSection";
import { LeistungenHeroSection } from "../../Components/Leistungen/LeistungenHeroSection/LeistungenHeroSection";
import { OnlineMarket } from "../../Components/Leistungen/OnlineMarketBanner/OnlineMarket";
import { Products } from "../../Components/Leistungen/ProductsSection/Products";
import './Leistungen.css'

const Leistungen = () =>{
    return(
        <div>
        <LeistungenHeroSection/>
        <Acquisition/>
        <KnowledgeSection/>
        <Products/>
        <OnlineMarket/>
    </div>
    )
}

export default Leistungen