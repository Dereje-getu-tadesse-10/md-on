import useMDStore from "./stores/useMd";

const LOCAL_STORAGE_KEY = "markdown_data";

const getMarkdownData = () => {
	const markdownData = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (markdownData) {
		return JSON.parse(markdownData);
	}
	return [];
};

const saveMarkdown = (id: string, title: string, markdown: string) => {
	const markdownData = getMarkdownData();

	const { setAlert } = useMDStore();

	const titleExists = markdownData.some(
		(data: { id: string; title: string; markdown: string }) =>
			data.title === title,
	);

	if (titleExists) {
		setAlert([{ message: "Title already exists", type: "danger" }]);
		return;
	}

	markdownData.push({ id, title, markdown });
	return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(markdownData));
};

const classNames = (...classes: any[]) => {
	return classes.filter(Boolean).join(" ");
};

export { getMarkdownData, saveMarkdown, classNames };
