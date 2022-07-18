import type { FC } from 'react';
import { useState } from 'react';

import { ChevronDownIcon, ExclamationIcon } from '@heroicons/react/solid';

import type { IEntity, EntitiesLabels } from 'shared/api';
import { cn } from 'shared/helpers';
import { Loader } from 'shared/uikit';

interface IDropdownList {
  label: EntitiesLabels;
  data: IEntity[];
  isLoading: boolean;
  error?: string | null;
  onSelect: (slug: string) => void;
  onMatch: (slug: string) => boolean;
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
                    onChange={() => onSelect(item.slug)}
                    checked={onMatch(item.slug)}
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            );
          })
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Loader />
          </div>
        )}
      </ul>
    </div>
  );
};
