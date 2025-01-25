'use client'
import { useState } from "react";
import { Input, Button } from "@heroui/react";
import { EyeFilledIcon } from "@/public/codeIcons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/codeIcons/EyeSlashFilledIcon";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
    <div className="authContainer">
      <div className="authBlock">
        <Input
          label="Email"
          type="email"
          variant="bordered"
          placeholder="Enter your email"
        />
        <Input
          className="max-w-xs"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
        />
        <Button>
          <Link href="/structure">
            next
          </Link>
        </Button>
      </div>
    </div>
  );
}
