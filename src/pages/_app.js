import "../styles/globals.css";

import { Navbar, Footer } from "@components";

function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />

            <main className="container mx-auto">
                <Component {...pageProps} />
            </main>

            <Footer />
        </>
    );
}
export default App;
