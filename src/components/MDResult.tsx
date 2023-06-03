import React from "react";
import ReactMarkdown from "react-markdown";
import useMDStore from "../stores/useMd";
export const MDResult = () => {
	const { markdown } = useMDStore();
	return (
		<article className={"prose bg-gray-50 px-4 py-4 rounded-lg h-full"}>
			<ReactMarkdown>{markdown}</ReactMarkdown>
		</article>
	)
};
