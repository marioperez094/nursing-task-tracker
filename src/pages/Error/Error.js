import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <Link to='/'>
        <h5>Return Home?</h5>
      </Link>
      <h3>
        The page you are trying to load does not exist.
      </h3>
    </div>
  )
}

export default Error;