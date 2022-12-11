import React from 'react';
import "../css/styles.scss";
import {IAppProps} from "../interfaces/IProps";

const App: React.FunctionComponent<IAppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App;
