"use client";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import SimpleToggle from "./ui/SimpleToggle";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the theme class to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="w-full p-5 bg-primaryColor">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <RxHamburgerMenu className="size-8 cursor-pointer" />
          <p className="text-2xl">TASKWISE</p>
          <div className="flex gap-7 items-center">
            <SimpleToggle onToggle={toggleTheme} />
            <FaUser className="size-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
