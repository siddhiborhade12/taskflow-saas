import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 text-center bg-white">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 text-center">
  Simple Pricing
</h2>


      <div className="max-w-4xl mx-auto border shadow-lg p-10 rounded-2xl bg-blue-50">
        <h3 className="text-3xl font-semibold mb-4">Free Plan</h3>
        <p className="text-gray-700 mb-6">Unlimited tasks, projects & collaboration — forever free.</p>
        <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-md">
          Start for Free
        </button>
      </div>
    </section>
  );
}
