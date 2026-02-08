import React from 'react'; 
import ig from '../assets/instagramIcon.svg';
import fb from '../assets/FacebookIcon.svg';
import tw from '../assets/TwitterIcon.svg';
import gh from '../assets/GithubIcon.svg';
import gm from '../assets/GmailIcon.svg';

const Footer = () => {
  const footerSections = [
    {
      title: "Our Products",
      links: ["The Support Suite", "The Sales Suite", "Support", "Guide"]
    },
    {
      title: "Top Features",
      links: ["Ticketing System", "Knowledge Base", "Community Forums", "Help Desk Software"]
    },
    {
      title: "Resources",
      links: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"]
    },
    {
      title: "Company",
      links: ["About Us", "Press", "Investors", "Events"]
    },
    {
      title: "Favourite Things",
      links: ["For Enterprise", "For Startups", "For Benchmark", "For Small Business"]
    }
  ];

  const socialIcons = [
    { name: "Instagram", src: ig },
    { name: "Facebook", src: fb },
    { name: "Twitter", src: tw },
    { name: "Github", src: gh },
    { name: "Gmail", src: gm }
  ];

  return (
    <footer className="bg-[#23262F] text-white pt-8 pb-8 font-saira md:pt-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">

          <h2 className="text-[24px] font-bold tracking-wide mb-6 md:mb-0">
            FurniShop
          </h2>

          <div className="flex space-x-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#285A52] transition-colors group"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>

        </div>

        <hr className="border-gray-700 mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 mb-12">

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-[18px] text-white mb-4 md:mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-400 text-[14px] hover:text-white hover:underline transition-all"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="text-center text-gray-500 text-[12px] md:text-[14px]">
          &copy; NameBrand 2022 - All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;