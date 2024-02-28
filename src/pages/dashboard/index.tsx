/* eslint-disable @next/next/no-img-element */
"use client";
import ClientTable from "./ClientTable";
import Metrics, { Stat } from "./Metrics";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  HomeIcon,
  FolderIcon,
  UserGroupIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "@components/MenuItem";
import Logo from "@components/Logo";
import Sidebar from "@components/Sidebar";
import { useUser } from "@hooks/useUser";
import ProfileDropdown from "@components/ProfileDropdown";

export default function Dashboard() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return <></>;
  }

  const stats: Stat[] = [
    {
      id: 1,
      name: "Active Clients",
      stat: "71,897",
      icon: UsersIcon,
      change: "122",
      changeType: "increase",
    },
    {
      id: 2,
      name: "Total Leads",
      stat: "8,265",
      icon: EnvelopeOpenIcon,
      change: "5.4%",
      changeType: "increase",
    },
    {
      id: 3,
      name: "Average Lead Cost",
      stat: "$24.57",
      icon: CursorArrowRaysIcon,
      change: "3.2%",
      changeType: "decrease",
    },
    {
      id: 4,
      name: "Customer Acq. Cost",
      stat: "$628.27",
      icon: CurrencyDollarIcon,
      change: "3.2%",
      changeType: "decrease",
    },
    {
      id: 4,
      name: "Return on Ad Spend",
      stat: "-",
      icon: PresentationChartLineIcon,
    },
  ];

  return (
    <main className="bg-gray-800">
      {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
      <div
        className="hidden relative z-50 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
        <div className="fixed inset-0 bg-gray-900/80"></div>
        <div className="fixed inset-0 flex">
          <div className="relative mr-16 flex w-full max-w-xs flex-1">
            {/* <!--
            Close button, show/hide based on off-canvas menu state.
  
            Entering: "ease-in-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in-out duration-300"
              From: "opacity-100"
              To: "opacity-0"
          --> */}
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button type="button" className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
              <Logo
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                companyName="Company Name"
              />
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      <MenuItem
                        name="Home"
                        icon={HomeIcon}
                        href="#"
                        selected
                      />
                      <MenuItem name="Team" icon={UserGroupIcon} href="#" />
                      <MenuItem name="Projects" icon={FolderIcon} href="#" />
                      <MenuItem name="Calendar" icon={CalendarIcon} href="#" />
                      <MenuItem
                        name="Documents"
                        icon={DocumentDuplicateIcon}
                        href="#"
                      />
                      <MenuItem name="Reports" icon={ChartPieIcon} href="#" />
                    </ul>
                  </li>
                  <li>
                    <div className="text-xs font-semibold leading-6 text-gray-400">
                      Your teams
                    </div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      <li>
                        {/* <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" --> */}
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        >
                          <span className="truncate">Brookes Coaching</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mt-auto">
                    <a
                      href="#"
                      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <svg
                        className="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <Sidebar companyName="Company Name" selectedItemName="Home" />

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-900 bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-300 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* <!-- Separator --> */}
          <div
            className="h-6 w-px bg-gray-900/10 lg:hidden"
            aria-hidden="true"
          ></div>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form
              className="relative flex flex-1"
              action="#"
              method="GET"
            ></form>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              {/* <!-- Separator --> */}
              <div
                className="lg:block lg:h-6 lg:w-px lg:bg-gray-700"
                aria-hidden="true"
              ></div>

              {/* <!-- Profile dropdown --> */}
              <ProfileDropdown user={user} />
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <Metrics stats={stats} />
            <div className="p-6"></div>
            <ClientTable />
            {/* <Calendar /> */}
          </div>
        </main>
      </div>
    </main>
  );
}
