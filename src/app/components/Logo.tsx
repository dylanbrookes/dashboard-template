/* eslint-disable @next/next/no-img-element */
interface LogoProps {
  companyName?: string;
  src: string;
}

export default function Logo({ src, companyName }: LogoProps) {
  return (
    <div className="flex h-16 shrink-0 items-center">
      <img className="h-8 w-auto" src={src} alt="Company Logo" />
      <p className="text-2sm ml-2 text-white">{companyName}</p>
    </div>
  );
}
