import useMDStore from "../stores/useMd";
import { ChangeEvent } from 'react';

export const MDInput = () => {
	const { markdown, setMarkdown } = useMDStore();

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMarkdown(event.target.value);
	}

	return <textarea
		className={"outline-0 resize-none h-full w-full"}
		onChange={handleChange}
		defaultValue={markdown}
	/>;
};
