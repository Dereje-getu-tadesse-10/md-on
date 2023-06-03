import {AlertType, Item, TypeAlert} from "../types";
import { create } from "zustand";
import { getMarkdownData } from "../utils";

const getData = () => {
	const markdownData = getMarkdownData();
	if (markdownData?.length > 0) {
		return markdownData
	}
	return [];
}

type MDContext = {
	markdown: string;
	setMarkdown: (markdown: string) => void;
	title: string;
	setTitle: (title: string) => void;
	data: Item[];
	setData: (data: Item[]) => void;
	alert: AlertType;
	setAlert: (alert: AlertType) => void;
};

const useMDStore = create<MDContext>((set) => ({
	markdown: getData()[0]?.markdown || "# Hello World",
	setMarkdown: (markdown) => set({ markdown }),
	title: getData()[0]?.title || "Hello World",
	setTitle: (title) => set({ title }),
	data: [],
	setData: (data) => set({ data }),
	alert: {
		message: "",
		type: TypeAlert.Success,
	},
	setAlert: (alert) => set({ alert }),
}));

export default useMDStore;
