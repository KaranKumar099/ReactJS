import { Link } from "react-router-dom"
import {AiOutlineEnter} from "react-icons/ai"

function ErrorPage() {
  return (
    <>
        <div className='w-screen h-screen bg-[#1E1A19] text-white p-2'>
            <h2>ERROR 404 ERROR 404 ERROR 404 </h2>
            <h2>ERROR 404 ERROR 404 ERROR 404 </h2>
            <h2>ERROR 404 ERROR 404 ERROR 404 </h2>
            <h2>ERROR 404 ERROR 404 ERROR 404 </h2>
            <button className="bg-white text-black px-5 py-2 rounded-lg mt-5 flex gap-2 items-center"><Link to={"/"}>Back To Home</Link><AiOutlineEnter /></button>
        </div>
    </>
  )
}

export default ErrorPage