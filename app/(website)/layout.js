import React from "react";
import Header from '@/components/header/header'

const layout = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default layout