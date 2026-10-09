import { Link } from "react-router";

export const Navbar = () => {
    return (
        <nav className="bg-[#12191D] font-nanum text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl">
            포핸즈
        </Link>
    </nav>
    )
}