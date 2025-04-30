'use client'

import { Menu, ChevronsLeft, ChevronDown, ChevronUp } from 'lucide-react'
import { JSX, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import ss from '../assets/ss.png'
import perfora from '../assets/perfora.png'
import boat from '../assets/boat.png'
import add from '../assets/add.png'
import mamaEarth from '../assets/mamaEarth.png'
import channels from '../assets/tv.png'
import home from '../assets/home.png'
import creatives from '../assets/img.png'
import help from '../assets/help.png'
import settings from '../assets/settings.png'
import users from '../assets/users.png'
import user_name from '../assets/user_name.png'



interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Sidebar = ({ open, setOpen }: SideBarProps): JSX.Element => {

  const [expanded, setExpanded] = useState<'Overview' | 'Channels' | 'Creatives' | null>('Overview')
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null)
  const [channelOpen, setChannelOpen] = useState(false)

  const handleSelect = (section: 'Overview' | 'Channels' | 'Creatives') => {
    setExpanded(section)
    if (section !== 'Channels') {
      setChannelOpen(false)
      setSelectedChannel(null)
    } else {
      setChannelOpen((prev) => !prev)
    }
  }

  const isActive = (value: string) => selectedChannel === value

  return (
    <div className={`${open ? 'pr-[20px] pl-[0px] w-72' : 'pr-[0px] '} h-full `}>
      <div className="flex justify-between items-center mb-0 pr-[16px]">
        <div className="flex flex-col items-center pl-[6px]">
          <button onClick={() => setOpen(!open)}>
            {!open ? <Menu className="mb-[16px] w-[36px] h-[36px]" /> : <></>}
          </button>

          <Image src={perfora} className='w-[38px] h-[38px]' alt="info" />

        </div>

        {open && (
          <Card className="p-[6px] ml-[10px] flex-row w-[170px] gap-[46px] items-center">
            <div className="p-0 flex flex-row gap-[8px] items-center">
              <Image src={ss} width={24} height={24} alt="info" />
              <p className="text-sm">Test_brand</p>
            </div>
            <CardContent className="p-0 pr-[16px]">
              <ChevronUp className="w-[14px] h-[12px]" />
              <ChevronDown className="w-[14px] h-[12px]" />
            </CardContent>
          </Card>
        )}

        <button
          className='w-[16px] h-[16px]'
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronsLeft color={"#1D874F"} className="w-[16px] h-[16px]" /> : <></>}
        </button>
      </div>

      <div className={`flex flex-row ${open ? 'mt-[22px]' : ''}`}>
        <div className={`px-[6px] pt-[6px] flex flex-col  ${open ? 'pb-[28px]' : 'h-[84vh]'} justify-between`}>
          <div className="w-[40px] flex flex-col gap-[6px]">
            <Image src={mamaEarth} width={40} height={40} alt="info" />

            <Image src={boat} width={40} height={40} alt="info" />
            <Image src={add} width={40} height={40} alt="info" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <Image src={users} width={40} height={40} alt="info" />
            <Image src={user_name} width={40} height={40} alt="info" />
          </div>
        </div>

        {open && (
          <nav className="bg-[#F8F8F8] w-full flex flex-col justify-between px-[12px] py-[26px] min-h-[90vh]">
            {/* Overview */}
            <div className='flex flex-col'>
              <button
                className={`px-[12px] py-[8px] rounded-[10px] ${expanded === 'Overview' ? 'bg-[#D7F2E3] text-[#1D874F]' : ''
                  }`}
                onClick={() => handleSelect('Overview')}
              >
                <div className='flex items-center gap-[12px] flex-row'>

                  <Image src={home} width={20} height={20} alt="info" />

                  <p>Overview</p>
                </div>

              </button>

              {/* Channels */}
              <button
                className={`flex justify-between items-center px-[12px] py-[8px] rounded-[10px] ${expanded === 'Channels' ? 'bg-[#D7F2E3] text-[#1D874F]' : ''
                  }`}
                onClick={() => handleSelect('Channels')}
              >
                <div className='flex items-center gap-[12px] flex-row'>

                  <Image src={channels} width={20} height={20} alt="info" />

                  <p>Channels</p>
                </div>
                {channelOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Sub-Channels */}
              {channelOpen && (
                <div className="ml-4 flex flex-col gap-1">
                  {['Meta Ads', 'Google Ads', 'Quick Commerce'].map((channel) => (
                    <button
                      key={channel}
                      className={`text-left text-sm px-[16px] py-[6px] rounded-[10px] ${isActive(channel)
                        ? 'bg-[#1D874F] text-white'
                        : 'hover:bg-gray-200'
                        }`}
                      onClick={() => setSelectedChannel(channel)}
                    >
                      {channel}
                    </button>
                  ))}
                </div>
              )}

              {/* Creatives */}
              <button
                className={`px-[12px] py-[8px] rounded-[10px] ${expanded === 'Creatives' ? 'bg-[#D7F2E3] text-[#1D874F]' : ''
                  }`}
                onClick={() => handleSelect('Creatives')}
              >
                <div className='flex items-center gap-[12px] flex-row'>

                  <Image src={creatives} width={20} height={20} alt="info" />

                  <p>Creatives</p>
                </div>

              </button>
            </div>

            <div>
              <button
                className={`px-[12px] py-[8px] rounded-[10px] ${expanded === 'Creatives' ? 'bg-[#D7F2E3] text-[#1D874F]' : ''
                  }`}
                onClick={() => handleSelect('Creatives')}
              >
                <div className='flex items-center gap-[12px] flex-row'>

                  <Image src={help} width={20} height={20} alt="info" />

                  <p>Help</p>
                </div>

              </button>
              <button
                className={`px-[12px] py-[8px] rounded-[10px] ${expanded === 'Creatives' ? 'bg-[#D7F2E3] text-[#1D874F]' : ''
                  }`}
                onClick={() => handleSelect('Creatives')}
              >
                <div className='flex items-center gap-[12px] flex-row'>

                  <Image src={settings} width={20} height={20} alt="info" />

                  <p>Settings</p>
                </div>

              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}
