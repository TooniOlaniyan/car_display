"use client";
import { Transition, Listbox } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { CustomFilterProps } from "@/types";

const CustomFilters = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter()

  const hadleUpdateParmams = () => {
    const newPathName = ''

    router.push(newPathName )
    
  }
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative z-10 w-fit">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transistion ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({active}) =>  `relative cursor-default py-2 select-none px-4 ${
                    active ? "bg-primary-blue text-white" : "text-grey-900"
                  } `}
                >
                  {({ selected }) => <span>{option.title}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilters;
