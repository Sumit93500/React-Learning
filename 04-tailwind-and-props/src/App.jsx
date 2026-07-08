
import './App.css'
import Card from "./components/Card"

function App() {

  const obj = {
    name: "Sumit",
    broName: "Rohit"
  }

  let newArr = [1,2,3,4];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      {/* This is an card , instead of writing the code here, we can create a component and import it here. This is a better way to write code. */}

    {/* Props are passedf here(username,btnText are props here which are destructured in Card.jsx) */}
   <Card username="Sumit" btnText = "click me"/> 
   <Card username="Rohit" />



   
{/* -----------------------------Card Code(that is now written in Card.jsx in Component folder)----------------------------- */}



   {/* <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">
      Delba
    </h1>

    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Excepturi, debitis?
    </p>

    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile &rarr;
    </button>
  </div>
</div> */}
    </>
  )
}

export default App
