interface SocialButtonProps {
  name: string;
  SVGIcon: any;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function SocialButton({
  name,
  SVGIcon,
  href,
  onClick,
}: SocialButtonProps) {
  return (
    <a
      href={href ?? "#"}
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-900 focus-visible:ring-transparent"
    >
      <SVGIcon/>
      <span className="text-sm font-semibold leading-6">{name}</span>
    </a>
  );
}
