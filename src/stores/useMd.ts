import { AlertType, Item } from "../types";
import { create } from "zustand";

type MDContext = {
	markdown: string;
	setMarkdown: (markdown: string) => void;
	title: string;
	setTitle: (title: string) => void;
	data: Item[];
	setData: (data: Item[]) => void;
	alert: AlertType[];
	setAlert: (alert: AlertType[]) => void;
};

const useMDStore = create<MDContext>((set) => ({
	markdown: "# Hello World",
	setMarkdown: (markdown) => set({ markdown }),
	title: "Hello World",
	setTitle: (title) => set({ title }),
	data: [],
	setData: (data) => set({ data }),
	alert: [
		{
			message: "",
			type: "",
		},
	],
	setAlert: (alert) => set({ alert }),
}));

export default useMDStore;
