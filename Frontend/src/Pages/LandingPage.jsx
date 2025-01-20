import React from "react";

const LandingPage = () => {
  const handleButtonClick = () => {
    alert("Thanks for joining Jokes Market!");
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-sans text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Jokes Market</h1>
          <p className="text-lg mt-2">Your one-stop hub for laughs and good vibes!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Jokes Market?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Looking for a quick laugh? Or maybe you want to share your sense of humor with the world? 
            Jokes Market is the perfect place to discover, enjoy, and share the funniest jokes out there.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 shadow-md"
          >
            Get Started Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="text-center text-sm">
          &copy; 2025 Jokes Market | All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;