import React from 'react';
import CustomComponent from "../components/CustomComponent";

const Index: React.FunctionComponent = () => {
    return (
        <div>
            <h1>Index</h1>
            <p>Soy un index con <span className="spanPrimary">color primario</span></p>
            <CustomComponent name="NextJS" />
        </div>
    )
}

export default Index;
