export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            Bonac Fit - Workout Tracker
          </h1>
          <p className="text-xl text-gray-600">
            Modern workout tracker with premium features, online coaching, equipment & supplement store, and multi-method payments.
          </p>
          <p className="text-lg text-orange-600 font-semibold">
            Inspired by IFBB Pro William Bonac
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">🏋️ Workout Tracking</h3>
            <p className="text-gray-600">Track your workouts, sets, reps, and progress with precision.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">💪 Online Coaching</h3>
            <p className="text-gray-600">Get personalized coaching from certified trainers.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">🛒 Equipment Store</h3>
            <p className="text-gray-600">Shop for premium workout equipment and supplements.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">💳 Multi-Payment</h3>
            <p className="text-gray-600">Visa, MoMo, Voda Cash, and bank transfer options.</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-orange-50 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold mb-3 text-orange-800">🎨 Design Integration Ready</h3>
          <p className="text-orange-700">
            This project is set up to integrate assets from the <strong>NeuroFit-AI-Workout-Tracker Figma design</strong>. 
            Check the <code className="bg-orange-100 px-2 py-1 rounded">assets</code> directory for placeholders 
            and the README for integration instructions.
          </p>
        </div>
      </main>
    </div>
  );
}
