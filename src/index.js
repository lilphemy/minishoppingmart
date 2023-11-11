import React from "react";
import ReactDom from "react-dom/client"
import {MainPageChal} from "./pages/mainwebpage";

class PageViewer extends React.Component {

    
    render () {

        return (
            <React.StrictMode>
                <React.Fragment>
                    <main>
                        <MainPageChal/>
                    </main>
                </React.Fragment>
            </React.StrictMode>
        )
    }
}


const rootDir = ReactDom.createRoot(document.getElementById("root"))

rootDir.render(<PageViewer/>)