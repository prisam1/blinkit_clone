'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

// Dynamically import the actual chart component WITHOUT SSR
const SalesLineChart = dynamic(() => import('./SalesLineChartInternal') as any, {
  ssr: false,
}) as FC;

export default SalesLineChart;
