import React from "react";

export interface ICustomProps {
    name: string
}

export interface IAppProps {
    Component: React.JSXElementConstructor<any>,
    pageProps: React.ComponentProps<any>
}
