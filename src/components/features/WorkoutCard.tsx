// Placeholder workout card component for Figma design integration

interface WorkoutCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function WorkoutCard({ title, description, duration, difficulty }: WorkoutCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Replace with Figma workout image */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <div className="text-gray-500 text-4xl">🏋️</div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">⏱️ {duration}</span>
          {/* Replace with Figma button design */}
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700">
            Start Workout
          </button>
        </div>
      </div>
    </div>
  );
}