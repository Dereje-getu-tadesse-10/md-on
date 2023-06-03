


export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="container mx-auto px-4">
            <section className={"min-h-screen grid md:grid-cols-2 md:gap-2 py-4"}>
                {children}
            </section>
        </main>
    );
};