import { Link } from "@tanstack/react-router"

export default function Header() {
return (
    <div className='headingBox'>
        <div className='linkBox'>
            <Link to='/about' className='text'>About Me</Link>
        </div>
        <p className='heading' >Are you ready to Physics!!!</p>
        <div className='linkBox'>
            <Link to='/guide' className='text'>Guide</Link>
        </div>
    </div>
    )
}