import { NavLink } from 'react-router-dom';
import Avatar from '@/components/Avatar';
import { CURRENT_USER } from '@/lib/mockData';

const links = [
  { to: '/', label: '~/home', exact: true },
  { to: '/build', label: '~/build' },
  { to: '/profile', label: '~/profile' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a40] bg-[#0a0a0f]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded border border-[#39ff14] flex items-center justify-center pulse-neon">
            <span className="text-[#39ff14] text-xs font-mono font-bold">VC</span>
          </div>
          <span className="font-mono font-bold text-[#e2e8f0] text-sm tracking-widest group-hover:text-[#39ff14] transition-colors">
            VIBECODE
          </span>
        </NavLink>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded font-mono text-xs tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#39ff14] bg-[#39ff14]/10 border border-[#39ff14]/30'
                    : 'text-[#64748b] hover:text-[#e2e8f0] hover:bg-[#1a1a28]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* User */}
        <NavLink to="/profile" className="flex items-center gap-2 group">
          <Avatar username={CURRENT_USER.username} size="sm" />
          <span className="hidden sm:block font-mono text-xs text-[#64748b] group-hover:text-[#39ff14] transition-colors">
            {CURRENT_USER.username}
          </span>
        </NavLink>
      </div>

      {/* Mobile nav */}
      <div className="sm:hidden flex border-t border-[#2a2a40]">
        {links.map(({ to, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) =>
              `flex-1 text-center py-2 font-mono text-xs transition-all ${
                isActive ? 'text-[#39ff14] bg-[#39ff14]/5' : 'text-[#64748b]'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
