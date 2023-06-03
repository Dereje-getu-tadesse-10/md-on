import useMDStore from "../stores/useMd";
import { classNames } from "../utils";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import type { Item, WithDropdownProps } from "../types";

export default function WithDropdown({
	onClick,
	text,
	items,
}: WithDropdownProps) {
	const { setMarkdown, setTitle } = useMDStore();

	return (
		<div className="inline-flex rounded-md shadow-sm absolute right-0 bottom-5">
			<button
				type="button"
				className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
				onClick={onClick}
			>
				{text}
			</button>
			<Menu as="div" className="relative -ml-px block">
				<Menu.Button className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
					<span className="sr-only">Open options</span>
					<ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
				</Menu.Button>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 bottom-10 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							{items?.map((item: Item) => (
								<Menu.Item key={item?.id}>
									{({ active }) => (
										<button
											className={classNames(
												active ? "bg-gray-100 text-gray-900" : "text-gray-700",
												"block px-4 py-2 text-sm w-full text-left",
											)}
											onClick={() => {
												setMarkdown(item.markdown);
												setTitle(item.title);
											}}
										>
											{item.title}
										</button>
									)}
								</Menu.Item>
							))}
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
