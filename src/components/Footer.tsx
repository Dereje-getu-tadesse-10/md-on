

export const Footer = () =>  {
    return (
        <footer className="bg-white py-7">
            <div className="container mx-auto px-4 py-12 md:flex md:items-center md:justify-between">
                <div className="mt-8 md:order-1 md:mt-0 flex justify-between items-center w-full">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; 2023 MD Editor.
                    </p>
                    <p>
                        <a
                            href=""
                            target={"_blank"}
                            className="text-center text-xs leading-5 text-gray-500"
                        >
                            Built with ♥️ by Dereje
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}