// Next.js App Router Example (JavaScript)
// app/page.js

import { Icon } from '@triadui/icons';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
          <Icon name="home" fontSize={48} />
          Welcome to Next.js with Icons
        </h1>
        <p className="text-gray-600">
          Using @triadui/icons in Next.js App Router (JavaScript)
        </p>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FeatureCard 
          icon="bolt"
          title="Fast"
          description="Lightning fast performance"
        />
        <FeatureCard 
          icon="security"
          title="Secure"
          description="Enterprise-grade security"
        />
        <FeatureCard 
          icon="verified"
          title="Reliable"
          description="99.9% uptime guarantee"
        />
      </section>

      {/* Action Buttons */}
      <section className="flex gap-4">
        <ActionButton icon="play_arrow" label="Get Started" primary />
        <ActionButton icon="description" label="Documentation" />
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Icon 
        name={icon} 
        fontSize="large" 
        className="mb-4 text-blue-600"
        fill={1}
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ActionButton({ icon, label, primary = false }) {
  const baseClasses = "flex items-center gap-2 px-6 py-3 rounded-lg transition-colors";
  const variantClasses = primary 
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "border border-gray-300 hover:bg-gray-50";
  
  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
}
