/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

interface ProfileDropdownProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export default function ProfileDropdown({ user }: ProfileDropdownProps) {
  const [userPopOver, setUserPopOver] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const router = useRouter();

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setUserPopOver(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        className="-m-1.5 flex items-center p-1.5"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        onClick={() => setUserPopOver(!userPopOver)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full bg-gray-50"
          src="https://media.licdn.com/dms/image/C4E03AQEOw1Y_Unookg/profile-displayphoto-shrink_800_800/0/1607379551202?e=1713398400&v=beta&t=ZGQBeZOOSsNOXk3hCqk72jCvHYeIOmZEXiWfQGTVHaE"
          alt=""
        />
        <span className="hidden lg:flex lg:items-center">
          <span
            className="ml-4 text-sm font-semibold leading-6 text-white"
            aria-hidden="true"
          >
            {`${user?.firstName} ${user?.lastName}`}
          </span>
          <svg
            className="ml-2 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {userPopOver && (
        <div
          className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          {/* <!-- Active: "bg-gray-50", Not Active: "" --> */}
          <a
            href="#"
            className="block px-3 py-1 text-sm leading-6 text-gray-900"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Your profile
          </a>
          <a
            href="#"
            onClick={async () => {
              setUserPopOver(false);
              await fetch("/api/auth/logout");
              router.push("/login");
            }}
            className="block px-3 py-1 text-sm leading-6 text-gray-900"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
