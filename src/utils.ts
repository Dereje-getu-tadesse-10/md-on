import { AlertType, TypeAlert } from "./types";
import { SetState } from "zustand";
const LOCAL_STORAGE_KEY = "markdown_data";

const getMarkdownData = () => {
	const markdownData = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (markdownData) {
		return JSON.parse(markdownData);
	}
	return [];
};

const saveMarkdown = (
	id: string,
	title: string,
	markdown: string,
	setAlert: SetState<AlertType>,
) => {
	const markdownData = getMarkdownData();

	const existingEntryIndex = markdownData.findIndex(
		(data: { title: string }) => data.title === title,
	);

	if (existingEntryIndex !== -1) {
		markdownData[existingEntryIndex] = { id, title, markdown };
		setAlert({
			message: "Updated",
			type: TypeAlert.Success,
		});
	} else {
		markdownData.push({ id, title, markdown });
		setAlert({
			message: "Saved",
			type: TypeAlert.Success,
		});
	}

	return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(markdownData));
};

const classNames = (...classes: any[]) => {
	return classes.filter(Boolean).join(" ");
};

export { getMarkdownData, saveMarkdown, classNames };
