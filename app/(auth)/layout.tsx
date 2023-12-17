import {PropsWithChildren} from "react";

export default function Layout({ children }: PropsWithChildren ) {
    return (
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
    );
}