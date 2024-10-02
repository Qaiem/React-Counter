import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-300 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-center text-3xl sm:text-4xl lg:text-5xl p-4 lg:p-6">
          React Counter
        </h1>

        <div className="bg-gradient-to-b from-gray-700 to-gray-100 w-[90%] sm:w-[70%] lg:w-[40%] min-h-[30%] sm:min-h-[40%] lg:min-h-[50%] fixed flex flex-col items-center justify-center inset-x-0 mx-auto p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-gray-900 text-5xl sm:text-6xl lg:text-7xl mb-4 sm:mb-6">
            {count}
          </h2>

          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-indigo-600 text-white py-2 px-4 sm:py-3 sm:px-5 rounded hover:bg-indigo-700 w-full sm:w-1/3"
            >
              Add
            </button>

            <button
              onClick={() => count > 0 && setCount(count - 1)}
              className="bg-gray-600 text-white py-2 px-4 sm:py-3 sm:px-5 rounded hover:bg-gray-700 w-full sm:w-1/3"
            >
              Subtract
            </button>

            <button
              onClick={() => setCount(0)}
              className="bg-teal-600 text-white py-2 px-4 sm:py-3 sm:px-5 rounded hover:bg-teal-700 w-full sm:w-1/3"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
