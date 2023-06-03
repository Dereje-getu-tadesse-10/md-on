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

export enum TypeAlert {
	Success = "success",
	Danger = "danger",
}

type AlertType = {
	message: string;
	type?: TypeAlert;
};

export type { Item, WithDropdownProps, AlertType };
