import React from 'react';

import { BrowserRouter } from "react-router-dom";
import CustomRoutes from '../../routes/CustomRoutes';
 

function Layout() {
    
    return (            
        <BrowserRouter>
            
            {/* <Header /> */}
                <CustomRoutes />
            {/* <Footer /> */}

        </BrowserRouter>
    );
}

export default Layout;