import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center bg-gray-900 text-white mt-20">
      <p className="text-lg font-semibold mb-2">TaskFlow</p>
      <p className="text-gray-400">Organize better. Work smarter.</p>
      <p className="text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </p>
    </footer>
  );
}
