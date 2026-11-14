export default function ProductDetailsLayout({
    children,
}) {
    return (
        <>
            {children}

            <section>
                <h2>Featured Products</h2>
                {/* Featured products will be displayed here */}
            </section>
        </>
    );
}