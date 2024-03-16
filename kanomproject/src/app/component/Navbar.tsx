
export default function Navbar() {
    return (
    <>
<nav className=" shadow-2xl border-gray-200 bg-blue-400 max-h-screen-xl " >

<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" >
          <div className="flex justify-between items-center h-full">
            
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>

                  <p>About Uss</p>
              
              </li>
              <li>
            
                  <p>Services</p>
               
              </li>
              <li>
               
                  <p>Contacts</p>
                
              </li>
            </ul>
           
          </div>
  <div className="rounded-lg sm:rounded md:text-xs flex space-x-4">
  <div className="hover:bg-orange-600 rounded-lg flex items-center justify-center  p-2">
    <a href="/login" className="font-bold ">Login</a>
  </div>
        </div>

  
</div>
     














</nav>
    </>  
    );
  }
  