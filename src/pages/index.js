import Head from "next/head";
import { Hero, Features, FeaturesBlocks } from "@components";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Home - Next.js + DaisyUI template by Lars van der Niet
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero />
            <Features />
            <FeaturesBlocks />
        </>
    );
}
