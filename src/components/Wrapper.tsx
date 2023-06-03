import {ReactNode, useEffect} from 'react';
import { Alert } from "./Alert";
import useMDStore from "../stores/useMd";

export const Wrapper = ({ children }: { children: ReactNode }) => {
	const { alert, setAlert } = useMDStore();


	useEffect(() => {
		if (alert) {
			const timer = setTimeout(() => {
				setAlert({
					message: "",
				});
			}, 3000);

			return () => {
				clearTimeout(timer);
			}
		}
	}, [alert]);

	return (
		<main className="container mx-auto px-4">
			{alert?.message && <Alert message={alert.message} type={alert} />}
			<section className={"min-h-screen grid md:grid-cols-2 md:gap-2 py-7"}>
				{children}
			</section>
		</main>
	);
};
