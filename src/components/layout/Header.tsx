// Placeholder header component for Figma design integration

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Replace with Figma logo/brand asset */}
            <div className="text-xl font-bold text-orange-600">
              Bonac Fit
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {/* Replace with Figma navigation design */}
            <a href="#" className="text-gray-700 hover:text-orange-600">Workouts</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Coaching</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Store</a>
            <a href="#" className="text-gray-700 hover:text-orange-600">Progress</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Replace with Figma button designs */}
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}