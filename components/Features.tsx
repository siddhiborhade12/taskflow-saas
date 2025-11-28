import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-24 text-center bg-gray-50">
      <h2 className="text-4xl font-extrabold mb-14 text-gray-900">
        🚀 Powerful Features to Boost Productivity
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
        
        {/* Feature 1 */}
        <div className="bg-white border shadow-lg p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Task Tracking</h3>
          <p className="text-gray-600">
            Add, organize, and manage tasks effortlessly with smart automation.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white border shadow-lg p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Team Collaboration</h3>
          <p className="text-gray-600">
            Assign tasks, share updates, and collaborate with your team in real time.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white border shadow-lg p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Progress Insights</h3>
          <p className="text-gray-600">
            Track productivity, detect bottlenecks, and meet deadlines faster.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white border shadow-lg p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Sync</h3>
          <p className="text-gray-600">
            Access your tasks and projects anywhere — all your data is safely synced.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white border shadow-lg p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Reminders</h3>
          <p className="text-gray-600">
            Never miss deadlines with AI-powered priority alerts and reminders.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white border shadow-lg p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Reports & Analytics</h3>
          <p className="text-gray-600">
            Generate weekly/monthly reports to measure performance and growth.
          </p>
        </div>
      </div>
    </section>
  );
}
