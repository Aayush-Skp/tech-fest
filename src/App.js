import React from 'react';
import './style.css';
import Header from './Header';
import AboutSection from './AboutSection';
import ObjectivesSection from './ObjectivesSection';
import PreEventsSection from './PreEventsSection';
import MegaEventsSection from './MegaEventsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import {ImageFrame} from './components/ImageFrame';
/* import { Livedata } from './components/Livedata'; */

const App = () => {
    return (
        <div>
            <Header />
            <ImageFrame/>
            <AboutSection />
            <ObjectivesSection />
            <PreEventsSection />
            <MegaEventsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
