import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>

       <div className="flex justify-center p-20">
        <Link to='/'>
       <button className="btn border-black">Go to Home</button>
       </Link>
       </div>
       
        <div className="flex justify-center items-center">
            <img className="w-[70vh]" src="https://i.ibb.co/Ny9ZTxK/404-page-not-found-monochromatic-32679.png" alt="" />

        </div>
        
        </>
    );
};

export default ErrorPage;