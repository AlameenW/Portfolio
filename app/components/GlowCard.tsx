const GlowCard = ({ children, className = '' }) => (
  <div
    className={`bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] ${className}`}
  >
    {children}
  </div>
);

export default GlowCard;