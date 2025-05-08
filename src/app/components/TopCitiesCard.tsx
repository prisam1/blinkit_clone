'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { topCitiesData } from '../lib/data';
import { HalfCircleDonut } from './HalfCircleDonut';
import Image from 'next/image'
import img from '../assets/info.png'

export function TopCitiesCard() {

    return (
        <Card className="p-0">
            <CardContent className="p-0">
                <div className="flex flex-row justify-between p-[12px]">
                    <p className="text-sm font-semibold text-[#515153]">Top Cities</p>
                    <div>
                        <Image
                            src={img}
                            width={16}
                            height={16}
                            alt="info"
                        />
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#F1F1F1]' />
                <div className='flex justify-center mt-[8px]'>
                    <HalfCircleDonut data={topCitiesData.cities.map((city) => ({
                        value: city.value,
                        color: city.color,
                    }))} />
                </div>
                <div className="mt-[6px]">
                    {topCitiesData?.cities.map((city) => (
                        <div key={city.name} className="flex flex-row justify-between items-center p-[14px]">
                            <div className="flex items-center gap-[6px]">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: city.color }}
                                />  <span className="text-sm">{city.name}</span>
                            </div>
                            <div className="flex text-sm items-center gap-[6px] flex-row justify-between">
                                <p className="font-medium">{city.value}</p>
                                <p className="text-xs text-muted-foreground bg-[#F7F7F7] rounded-[2px] px-[4px] py-[2px]">{city.share}</p>
                                {city.increase == true ? <ArrowUp color="#1D874F" className="w-[14px] h-[14px]" /> : <ArrowDown color="#F31D1D" className="w-[14px] h-[14px]" />}
                                <span className={`text-xs ${city.increase === false ? 'text-red-500' : 'text-green-600'}`}>
                                    {city.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
