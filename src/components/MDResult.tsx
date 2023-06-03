import useMDStore from "../stores/useMd";
import React from "react";
import ReactMarkdown from "react-markdown";

export const MDResult = () => {
	const { markdown } = useMDStore();

	return (
		<article
			className={
				"prose max-w-none bg-gray-50 px-4 py-4 rounded-lg max-h-screen overflow-scroll w-full"
			}
		>
			<ReactMarkdown>{markdown}</ReactMarkdown>
		</article>
	);
};
