'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export function TabsSwitcher({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const [tab, setTab] = useState('blinkit');

  return (
    <Tabs defaultValue="blinkit" onValueChange={(val) => {
      setTab(val);
      onTabChange(val);
    }}>
      <TabsList>
        <TabsTrigger value="blinkit">Blinkit</TabsTrigger>
        <TabsTrigger value="zepto">Zepto</TabsTrigger>
        <TabsTrigger value="instamart">Instamart</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
