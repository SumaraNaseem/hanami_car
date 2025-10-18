import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

export default function PageLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Listen for close and toggle events
  useEffect(() => {
    const handleCloseSidebar = () => {
      setSidebarOpen(false);
    };

    const handleToggleSidebar = () => {
      console.log('PageLayout: Toggle sidebar event received');
      setSidebarOpen(prev => {
        console.log('PageLayout: Sidebar state changing from', prev, 'to', !prev);
        return !prev;
      });
    };

    window.addEventListener('closeSidebar', handleCloseSidebar);
    window.addEventListener('toggleSidebar', handleToggleSidebar);
    
    return () => {
      window.removeEventListener('closeSidebar', handleCloseSidebar);
      window.removeEventListener('toggleSidebar', handleToggleSidebar);
    };
  }, []);

  return (
    <div className="flex bg-gray-100 px-6 relative">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-80 lg:w-[220px]  
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        bg-white lg:bg-transparent
        shadow-lg lg:shadow-none
        mt-0 lg:mt-6
        overflow-hidden
      `}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto w-full lg:w-auto">
        <div className="h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
