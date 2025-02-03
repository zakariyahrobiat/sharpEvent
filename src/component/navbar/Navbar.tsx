

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white px-3 md:px-20 py-5 font-[inter] ">
      
        <p className="text-2xl font-extrabold text-[#0166FF]">SHARP EVENT</p>
        <p className="text-base font-bold hidden md:block">List Your Space</p>
        <div className="hidden md:flex justify-center items-center gap-2">
            <button className="border border-[#0166FF] text-xs font-semibold rounded-lg px-5 py-2 text-[#0166FF]">Log in</button>
            <button className="bg-[#0166FF] text-white text-xs font-semibold rounded-lg px-5 py-2">Sign up</button>
        </div>

    </div>
  )
}

export default Navbar