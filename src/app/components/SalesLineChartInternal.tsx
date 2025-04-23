'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  ReferenceLine, 
} from 'recharts';
import { salesGraphData } from '../lib/data';

const SalesLineChartInternal = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
    <LineChart data={salesGraphData}>
      <defs>
        <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2EB76F" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#2EB76F" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* AXES */}
      <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          fontSize={12}
          stroke="#9CA3AF"
        />
        <YAxis
          ticks={[1.5, 3.0, 4.5, 6.0]}
          domain={[1.5, 6]}
          axisLine={false}
          tickLine={false}
          fontSize={12}
          tickFormatter={(value) => value.toFixed(1)}
          stroke="#9CA3AF"
        />

      <ReferenceLine y={3.0} stroke="#D1D5DB" />
      <ReferenceLine y={4.5} stroke="#D1D5DB" />

      <Area
        type="linear"
        dataKey="thisMonth"
        stroke="none"
        fill="url(#greenGradient)"
      />

      <Line
        type="monotone"
        dataKey="thisMonth"
        stroke="#2EB76F" 
        dot={false} 
      />

      <Line
        type="monotone"
        dataKey="lastMonth"
        stroke="#EF4444"
        strokeDasharray="2 2"
        dot={false}
      />

      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default SalesLineChartInternal;
