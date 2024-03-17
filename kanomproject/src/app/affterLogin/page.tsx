import NavBar from '@/app/component/navbar';

export default function Hpage() {
  return (
    <>
      <NavBar />
      <section className="bg-gray-800 ">
      <div className=" flex-col justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex justify-center">
  <form className="max-w-sm mx-auto flex flex-row space-x-4">
    <input
      type="text"
      id="text1"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="กรอกรหัสหรือชื่อวิชา"
      required
    />
    <input
      type="text"
      id="text2"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="Section"
      required
    />
    <input
      type="text3"
      id="text3"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder="ปีการศึกษา"
      required
    />
    <button
     type="button" 
     className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green
     </button>
    
  </form>
</div>

      </div>
      </section>
    </>
  );
}
