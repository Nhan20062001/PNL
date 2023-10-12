'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import AboutUsCardComponent from '@/components/AboutUsCard/page';
import WhatWeDoCardPage from '@/components/WhatWeDoCard/page';
import IntroPage from '@/components/IntroPage/page';
import OurCustomersPage from '@/components/OurCustomersCard/page';
import OurTeamCardComponent from '@/components/OurTeamCard/page';
import TechnicalSkillsCardComponent from '@/components/TechnicalSkillsCard/page';
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
