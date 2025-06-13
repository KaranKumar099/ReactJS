
function Contact() {
  const handleSubmit=(formData)=>{
    // console.log(formData.entries())
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData)

  }
  return (
    <>
      <form action={handleSubmit} className='bg-slate-700 flex flex-col justify-center items-center p-8 gap-5'>
        <h1 className='text-2xl text-white'>Contact Us :-)</h1>
        <input type="text" name="username" required placeholder='Enter Your Name...' className='bg-white w-md rounded p-2'/>
        <input type="email" name="email" required placeholder='Enter Your Email...' className='bg-white w-md rounded p-2'/>
        <textarea name="message" required placeholder='Write Your Msg..' className='bg-white w-md h-40 rounded p-2'></textarea>
        <button type="submit" className='bg-red-500 w-md py-2 px-4 rounded text-left '>Send</button>
      </form>
    </>
  )
}

export default Contact