'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartCardProps {
  title: string;
  value: string;
  change: string;
  data: any[];
}

export function ChartCard({ title, value, change, data }: ChartCardProps) {
  const isPositive = change.startsWith('+');
  return (
    <Card>
      {/* <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold">
          {value}{' '}
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>{change}</span>
        </h3>
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" hide />
           <YAxis domain={[0, 6]} hide />
            <Tooltip />
            <Line type="monotone" dataKey="lastMonth" stroke="#D2691E" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="thisMonth" stroke="#22C55E" strokeWidth={2} />
    
          </LineChart>
        </ResponsiveContainer>
      </CardContent> */}
    </Card>
  );
}
