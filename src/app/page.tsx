'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import AboutUsCardComponent from '@/components/AboutUsCard/AboutUsCard';
import WhatWeDoCardPage from '@/components/WhatWeDoCard/WhatWeDoCard';
import IntroPage from '@/components/IntroPage/IntroCard';
import OurCustomersPage from '@/components/OurCustomersCard/OurCustomerCard';
import OurTeamCardComponent from '@/components/OurTeamCard/OurTeamCard';
import TechnicalSkillsCardComponent from '@/components/TechnicalSkillsCard/TechnicalSkillsCard';
import ContactCardComponent from '@/components/ContactCard/page';

export default function Home() {
  return (
    <MainClient>
      
      <IntroPage />

      <AboutUsCardComponent/>

      <WhatWeDoCardPage />

      <OurCustomersPage />

      <OurTeamCardComponent />

      <TechnicalSkillsCardComponent />

      <ContactCardComponent />
      
    </MainClient>
  );
}
