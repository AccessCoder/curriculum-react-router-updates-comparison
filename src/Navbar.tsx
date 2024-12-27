import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <Link to={'/'}>Main</Link>
            <Link to={'/multiply'}>Multiply</Link>
        </>
    )
}