import { Link } from "react-router-dom"

export default function Header()
{
    return (
        <header className="flex my-5 justify-between items-center px-24">
            <div className="flex justify-between gap-x-3">
                <h2 className="text-2xl font-accent font-bold">Arabic Learner</h2>
            </div>
            <div className="flex justify-between gap-x-3"> 
            <p className="font-head font-semibold hover:text-textGrayPrimary cursor-pointer"><Link to="/">Home</Link></p>
                <p className="font-head font-semibold hover:text-textGrayPrimary cursor-pointer"><Link to="/levels">Levels</Link></p>
                <p className="font-head font-semibold hover:text-textGrayPrimary cursor-pointer"><Link to="/resources">Resources</Link></p>
            </div>
        </header>
    )
} 