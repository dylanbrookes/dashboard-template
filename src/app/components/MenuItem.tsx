interface MenuItemProps {
  name: string;
  href: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  selected?: boolean;
  setSelectedItem?: (name: string) => void;
}

const selectedClass =
  "bg-gray-800 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold";
const unselectedClass =
  "text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold";

export default function MenuItem({
  name,
  href,
  icon,
  selected,
  setSelectedItem,
}: MenuItemProps) {
  const Icon = icon;
  return (
    <li>
      <a
        onClick={() => {
          if (setSelectedItem) {
            setSelectedItem(name);
          }
        }}
        href={href}
        className={selected ? selectedClass : unselectedClass}
      >
        {Icon && <Icon className="h-6 w-6 shrink-0" />}
        {name}
      </a>
    </li>
  );
}
