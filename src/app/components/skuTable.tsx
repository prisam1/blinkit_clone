'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ChevronDown, ArrowUp, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { data } from '../lib/data'
import Image from 'next/image'
import img from '../assets/chartLine.png'


export default function SkuTable() {
    const [expandedRow, setExpandedRow] = useState<string | null>(null)

    const handleRowClick = (id: string) => {
        setExpandedRow(expandedRow === id ? null : id)
    }

    const totalSales = data.reduce((acc, item) => acc + item.sales, 0)
    const totalInventory = data.reduce((acc, item) => acc + item.inventory, 0)
    const totalTraffic = data.reduce((acc, item) => acc + item.traffic, 0)
    const totalImpressions = data.reduce((acc, item) => acc + item.impressions, 0)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">SKU level data</h1>
                    <p className="text-muted-foreground text-sm">
                        Analytics for all your SKUs
                    </p>
                </div>
                <Button variant="outline" className="flex items-center gap-2 rounded-full border">
                    Filters (1) <ChevronDown size={16} />
                </Button>
            </div>

            {/* Table */}
            <div className="rounded-xl border overflow-hidden">
                <Table className="border-separate border-spacing-0">
                    <TableHeader>
                        <TableRow className="border-b bg-white hover:bg-white">
                            <TableHead className="w-[200px]" />
                            <TableHead colSpan={3} className="text-center text-gray-700 border-l border-b">
                                Availability
                            </TableHead>
                            <TableHead colSpan={3} className="text-center text-gray-700 border-l border-b">
                                Visibility
                            </TableHead>
                        </TableRow>
                        <TableRow className="border-b bg-white hover:bg-white">
                            <TableHead className="flex flex-row gap-[10px] font-semibold border-b text-left align-text-bottom">
                                <div>
                                    <Image
                                        src={img}
                                        width={20}
                                        height={20}
                                        alt="info"
                                    />
                                </div>
                                SKU Name</TableHead>
                            <TableHead className="font-semibold border-l border-b">Sales  <ChevronDown size={12} className="inline" /></TableHead>
                            <TableHead className="font-semibold border-l border-b">Out of Stock <ChevronDown size={12} className="inline" /></TableHead>
                            <TableHead className="font-semibold border-l border-b">Total Inventory <ChevronDown size={12} className="inline" /></TableHead>
                            <TableHead className="font-semibold border-l border-b">Average Rank <ChevronDown size={12} className="inline" /></TableHead>
                            <TableHead className="font-semibold border-l border-b">Est. Traffic <ChevronDown size={12} className="inline" /></TableHead>
                            <TableHead className="font-semibold border-l border-b">Est. Impressions <ChevronDown size={12} className="inline" /></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <>
                                <TableRow
                                    key={index}
                                    onClick={() => handleRowClick(item.id)}
                                    className="hover:bg-muted/50 cursor-pointer border-b"
                                >
                                    <TableCell className="flex items-center gap-2 border-b">
                                        <Checkbox id={`select-${item.id}`} checked={expandedRow === item.id} />
                                        <Link href="#" className="text-primary underline">
                                            {item.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell className="text-center border-l border-b">
                                        ₹{item.sales.toLocaleString('en-IN')}
                                    </TableCell>
                                    <TableCell className="text-center   border-b">
                                        {item.outOfStock}%
                                    </TableCell>
                                    <TableCell className="text-center  border-b">
                                        {item.inventory !== 0 ? item.inventory : '-'}
                                    </TableCell>
                                    <TableCell className="text-center border-l border-b">
                                        {item.avgRank}

                                    </TableCell>
                                    <TableCell className="text-center  border-b  ">
                                        {item.traffic !== 0 ? item.traffic.toLocaleString('en-IN') : '-'}
                                    </TableCell>
                                    <TableCell className="text-center  border-b ">
                                        {item.impressions !== 0 ? item.impressions.toLocaleString('en-IN') : '-'}
                                    </TableCell>
                                </TableRow>

                                {/* Expandable Row */}
                                {expandedRow === item.id && (
                                    <TableRow className="bg-gray-50">
                                        <TableCell />
                                        {/* If second row clicked => only green arrows */}
                                        {item.id === '2' ? (
                                            <>
                                                <TableCell className="text-green-600 text-center border-l">
                                                    <ArrowUp size={14} className="inline" /> 2.4%
                                                </TableCell>
                                                <TableCell className="text-green-600 text-center ">
                                                    <ArrowUp size={14} className="inline" /> 2.4%
                                                </TableCell>
                                                <TableCell className="text-center  ">-</TableCell>
                                                <TableCell className="text-green-600 text-center  border-l">
                                                    <ArrowUp size={14} className="inline" /> 2.4%
                                                </TableCell>
                                                <TableCell className="text-green-600 text-center ">
                                                    <ArrowUp size={14} className="inline" /> 2.4%
                                                </TableCell>
                                                <TableCell className="text-green-600 text-center ">
                                                    <ArrowUp size={14} className="inline" /> 2.4%
                                                </TableCell>
                                            </>
                                        ) : (
                                            <>
                                                <TableCell className="text-center border-l">
                                                    ₹{item.sales.toLocaleString('en-IN')}
                                                </TableCell>
                                                <TableCell className="text-center  ">
                                                    {item.outOfStock}%
                                                </TableCell>
                                                <TableCell className="text-center  ">
                                                    {item.inventory !== 0 ? item.inventory : '-'}
                                                </TableCell>
                                                <TableCell className="text-center  ">
                                                    {item.avgRank}
                                                </TableCell>
                                                <TableCell className="text-center ">
                                                    {item.traffic !== 0 ? item.traffic.toLocaleString('en-IN') : '-'}
                                                </TableCell>
                                                <TableCell className="text-center ">
                                                    {item.impressions !== 0 ? item.impressions.toLocaleString('en-IN') : '-'}
                                                </TableCell>
                                            </>
                                        )}
                                    </TableRow>
                                )}
                            </>
                        ))}
                        {/* Total Row */}
                        <TableRow className="bg-muted font-semibold">
                            <TableCell>Total</TableCell>
                            <TableCell className="text-center border-l">
                                ₹{totalSales.toLocaleString('en-IN')}
                            </TableCell>
                            <TableCell className="text-center  ">16%</TableCell>
                            <TableCell className="text-center ">{Math.floor(totalInventory)}</TableCell>
                            <TableCell className="text-center ">8.3</TableCell>
                            <TableCell className="text-center ">{totalTraffic.toLocaleString('en-IN')}</TableCell>
                            <TableCell className="text-center  ">{totalImpressions.toLocaleString('en-IN')}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
