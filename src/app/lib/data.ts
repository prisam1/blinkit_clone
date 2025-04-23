// lib/data.ts

export const metrics = [
    {
      label: 'Total Orders',
      value: '12.5K',
      change: '+4.2%',
    },
    {
      label: 'Revenue',
      value: '₹12.8 Cr',
      change: '+8.1%',
    },
    {
      label: 'Avg Order Value',
      value: '₹980',
      change: '-2.3%',
    },
  ];
  
  export const topCities = {
    title: 'Top Cities',
    total: '₹1.2 Cr',
    change: '+6.2%',
    cities: [
      { city: 'Delhi', value: '₹40L', change: '+5%' },
      { city: 'Mumbai', value: '₹35L', change: '-3%' },
      { city: 'Bangalore', value: '₹30L', change: '+4%' },
      { city: 'Pune', value: '₹15L', change: '+2%' },
    ],
  };
  export const salesGraphData = [
    { day: "", thisMonth: 1.5, lastMonth: 2.8 },
    { day: "09", thisMonth: 2.8, lastMonth: 2.6 },
    { day: "10", thisMonth: 2.8, lastMonth: 2.4 },
    { day: "11", thisMonth: 3.5, lastMonth: 3.4 },
    { day: "12", thisMonth: 2.8, lastMonth: 3.2 },
    { day: "13", thisMonth: 4.6, lastMonth: 3.5 },
    { day: "14", thisMonth: 3.5, lastMonth: 4 },
    { day: "15", thisMonth: 3.4, lastMonth: 2.8 },
    { day: "", thisMonth: 5, lastMonth: 3.6 },
  ];

  export const topCitiesData = {
    total: "₹68.2L",
    change: "2.2%",
    cities: [
      { name: "New Delhi", value: "₹26.5L", share: "35%", change: "1.2%", color: "#6C4FED", increase:true},
      { name: "Mumbai", value: "₹36.4L", share: "23%", change: "3.3%", color: "#EA6153", increase:false },
      { name: "West Bengal", value: "₹12.2L", share: "21%", change: "2.3%", color: "#F7C245", increase:false },
      { name: "Others", value: "₹24.3L", share: "9%", change: "1.09%", color: "#D9D9D9", increase:true },
    ],
  };
  
  export const platformRows = [
    {
      platform: 'Blinkit',
      orders: 4500,
      revenue: '₹4.2 Cr',
      change: '+5.2%',
    },
    {
      platform: 'Zepto',
      orders: 3800,
      revenue: '₹3.5 Cr',
      change: '+2.1%',
    },
    {
      platform: 'Instamart',
      orders: 4200,
      revenue: '₹3.8 Cr',
      change: '-1.3%',
    },
  ];
  