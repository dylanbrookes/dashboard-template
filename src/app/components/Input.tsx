import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

interface InputProps {
  label?: string;
  altLabel?: string;
  altLabelLink?: string;
  type?: HTMLInputTypeAttribute | undefined;
  autocomplete?: string;
  valueSetter?: Dispatch<SetStateAction<string>>;
  onEnter?: () => void;
}

export default function Input({
  label,
  altLabel,
  altLabelLink,
  type,
  autocomplete,
  valueSetter,
  onEnter,
}: InputProps) {
  return (
    <div className="text-white">
      {(label || altLabel) && (
        <div className="flex items-center justify-between">
          {label && (
            <label className="block text-sm font-medium leading-6">
              {label}
            </label>
          )}
          {altLabel && (
            <div className="text-sm">
              <a
                href={altLabelLink || "#"}
                className="font-semibold text-indigo-400 hover:text-indigo-300"
              >
                {altLabel}
              </a>
            </div>
          )}
        </div>
      )}
      <div className="mt-2">
        <input
          onKeyDown={(e) => {
            if (onEnter && e.key === "Enter") {
              onEnter();
            }
          }}
          onChange={(e) => {
            if (valueSetter) {
              valueSetter(e.target.value);
            }
          }}
          type={type}
          autoComplete={autocomplete}
          required
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
