import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Link to='/'>
        <h5>Return Home?</h5>
      </Link>
      <h3>
        The page you are trying to load does not exist.
      </h3>
    </>
  )
}

export default Error;