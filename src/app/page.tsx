'use client';

import React from 'react';
import { MainClient } from '@/layouts/MainClient';
import AboutUsCardComponent from '@/components/AboutUsCard/page';
import WhatWeDoCard from '@/components/WhatWeDoCard/page';
import OurCustomers from '@/components/OurCustomers/page';
import Intro from '@/components/Intro/page';

export default function Home() {
  return (
    <MainClient>
      
      <Intro />

      <AboutUsCardComponent/>

      <WhatWeDoCard />

      <OurCustomers />
      
    </MainClient>
  );
}
