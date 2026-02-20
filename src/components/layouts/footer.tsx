"use client";

import React from "react";
import Image from "next/legacy/image";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://x.com/ayomidekappo34",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1739997758/image/mwylgkytcezmn7ruuyy9.svg",
      alt: "Twitter logo",
    },
    {
      href: "https://www.linkedin.com/in/ayomide-kappo/",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738995698/Frame_10_fovb1i.svg",
      alt: "LinkedIn logo",
    },
    {
      href: "https://github.com/ayomidekappo12",
      src: "https://res.cloudinary.com/dxvf9uqwe/image/upload/v1738995698/Frame_11_figuhx.svg",
      alt: "GitHub logo",
    },
  ];

  return (
    <footer className="w-full bg-bgbody py-6">
      <div className="xl:mx-auto max-w-screen-xl px-4 lg:px-20">
        <div className="md:flex md:justify-between items-center">
          <div className="hidden md:flex text-center md:text-left">
            <p className="font-medium text-textnorm text-base">
              © 2025 Ayomide Design. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-2 mb-4 md:mb-0">
            {socialLinks.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={36}
                  height={36}
                  className="brightness-100 cursor-pointer"
                  priority
                />
              </a>
            ))}
          </div>
          <div className="md:hidden text-center md:text-left">
            <p className="font-medium text-textnorm text-base">
              © 2025 Ayomide Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
