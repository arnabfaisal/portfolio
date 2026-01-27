"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

// Optional: if you want proper icons (recommended)
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export function Header() {
  const navItems = [
    { name: "Home", link: "#home"       },
    { name: "About", link: "#about"     },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects"     },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo /> {/* ← only shows "Arnab" */}

          <NavItems items={navItems} />

          {/* Right side - social buttons with icons */}
          <div className="flex items-center gap-3">
            <NavbarButton
              variant="secondary"
              href="https://github.com/arnabfaisal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <IconBrandGithub size={20} />
            </NavbarButton>

            <NavbarButton
              variant="secondary"
              href="https://www.linkedin.com/in/fahim-faisal-arnab-75025524b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <IconBrandLinkedin size={20} />
            </NavbarButton>

            <NavbarButton
              variant="secondary"
              href="mailto:fahimfaisalarnab@gmail.com"
              className="p-2"
            >
              <IconMail size={20} />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative block py-3 text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile social links */}
            <div className="mt-6 flex flex-col gap-4 w-full">
              <a
                href="https://github.com/arnabfaisal"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg bg-neutral-100 px-4 py-3 dark:bg-neutral-800"
              >
                <IconBrandGithub size={24} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/fahim-faisal-arnab-75025524b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg bg-neutral-100 px-4 py-3 dark:bg-neutral-800"
              >
                <IconBrandLinkedin size={24} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:fahimfaisalarnab@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg bg-neutral-100 px-4 py-3 dark:bg-neutral-800"
              >
                <IconMail size={24} />
                <span>Email</span>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}