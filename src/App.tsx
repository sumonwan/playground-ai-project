import Datepicker from './components/Datepicker';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500 p-8">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-8">hello KBTG</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Date</h2>
          <Datepicker />
        </div>
      </div>
    </div>
  )
}

export default App
