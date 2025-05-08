import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp } from 'lucide-react';
import SalesLineChart from './SalesLineChart';
import Image from 'next/image'
import img from '../assets/info.png'

export function SalesCard() {
    return (
        <Card className="p-0">
            <CardContent className="p-0">
                <div className='flex flex-row justify-between p-[12px]'>
                    <p className="text-sm font-semibold text-[#515153]">Sales (MRP)</p>
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

                <div className='flex flex-row justify-between p-[12px]'>
                    <p className="text-2xl font-bold">125.49</p>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-row gap-[6px] items-center'>
                            <ArrowUp color="#1D874F" className="w-[14px] h-[14px]" />

                            <p className="text-[14px] font-bold text-[#1D874F]"> 2.4% </p>
                        </div>
                        <span className="text-xs text-[#031B1599]">vs 119.69 last month</span>
                    </div>
                </div>

                <SalesLineChart />

                <div className='w-full h-[1px] bg-[#F1F1F1]' />
                <div className="flex gap-[24px] text-xs text-muted-foreground p-[12px]">
                    <div className="flex items-center gap-[6px]">
                        <span className="w-2 h-2 bg-[#1D874F] rounded-full" /> This Month
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <span className="w-2 h-2 bg-orange-700 rounded-full" /> Last Month
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
