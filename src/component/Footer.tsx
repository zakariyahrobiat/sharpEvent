

const Footer = () => {
  return (
    <div className="bg-[#D8DAE8] px-3 md:px-20 py-5 w-full md:flex justify-between gap-10 text-left mt-10 font-[Roboto]">
        <div className="w-2/3 md:w-[30%] md:px-16">
        <h1 className="text-2xl font-extrabold text-[#0166FF] pb-3">SHARP EVENT</h1>
        <p className="text-xl font-semibold leading-6">Sharp Event is a service provider site for finding the best places to host your events</p>
    </div>
    <div className="hidden md:flex justify-between items-start md:w-[70%] md:px-20">
    <div >
        <h2 className="text-2xl font-semibold text-black pb-3">Our service</h2>
        <p className="text-xl font-semibold text-black pb-1">Help center</p>
        <p className="text-xl font-semibold text-black pb-1">FAQ</p>
    </div>
    <div>
        <h2 className="text-2xl font-semibold text-black pb-3">Company</h2>
        <p className="text-xl font-semibold text-black pb-1">About us</p>
        <p className="text-xl font-semibold text-black pb-1">Host</p>
        <p className="text-xl font-semibold text-black pb-1">Activities</p>
        <p className="text-xl font-semibold text-black pb-1">Cities</p>
    </div>
    <div>
        <h2 className="text-2xl font-semibold text-black pb-3">Get in touch</h2>
        <p className="text-xl font-semibold text-black pb-1">Emailadress@gmail.com</p>
        <p className="text-xl font-semibold text-black pb-1">Address of the company</p>
    </div>
    
    </div>
    <div className="w-full py-5 md:hidden">
      <div className=" w-full grid grid-cols-2 justify-around">
    <div className="w-full" >
        <h2 className="text-2xl font-semibold text-black pb-3">Our service</h2>
        <p className="text-xl font-semibold text-black pb-1">Help center</p>
        <p className="text-xl font-semibold text-black pb-1">FAQ</p>
    </div>
    <div className="w-full">
        <h2 className="text-2xl font-semibold text-black pb-3">Company</h2>
        <p className="text-xl font-semibold text-black pb-1">About us</p>
        <p className="text-xl font-semibold text-black pb-1">Host</p>
        <p className="text-xl font-semibold text-black pb-1">Activities</p>
        <p className="text-xl font-semibold text-black pb-1">Cities</p>
    </div>
    </div>
    <div>
        <h2 className="text-2xl font-semibold text-black pb-3">Get in touch</h2>
        <p className="text-xl font-semibold text-black pb-1">Emailadress@gmail.com</p>
        <p className="text-xl font-semibold text-black pb-1">Address of the company</p>
    </div>
    
    </div>
    </div>
  )
}

export default Footer