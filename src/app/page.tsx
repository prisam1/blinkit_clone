'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { TopCitiesCard } from "./components/TopCitiesCard";
import { SalesCard } from "./components/SalesCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SkuTable from "./components/skuTable";
import { data, skuCityData } from "./lib/data";

export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen min-w-[100%] pt-[20px] pr-[20px]">
      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      {/* Main Content */}
      <Card className={`min-h-screen p-0 ${open ? " w-[85%]" : "w-[100%]"}`}>
        <CardContent className="p-0">
          <div className="">
            <CardHeader className="flex px-[24px] py-[12px] justify-between items-center">
              <h2 className="text-xl font-semibold">Quick Commerce</h2>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="font-medium text-[14px]"
                >
                  <Calendar
                    className="w-4 h-4 mr-2" />
                  Aug 01, 024 - Aug 03, 2024
                  <ChevronDown className="w-[14px] h-[8px]" />
                </Button>
              </div>
            </CardHeader>

            <div className='w-full h-[1px] bg-[#F1F1F1]' />
            <div className="px-[16px] py-[12px]">
            </div>
            <div className='w-full h-[1px] bg-[#F1F1F1]' />

            {/* Charts */}
            <div className="grid grid-cols-3 px-[24px] pt-[24px] gap-4 bg-[#FAFAFA]">
              <SalesCard />
              <SalesCard />
              <TopCitiesCard />
            </div>

            {/* Tables Section */}
            <div className="bg-[#FAFAFA] px-[24px] pb-10">
              <SkuTable
                data={data}
                title="SKU level data"
                subHeading="Analytics for all your SKUs" />
              <SkuTable
                data={skuCityData}
                title="City level data"
                subHeading="Analytics for all your Cities" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
