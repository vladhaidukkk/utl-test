import type { FC } from 'react';
import { useState } from 'react';

import { ChevronDownIcon, ExclamationIcon } from '@heroicons/react/solid';

import type { IEntity, Entities } from 'shared/api';
import { cn } from 'shared/helpers';

interface IDropdownList {
  label: Entities;
  data: IEntity[];
  isLoading: boolean;
  error?: string | null;
  onSelect: (label: Entities, slug: string) => void;
  onMatch: (label: Entities, slug: string) => boolean;
}

export const DropdownList: FC<IDropdownList> = ({
  label,
  data,
  isLoading,
  error,
  onSelect,
  onMatch,
}) => {
  const [isOpened, setOpened] = useState(false);

  const handleToggle = () => {
    if (error) return;

    setOpened((prev) => !prev);
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-scroll">
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          'flex w-full items-center justify-between rounded border px-4 py-2 capitalize shadow-md',
          {
            'border-slate-200 bg-slate-100 text-slate-800': !error,
            'cursor-not-allowed border-red-200 bg-red-100 text-red-800': error,
          }
        )}
      >
        <span>{label}</span>
        {!error ? (
          <ChevronDownIcon
            className={cn('h-5 transition-transform duration-200', { 'rotate-180': isOpened })}
          />
        ) : (
          <ExclamationIcon
            className={cn('h-5 transition-transform duration-200', { 'rotate-180': isOpened })}
          />
        )}
      </button>
      <ul
        className={cn(
          'flex-1 overflow-scroll rounded border border-slate-200 bg-slate-100 px-4 py-2 shadow-md transition-all duration-200',
          {
            'visible opacity-100': isOpened,
            'invisible opacity-0': !isOpened,
          }
        )}
      >
        {!isLoading ? (
          data.map((item) => {
            const key = `${label}-${item.id}`;

            return (
              <li key={key}>
                <label htmlFor={key} className="flex items-center gap-2 text-slate-700">
                  <input
                    id={key}
                    type="checkbox"
                    name={label}
                    onChange={() => onSelect(label, item.slug)}
                    checked={onMatch(label, item.slug)}
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            );
          })
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              className="mr-3 h-5 w-5 animate-spin text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
      </ul>
    </div>
  );
};
