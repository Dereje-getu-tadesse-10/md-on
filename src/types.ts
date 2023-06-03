type Item = {
	id: string;
	title: string;
	markdown: string;
};

type WithDropdownProps = {
	onClick: () => void;
	text: string;
	items: Item[];
};

type AlertType = {
	message: string;
	type: string;
};

export type { Item, WithDropdownProps, AlertType };
