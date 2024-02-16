"use client";
import { HomeModernIcon } from "@heroicons/react/16/solid";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignInPanel from "./SignInPanel";

const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      className="bg-gradient-to-b from-purple-500 to-purple-700 shadow-md text-purple-50"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={
            isMenuOpen ? "Close menu" : "Open menu"
          }
          className="sm:hidden"
        />
        <NavbarBrand>
          <HomeModernIcon className="w-16" />
          <p className="font-bold text-inherit">
            SD Real Estate
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <SignInPanel />
      </NavbarContent>
      <NavbarMenu></NavbarMenu>
    </Navbar>
  );
};

export default Appbar;
