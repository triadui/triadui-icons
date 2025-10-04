// Next.js Pages Router Example (JavaScript)
// pages/index.js

import { Icon } from '@triadui/icons';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12">
        <nav className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Icon name="widgets" fontSize="large" color="primary" />
            <span className="text-xl font-bold">My App</span>
          </div>
          
          <div className="flex gap-4">
            <NavButton icon="home" label="Home" active />
            <NavButton icon="search" label="Search" />
            <NavButton icon="favorite" label="Favorites" />
            <NavButton icon="settings" label="Settings" />
          </div>
        </nav>
        
        <h1 className="text-4xl font-bold mb-2">
          Next.js Pages Router Example
        </h1>
        <p className="text-gray-600">
          Using @triadui/icons with Next.js Pages Router (JavaScript)
        </p>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard icon="trending_up" value="1,234" label="Users" color="success" />
        <StatCard icon="shopping_cart" value="567" label="Orders" color="primary" />
        <StatCard icon="payments" value="$12.3K" label="Revenue" color="info" />
        <StatCard icon="star" value="4.8" label="Rating" color="warning" />
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ContentCard 
          icon="image"
          title="Gallery"
          description="Browse your photo collection"
        />
        <ContentCard 
          icon="video_library"
          title="Videos"
          description="Watch your saved videos"
        />
        <ContentCard 
          icon="music_note"
          title="Music"
          description="Listen to your playlists"
        />
        <ContentCard 
          icon="folder"
          title="Documents"
          description="Access your files"
        />
        <ContentCard 
          icon="cloud"
          title="Cloud Storage"
          description="Sync across devices"
        />
        <ContentCard 
          icon="security"
          title="Security"
          description="Protect your data"
        />
      </section>
    </div>
  );
}

function NavButton({ icon, label, active = false }) {
  return (
    <button 
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        active 
          ? 'bg-blue-100 text-blue-600' 
          : 'hover:bg-gray-100'
      }`}
    >
      <Icon name={icon} fill={active ? 1 : 0} />
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}

function StatCard({ icon, value, label, color }) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <Icon 
          name={icon} 
          fontSize="large" 
          color={color}
          fill={1}
        />
        <span className={`text-${color}-600 text-sm font-medium`}>
          +12%
        </span>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}

function ContentCard({ icon, title, description }) {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <Icon 
        name={icon} 
        fontSize={40}
        className="mb-4 text-gray-700"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
        <span>View more</span>
        <Icon name="arrow_forward" className="ml-1" fontSize="small" />
      </div>
    </div>
  );
}
