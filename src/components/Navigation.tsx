import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';
import { useUsers } from '../context/UsersContext';

const MenuIcon = () => (
  <svg 
    className="w-5 h-5 mr-2" 
    viewBox="0 0 115.63 115.62" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      className="fill-current" 
      d="M189.5,73.83H98.88a12.49,12.49,0,0,0-12.5,12.5V177a12.5,12.5,0,0,0,12.5,12.5H189.5A12.5,12.5,0,0,0,202,177V86.33A12.5,12.5,0,0,0,189.5,73.83Zm-15.62,65.62H152v21.88H133.25V139.45H111.38V120.7h21.87V98.83H152V120.7h21.88Z" 
      transform="translate(-86.38 -73.83)"
    />
  </svg>
);

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalUsers } = useUsers();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#d2d2d7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 md:h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
                ${isActive 
                  ? 'text-[#2c3b67]'
                  : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <MenuIcon />}
                  Kalkulator ERP
                </>
              )}
            </NavLink>
            <NavLink
              to="/wdrozenie-erp"
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
                ${isActive 
                  ? 'text-[#2c3b67]'
                  : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <MenuIcon />}
                  Wdrożenie ERP
                </>
              )}
            </NavLink>
            <NavLink
              to="/koszt-wdrozenia-erp"
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
                ${isActive 
                  ? 'text-[#2c3b67]'
                  : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <MenuIcon />}
                  Koszt wdrożenia ERP
                </>
              )}
            </NavLink>
            <NavLink
              to="/systemy-erp"
              className={({ isActive }) =>
                `inline-flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
                ${isActive 
                  ? 'text-[#2c3b67]'
                  : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <MenuIcon />}
                  Systemy ERP
                </>
              )}
            </NavLink>
          </div>

          {/* Total Users Count */}
          {totalUsers > 0 && location.pathname === '/' && (
            <div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-[#F5F5F7] rounded-lg ml-auto mr-4 my-[8px]">
              <Users className="w-4 h-4 text-[#2c3b67]" />
              <span className="text-[15px] font-medium text-[#1d1d1f]">
                Łączna liczba użytkowników: {totalUsers}
              </span>
            </div>
          )}

          {/* Mobile Menu Button and Users Count */}
          <div className="flex items-center md:hidden w-full">
            <div className="flex-1"></div> {/* Spacer */}
            {totalUsers > 0 && location.pathname === '/' && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F5F5F7] rounded-lg my-[8px] mr-5">
                <Users className="w-4 h-4 text-[#2c3b67]" />
                <span className="text-[13px] font-medium text-[#1d1d1f]">
                  {totalUsers}
                </span>
              </div>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-[#2c3b67] hover:text-[#2c3b67]/80 transition duration-200 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
              </span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-200 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-[#d2d2d7]/30">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
              ${isActive 
                ? 'text-[#2c3b67]'
                : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <MenuIcon />}
                Kalkulator ERP
              </>
            )}
          </NavLink>
          <NavLink
            to="/wdrozenie-erp"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
              ${isActive 
                ? 'text-[#2c3b67]'
                : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <MenuIcon />}
                Wdrożenie ERP
              </>
            )}
          </NavLink>
          <NavLink
            to="/koszt-wdrozenia-erp"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
              ${isActive 
                ? 'text-[#2c3b67]'
                : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <MenuIcon />}
                Koszt wdrożenia ERP
              </>
            )}
          </NavLink>
          <NavLink
            to="/systemy-erp"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-[15px] font-medium transition duration-200 focus:outline-none
              ${isActive 
                ? 'text-[#2c3b67]'
                : 'text-[#2c3b67]/60 hover:text-[#2c3b67]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <MenuIcon />}
                Systemy ERP
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};