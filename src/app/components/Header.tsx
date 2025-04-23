'use client';

import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Quick Commerce</h2>
      <div className="flex items-center space-x-4">
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          Aug 01, 2024 - Aug 03, 2024
        </Button>
        <Button variant="outline">
          <ChevronDown />
        </Button>
      </div>
    </header>
  );
}
