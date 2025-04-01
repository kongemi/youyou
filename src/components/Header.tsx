import React from 'react';

type HeaderProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const navigationItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'gallery', label: '作品集' },
  { id: 'chat', label: '与我聊天' },
];

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">我的个人空间</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <button className="block md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 