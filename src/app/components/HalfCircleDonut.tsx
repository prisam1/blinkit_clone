'use client';

import { PieChart, Pie, Cell } from 'recharts';
import { topCitiesData } from '../lib/data';
import { ArrowRight, ArrowUp } from 'lucide-react';

interface DonutProps {
  data: { value: string; color: string }[];
}

export function HalfCircleDonut({ data }: DonutProps) {
  const formattedData = data.map((d) => ({
    value: parseFloat(d.value.replace(/[^\d.]/g, '')), // Removes ₹ and L
    color: d.color,
  }));
  return (
    <>
      <PieChart width={250} height={105}>
        <Pie
          data={formattedData}
          cy={100}
          startAngle={180}
          endAngle={0}
          innerRadius={80}
          outerRadius={100}
          dataKey="value"
        >
          {formattedData.map((data, index) => (
            <Cell key={`cell-${index}`} fill={data.color} />
          ))}
        </Pie>
      </PieChart>
      <div className='absolute mt-[42px]'>
        <p className="text-[12px] font-bold text-center text-[#7D7D7E]">Total</p>
        <p className="text-[18px] font-bold text-center">{topCitiesData.total}</p>

        <div className='flex flex-row items-center'>
          <ArrowUp color="#1D874F" className="w-[14px] h-[14px]" />
          <p className="text-xs text-green-600 text-center">{topCitiesData.change}</p>
        </div>
      </div>
    </>
  );
};
