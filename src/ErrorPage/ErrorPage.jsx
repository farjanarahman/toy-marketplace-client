import { Link } from "react-router-dom";
import './ErrorPage.css'

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="text-center font-bold text-red-600 mt-5 no-underline">404 Error: Page Not Found</h1>
      <p className="text-center mt-4">Sorry, the page you are looking for does not exist.</p>
      <img className="mx-auto d-block mt-3" style={{ height: "300px", width: "400px", color: "#f90606" }} src="https://static.vecteezy.com/system/resources/previews/000/378/201/original/sad-emoji-vector-icon.jpg" alt="" /> <br />
      
      <Link to="/" className="text-center text-blue-600 underline">Go back to home page</Link>
    </div>
  );
}

export default ErrorPage;
