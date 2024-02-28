import Logo from "./Logo";
import MenuItem from "./MenuItem";
import {
  HomeIcon,
  FolderIcon,
  UserGroupIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface SidebarProps {
  companyName: string;
  selectedItemName?: string;
}

const items = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Team",
    icon: UserGroupIcon,
  },
  {
    name: "Projects",
    icon: FolderIcon,
  },
  {
    name: "Calendar",
    icon: CalendarIcon,
  },
  {
    name: "Documents",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Reports",
    icon: ChartPieIcon,
  },
];

export default function Sidebar({companyName, selectedItemName}: SidebarProps) {
  const [selectedItem, setSelectedItem] = useState(selectedItemName ?? 'Dashboard');

  return (
    <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <Logo src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" companyName={companyName}/>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {items.map((item) => {
                  return (
                    <MenuItem
                      key={item.name}
                      name={item.name}
                      icon={item.icon}
                      selected={selectedItem === item.name}
                      setSelectedItem={setSelectedItem}
                      href={"#"}
                    />
                  );
                })}
                
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                <MenuItem name="Brookes Coaching" setSelectedItem={setSelectedItem} href="#" />
              </ul>
            </li>
            <div className="mt-auto pr-4">
              <MenuItem name="Settings" icon={Cog6ToothIcon} setSelectedItem={setSelectedItem} href="#" />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
