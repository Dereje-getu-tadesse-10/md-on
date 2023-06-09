import useMDStore from "../stores/useMd";
import { Alert } from "./Alert";
import { ReactNode, useEffect } from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";

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
			};
		}
	}, [alert]);

	return (
		<>
		<Header />
		<main className="container mx-auto px-4 md:px-0">
			{alert?.message && <Alert message={alert.message} type={alert} />}
			<section className={"min-h-[80vh] grid md:grid-cols-2 md:gap-2"}>
				{children}
			</section>
		</main>
		<Footer />
		</>
	);
};
