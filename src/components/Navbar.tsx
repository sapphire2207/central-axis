import React, { useState } from 'react';
import { assets } from '../assets/assets.ts';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-center border-b border-[#202024] bg-background/60 backdrop-blur-xl transition-all bg-black pl-3 pr-3">
      <div className="container flex flex-col w-full">
        {/* Top section: Logo and Hamburger */}
        <div className="flex h-16 items-center justify-between px-4 py-4">
          {/* Logo Section */}
          <div className="flex gap-3 md:gap-10">
            {/* Desktop Logo */}
            <a href="/" className="hidden items-center space-x-2 md:flex">
              <img src={assets.logo} alt="Logo" className="w-9 h-9" />
              <span className="text-2xl font-semibold text-white">CentralAxis</span>
            </a>

            {/* Mobile Logo */}
            <a href="/" className="flex items-center space-x-2 md:hidden">
              <img src={assets.logo} alt="Logo" className="w-9 h-9" />
              <span className="font-bold text-white">CentralAxis</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_ITEMS.map(({ title, items }) => renderDropdown(title, items))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle Menu"
            className="lg:hidden border border-[#27272A] p-2 rounded bg-black text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <img src={assets.menu} alt="menu" className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pb-4 space-y-4 flex flex-col pt-8 absolute top-16 left-0 w-full bg-black z-50 pl-10">
            {NAV_ITEMS.map(({ title, items }, index) => (
              <div key={index}>
                <div 
                  className='flex items-center justify-start gap-3 cursor-pointer'
                  onClick={() =>
                    setOpenDropdownIndex(openDropdownIndex === index ? null : index)
                  }
                >
                  <p className="text-white font-semibold text-lg mb-2">{title}</p>
                  <img src={assets.down} className='h-[24px] w-[24px] self-start' />
                </div>

                {openDropdownIndex === index && (
                  <div className="flex flex-col gap-6 pt-2 pl-5">
                    {items.map((item, idx) => (
                        <p key={idx} className='text-[#71717A]'>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </header>
  );
};

// Desktop Dropdown Renderer
const renderDropdown = (title: string, items: string[]) => (
  <div className="group relative">
    <button className="flex items-center text-lg font-medium hover:text-[#90949A] transition sm:text-sm text-white cursor-pointer">
      {title} <span className="ml-1">▼</span>
    </button>
    <div className="absolute right-0 mt-2 w-64 bg-background border rounded-md shadow-lg ring-1 ring-border opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 ease-in-out z-50">
      <div className="bg-black border-white border-1 rounded-md">
        {items.map((label, index) => (
          <span
            key={index}
            className="block px-4 py-2 text-sm font-semibold text-primary hover:text-[#90949A] text-white cursor-pointer"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Navigation Data
const NAV_ITEMS = [
  {
    title: 'Data Center Infrastructure Management',
    items: [
      'Monitoring Devices',
      'Asset Tracking',
      'Network Management',
      'Change Management',
      'Colocation Management',
      'Data Center Planner',
      'Firmware Management',
      'IP Address Management',
      'Customer Portal',
      'Custom Insights',
      'Custom Data Center Solutions',
    ],
  },
  {
    title: 'Intelligence Solutions',
    items: [
      'Digital Twins',
      'Smart Power Mapping',
      'Predictive Failure and Alerting',
      'Smart Control Systems',
      'Automated Discovery',
    ],
  },
  {
    title: 'Data Center Compliance',
    items: [
      'DCOI Compliance',
      '(EU) 2023/1791',
      'EN 50600',
      'LEED Certification',
      'ISO/IEC 30134-2',
      '(EPA) ENERGY STAR',
      'European Commission JRC',
    ],
  },
  {
    title: 'Sustainability Blog',
    items: [
      'Energy Efficiency',
      'Stranded Energy Map',
      'Environmental Product Declaration',
      'Renewables Integration',
      'Power Resource Management',
    ],
  },
];

export default Navbar;
