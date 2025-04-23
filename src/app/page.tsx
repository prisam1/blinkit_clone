'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter, Calendar, MoreHorizontal } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { TopCitiesCard } from "./components/TopCitiesCard";
import { SalesCard } from "./components/SalesCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";



const skuData = [
  {
    name: "Protein Bar 100g",
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    inventory: 931.9,
    rank: 3.2,
    traffic: 12303,
    impressions: 25005,
  },
  {
    name: "Choco Bar 100g",
    sales: "₹8,526.32",
    outOfStock: "6.79%",
    inventory: 679,
    rank: 7,
    traffic: 3005,
    impressions: 4231,
  },
  {
    name: "Choco Bar 100g",
    sales: "₹7,012.72",
    outOfStock: "3.28%",
    inventory: 328,
    rank: 4,
    traffic: 2960,
    impressions: 3657,
  },
  {
    name: "SKU 3",
    sales: "₹9313",
    outOfStock: "1.68%",
    inventory: 931.9,
    rank: 11,
    traffic: 1931.9,
    impressions: 931.9,
  },
];


export default function Home() {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen min-w-[100%] pt-[20px]">
      <Sidebar 
      open ={open}
      setOpen={setOpen}
      />

      {/* Main Content */}
      <Card className="min-h-screen p-0 min-w-[80vh]">
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
                  <ChevronDown className="w-[14px] h-[8px]"/>
                </Button>
              </div>
            </CardHeader>

            <div className='w-full h-[1px] bg-[#F1F1F1]' />
            <div className="px-[16px] py-[12px]">

            </div>

            <div className='w-full h-[1px] bg-[#F1F1F1]' />
            {/* Charts */}
            <div className="grid grid-cols-3 p-[24px] gap-4 mb-6 bg-[#FAFAFA]">

              <SalesCard />
              <SalesCard />
              <TopCitiesCard />

            </div>

            {/* Tables Section */}
            <section>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">SKU level data</h4>
                <Button variant="outline" size="sm"><Filter className="w-4 h-4 mr-1" />Filters(1)</Button>
              </div>
              <table className="w-full text-sm border">
                <thead className="bg-muted">
                  <tr>
                    <th className="p-2 text-left">SKU Name</th>
                    <th className="p-2">Sales</th>
                    <th className="p-2">Out of Stock</th>
                    <th className="p-2">Inventory</th>
                    <th className="p-2">Avg Rank</th>
                    <th className="p-2">Est. Traffic</th>
                    <th className="p-2">Impressions</th>
                    <th className="p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {skuData.map((sku, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2 font-medium">{sku.name}</td>
                      <td className="p-2">{sku.sales}</td>
                      <td className="p-2">{sku.outOfStock}</td>
                      <td className="p-2">{sku.inventory}</td>
                      <td className="p-2">{sku.rank}</td>
                      <td className="p-2">{sku.traffic}</td>
                      <td className="p-2">{sku.impressions}</td>
                      <td className="p-2 text-center"><MoreHorizontal className="cursor-pointer" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
