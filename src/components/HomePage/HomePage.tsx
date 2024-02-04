'use client';

import React from 'react';
import AboutUsCardComponent from './AboutUsCard/AboutUsCard';
import ContactCardComponent from './ContactCard/ContactCard';
import IntroPage from './IntroPage/IntroCard';
import OurCustomersPage from './OurCustomersCard/OurCustomerCard';
import OurTeamCardComponent from './OurTeamCard/OurTeamCard';
import TechnicalSkillsCardComponent from './TechnicalSkillsCard/TechnicalSkillsCard';
import WhatWeDoCardPage from './WhatWeDoCard/WhatWeDoCard';

const HomePage = () => (
  <div>
    <IntroPage />
    <AboutUsCardComponent />
    <WhatWeDoCardPage />
    <OurCustomersPage />
    <OurTeamCardComponent />
    <TechnicalSkillsCardComponent />
    <ContactCardComponent />
  </div>
);
export default HomePage;
