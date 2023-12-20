import {PropsWithChildren} from "react";
import { Navbar } from "./_components/navbar";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar/>
            <div className="flex h-full pt-20">{ children }</div>
        </>
    );
}