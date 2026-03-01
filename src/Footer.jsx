import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:max-w-xl mx-auto">
      {/* Top Section */}
      <div className="sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Todo List
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Real-time todo list updates for every user around the world. Stay
            ahead of your tasks.
          </p>
          {/* Socials */}
          <div className="flex gap-4 mt-2">
            {[
              { name: "Portfolio", url: "#" },
              { name: "GitHub", url: "https://github.com/twin-flash" },
              { name: "Instagram", url: "https://www.instagram.com/twin_flash/" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 hover:text-white transition-colors duration-200 border border-gray-700 hover:border-white px-3 py-1 rounded-full"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>          
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-gray-500 text-xs">
          2026 Todo List Powered by React & Tailwind 
        </p>
        <p className="text-gray-600 text-xs">
          Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
