import { GetStartedButton } from "@/components/GetStartedButton";

export default function Home() {


  return (
    
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center bg-blue-600 text-white text-center px-4 py-20">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Classic Car Crew Club
          </h1>
          <p className="my-4 text-xl sm:text-2xl">
            Explore the world of cars with us.
          </p>
          <GetStartedButton/>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Feature
            title="Track Your Cars"
            description="Keep a log of your car's history, modifications, and performance over time."
          />
          <Feature
            title="Manage Profiles"
            description="Customize your user profile and manage multiple cars easily."
          />
          <Feature
            title="Visualize Data"
            description="View detailed charts and statistics to track progress and trends."
          />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 max-w-xl mx-auto">
            We are passionate car enthusiasts dedicated to providing the best
            platform for car lovers to share and track their automotive
            journeys.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} Classic Car Crew Club. All rights reserved.
      </footer>
    </div>
  );
}

interface FeatureProps {
  title: string;
  description: string;
}

// Feature component for the features section
const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};
