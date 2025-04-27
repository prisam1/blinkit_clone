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
import { ChevronDown, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type SkuData = {
  id: string
  name: string
  sales: number
  outOfStock: number
  inventory: number
  avgRank: number
  traffic: number
  impressions: number
  growth?: number
}

const data: SkuData[] = [
  {
    id: '1',
    name: 'Protein Bar 100g',
    sales: 93132.12,
    outOfStock: 1.68,
    inventory: 931.9,
    avgRank: 3.2,
    traffic: 12303,
    impressions: 25005,
  },
  {
    id: '2',
    name: 'Choco Bar 100g',
    sales: 8526.32,
    outOfStock: 6.79,
    inventory: 679,
    avgRank: 7,
    traffic: 3005,
    impressions: 4231,
    growth: 2.4,
  },
  {
    id: '3',
    name: 'Choco Bar 100g',
    sales: 7012.72,
    outOfStock: 3.28,
    inventory: 328,
    avgRank: 4,
    traffic: 2960,
    impressions: 3657,
    growth: 2.4,
  },
  {
    id: '4',
    name: 'SKU 3',
    sales: 9313,
    outOfStock: 1.68,
    inventory: 931.9,
    avgRank: 11,
    traffic: 1931,
    impressions: 931,
  },
  {
    id: '5',
    name: 'SKU 4',
    sales: 0,
    outOfStock: 0,
    inventory: 0,
    avgRank: 0,
    traffic: 0,
    impressions: 0,
  },
]

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
            <TableRow className="border-b">
              <TableHead className="w-[200px]" />
              <TableHead colSpan={3} className="text-center text-gray-700 border-l">
                Availability
              </TableHead>
              <TableHead colSpan={3} className="text-center text-gray-700 border-l">
                Visibility
              </TableHead>
            </TableRow>
            <TableRow className="border-b">
              <TableHead className="font-semibold">SKU Name</TableHead>
              <TableHead className="font-semibold border-l">Sales</TableHead>
              <TableHead className="font-semibold border-l">Out of Stock</TableHead>
              <TableHead className="font-semibold border-l">Total Inventory</TableHead>
              <TableHead className="font-semibold border-l">Average Rank</TableHead>
              <TableHead className="font-semibold border-l">Est. Traffic</TableHead>
              <TableHead className="font-semibold border-l">Est. Impressions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <>
                <TableRow
                  key={item.id}
                  onClick={() => handleRowClick(item.id)}
                  className="hover:bg-muted/50 cursor-pointer border-b"
                >
                  <TableCell className="flex items-center gap-2">
                    <Checkbox id={`select-${item.id}`} checked={expandedRow === item.id} />
                    <Link href="#" className="text-primary hover:underline">
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right border-l">
                    ₹{item.sales.toLocaleString('en-IN')}
                  </TableCell>
                  <TableCell className="text-right border-l">
                    {item.outOfStock}%
                  </TableCell>
                  <TableCell className="text-right border-l">
                    {item.inventory !== 0 ? item.inventory : '-'}
                  </TableCell>
                  <TableCell className="text-right border-l flex items-center justify-end gap-1">
                    {item.avgRank}
                    {item.growth && (
                      <span className="flex items-center text-green-600 text-xs">
                        <ArrowUp size={14} /> {item.growth}%
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right border-l">
                    {item.traffic !== 0 ? item.traffic.toLocaleString('en-IN') : '-'}
                  </TableCell>
                  <TableCell className="text-right border-l">
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
                        <TableCell className="text-green-600 text-center border-l">
                          <ArrowUp size={14} className="inline" /> 2.4%
                        </TableCell>
                        <TableCell className="text-center border-l">-</TableCell>
                        <TableCell className="text-green-600 text-center border-l">
                          <ArrowUp size={14} className="inline" /> 2.4%
                        </TableCell>
                        <TableCell className="text-green-600 text-center border-l">
                          <ArrowUp size={14} className="inline" /> 2.4%
                        </TableCell>
                        <TableCell className="text-green-600 text-center border-l">
                          <ArrowUp size={14} className="inline" /> 2.4%
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell className="text-center border-l">
                          ₹{item.sales.toLocaleString('en-IN')}
                        </TableCell>
                        <TableCell className="text-center border-l">
                          {item.outOfStock}%
                        </TableCell>
                        <TableCell className="text-center border-l">
                          {item.inventory !== 0 ? item.inventory : '-'}
                        </TableCell>
                        <TableCell className="text-center border-l">
                          {item.avgRank}
                        </TableCell>
                        <TableCell className="text-center border-l">
                          {item.traffic !== 0 ? item.traffic.toLocaleString('en-IN') : '-'}
                        </TableCell>
                        <TableCell className="text-center border-l">
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
              <TableCell className="text-right border-l">
                ₹{totalSales.toLocaleString('en-IN')}
              </TableCell>
              <TableCell className="text-right border-l">16%</TableCell>
              <TableCell className="text-right border-l">{Math.floor(totalInventory)}</TableCell>
              <TableCell className="text-right border-l">8.3</TableCell>
              <TableCell className="text-right border-l">{totalTraffic.toLocaleString('en-IN')}</TableCell>
              <TableCell className="text-right border-l">{totalImpressions.toLocaleString('en-IN')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
