import {PropsWithChildren} from "react";

export default function Layout({ children }: PropsWithChildren ) {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="bg-red-500 w-full">
                {children}
            </nav>
        </div>
    );
}