/* eslint-disable react/prop-types */

import Navbar from "../Navbar/Navbar";


const MainLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
          
        </>
    );
};

export default MainLayout;