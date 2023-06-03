import useMDStore from "../stores/useMd";
import { getMarkdownData, saveMarkdown } from "../utils";
import WithDropdown from "./WithDropdown";
import { ChangeEvent, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const MDInput = () => {
	const { markdown, setMarkdown,  data, setData, setAlert, setTitle, title } = useMDStore();
	const id = uuid();
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMarkdown(event.target.value);
	};

	useEffect(() => {
		setData(getMarkdownData());
	}, []);

	return (
		<div className={"relative w-full h-full"}>
			<div className="relative my-2">
				<label
					htmlFor="title"
					className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
				>
					Title
				</label>
				<input
					type="text"
					name="title"
					id="title"
					onChange={(event) => {
						setTitle(event.target.value);
					}}
					value={title}
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-0 my-2 px-2"
					placeholder="Jane Smith"
				/>
			</div>
			<textarea
				className={"outline-0 resize-none w-full h-full"}
				onChange={handleChange}
				value={markdown}
			/>
			<WithDropdown
				onClick={() => {
					saveMarkdown(id, title, markdown, setAlert);
					setData(getMarkdownData());
				}}
				text={"Save"}
				items={data}
			/>
		</div>
	);
};





