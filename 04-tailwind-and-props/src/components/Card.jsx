import React from 'react'

// {username, btnText="visit profile"} --> This is props passing , destructuring is done here, good approach then normal props passing , also btnText = "visit profile" is default value for btnText prop, if we don't pass any value for btnText then it will take this default value.
const Card = ({username, btnText="visit profile"}) => {
  // console.log("props", props);
  return (
     <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">
      {username}
    </h1>

    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Excepturi, debitis?
    </p>

    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } 
    </button>
  </div>
</div>
  )
}

export default Card
