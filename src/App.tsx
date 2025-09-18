import Datepicker from './components/Datepicker';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="font-semibold text-gray-800">Academy</span>
          </div>
        </div>
        
        <nav className="mt-6">
          <div className="px-6 py-3 bg-purple-100 border-r-4 border-purple-600">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-purple-600 rounded"></div>
              <span className="font-medium text-purple-600">Dashboard</span>
            </div>
          </div>
          
          <div className="px-6 py-3 text-gray-600 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Courses</span>
            </div>
          </div>
          
          <div className="px-6 py-3 text-gray-600 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Chats</span>
            </div>
          </div>
          
          <div className="px-6 py-3 text-gray-600 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Grades</span>
            </div>
          </div>
          
          <div className="px-6 py-3 text-gray-600 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Schedule</span>
            </div>
          </div>
          
          <div className="px-6 py-3 text-gray-600 hover:bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span>Settings</span>
            </div>
          </div>
        </nav>

        {/* Premium subscription card */}
        <div className="mx-6 mt-8 p-4 bg-purple-100 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
          </div>
          <h3 className="font-semibold text-center mb-2">Premium subscription</h3>
          <p className="text-sm text-gray-600 text-center mb-4">Buy Premium and get access to new courses</p>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
            More detailed
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              <span>🔔</span>
            </div>
            <span className="font-medium">Profile</span>
            <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* New Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">New Courses</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Geography Course */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-orange-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="font-semibold mb-1">Geography</h3>
              <p className="text-gray-500 text-sm mb-4">12 lessons</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white"></div>
                </div>
                <button className="w-8 h-8 bg-orange-400 rounded-lg text-white">→</button>
              </div>
            </div>

            {/* JavaScript Course */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-purple-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-semibold mb-1">JavaScript Course</h3>
              <p className="text-gray-500 text-sm mb-4">15 lessons</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                </div>
                <button className="w-8 h-8 bg-purple-400 rounded-lg text-white">→</button>
              </div>
            </div>

            {/* Photography Course */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-blue-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="font-semibold mb-1">Photography Course</h3>
              <p className="text-gray-500 text-sm mb-4">8 lessons</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-red-400 rounded-full border-2 border-white"></div>
                </div>
                <button className="w-8 h-8 bg-blue-400 rounded-lg text-white">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* My Courses Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold">My Courses</h2>
            <span className="text-blue-600 cursor-pointer">View All</span>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-4">Course name</th>
                  <th className="pb-4">Start</th>
                  <th className="pb-4">Rate</th>
                  <th className="pb-4">Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600">🎨</span>
                      </div>
                      <div>
                        <div className="font-medium">Web Design</div>
                        <div className="text-sm text-gray-500">15 lessons</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600">May 12</td>
                  <td className="py-4 font-medium">4.8</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Elementary</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">💻</span>
                      </div>
                      <div>
                        <div className="font-medium">Development Basics</div>
                        <div className="text-sm text-gray-500">8 lessons</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-600">May 14</td>
                  <td className="py-4 font-medium">4.4</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Intermediate</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg p-6 mb-6 text-center">
          <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">👨</span>
          </div>
          <h3 className="font-semibold">Esther Howard ✓</h3>
          <p className="text-gray-500 text-sm">Elementary</p>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <Datepicker />
        </div>

        {/* Homework Progress */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="font-semibold mb-4">Homework progress</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                  CSS
                </div>
                <div>
                  <div className="font-medium text-sm">Styling with CSS</div>
                  <div className="text-xs text-gray-500">10 tasks</div>
                </div>
              </div>
              <span className="text-lg">→</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white text-sm">
                  60%
                </div>
                <div>
                  <div className="font-medium text-sm">Basics of programming</div>
                  <div className="text-xs text-gray-500">10 tasks</div>
                </div>
              </div>
              <span className="text-lg">→</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm">
                  25%
                </div>
                <div>
                  <div className="font-medium text-sm">Learn to Program in Java</div>
                  <div className="text-xs text-gray-500">20 tasks</div>
                </div>
              </div>
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
