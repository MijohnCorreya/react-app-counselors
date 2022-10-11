import React from 'react'
import './Home.css'
import HeroSection from '../../Components/Home/HeroSection/HeroSection'
import { Idea } from '../../Components/Home/IdeaSection/Idea'
import { StrategySection } from '../../Components/Home/StrategySection/StrategySection'
import { Startup } from '../../Components/Home/Startup/Startup'
import { Workshops } from '../../Components/Home/Workshops/Workshops'
import { Blog } from '../../Components/Home/Blog/Blog'
import { Footer } from '../../Components/ComponentLibrary/Footer/Footer'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Idea/>
            <StrategySection/>
            <Startup/>
            <Workshops/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default Home