import React from "react";
import ReactDom from "react-dom/client"
import{BrowserRouter as Router} from "react-router-dom"
import RouterPath from "./App";


class PageViewer extends React.Component {

    
    render () {

        return (
            <React.StrictMode>
                <Router>
                <React.Fragment>
                    <RouterPath/>
                    {/* <main>
                        <MainPageChal/>
                    </main> */}
                </React.Fragment>
                </Router>
                
            </React.StrictMode>
        )
    }
}


const rootDir = ReactDom.createRoot(document.getElementById("root"))

rootDir.render(<PageViewer/>)