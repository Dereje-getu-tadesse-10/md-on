import { AlertType } from "../types";
import { classNames } from "../utils";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

export const Alert = ({
	message,
	type,
}: { message: string; type: AlertType }) => {
	return (
		<div
			className={classNames(`
        rounded-md 
        ${type.type === "success" ? "bg-green-100" : "bg-red-100"}
        p-4 fixed z-20 right-5 top-5
        `)}
		>
			<div className="flex">
				<div className="flex-shrink-0">
					{type.type === "success" ? (
						<CheckCircleIcon
							className="h-5 w-5 text-green-400"
							aria-hidden="true"
						/>
					) : (
						<XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
					)}
				</div>
				<div className="ml-3">
					<h3 className="text-sm font-medium text-red-800">{message}</h3>
				</div>
			</div>
		</div>
	);
};
