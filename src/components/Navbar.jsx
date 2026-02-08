import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Features', href: '#features', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure 
      as="nav" 
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="flex flex-1 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <span className={classNames(
                "text-3xl md:text-3xl font-bold transition-colors duration-300",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                FurniShop
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "text-[16px] font-bold transition-colors duration-300",
                      isScrolled 
                        ? "text-gray-700 hover:text-black" 
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className={classNames(
              "inline-flex items-center justify-center rounded-md p-2 focus:outline-none",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
              <Bars3Icon aria-hidden="true" className="block size-8 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="sm:hidden bg-white shadow-lg">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}