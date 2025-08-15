import WorkoutCard from '@/components/features/WorkoutCard';

export default function WorkoutsPage() {
  // This data would typically come from an API or database
  const workouts = [
    {
      title: 'Full Body Strength',
      description: 'A comprehensive strength training session targeting all major muscle groups.',
      duration: '45 min',
      difficulty: 'Intermediate' as const,
    },
    {
      title: 'HIIT Cardio Blast',
      description: 'High-intensity interval training to boost your cardiovascular fitness.',
      duration: '30 min',
      difficulty: 'Advanced' as const,
    },
    {
      title: 'Beginner Friendly',
      description: 'Perfect for those just starting their fitness journey.',
      duration: '25 min',
      difficulty: 'Beginner' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Workout Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed workouts. 
            Each program is crafted to help you achieve your fitness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <WorkoutCard
              key={index}
              title={workout.title}
              description={workout.description}
              duration={workout.duration}
              difficulty={workout.difficulty}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center bg-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            🎨 Design Integration Note
          </h2>
          <p className="text-orange-700 max-w-2xl mx-auto">
            This page uses placeholder components that should be styled according to your 
            <strong> NeuroFit-AI-Workout-Tracker Figma design</strong>. 
            Replace the workout cards, layout, and styling with your custom design system.
          </p>
        </div>
      </div>
    </div>
  );
}