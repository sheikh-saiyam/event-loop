const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 py-8">
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold bg-gradient-to-r from-gray-600 via-black/70 to-slate-700 text-transparent bg-clip-text hover:opacity-90 transition text-lg">
              Event Loop
            </h3>
            <p className="text-sm text-gray-600">
              {" "}
              The world's leading event management platform. Create, discover,
              and attend <br className="hidden lg:block" /> amazing events with
              ease.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            <p className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </p>
            <p className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Events
            </p>
            <p className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Create Event
            </p>
            <p className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Help
            </p>
            <p className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </p>
          </nav>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2025 EventHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
