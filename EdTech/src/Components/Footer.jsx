import React from 'react';

const Footer = () => {
  const links = [
    {
      title: 'Home',
      links: ['About Us', 'Courses', 'Contacts', 'Blog'],
    },
    {
      title: 'FAQ',
      links: ['Terms of Service', 'Privacy Policy', 'Guidelines'],
    },
  ];

  return (
    <footer className="bg-white text-gray-600 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">
              Edu<span className="text-yellow-400">N<span className="text-blue-500">O</span>VA</span>.
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            EduNova is an innovative online learning platform offering a diverse range of courses. We provide expert instruction, interactive resources, and personalized support to help you achieve your learning goals and advance your career.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.777h-3.23l-7.794 10.375-4.225-10.375h-3.64l8.361 19.866h3.23l7.989-10.643 4.032 10.643h3.64l-8.599-20zM17.1 18.06h-1.921l-6.704-8.877-4.204 8.877h-1.78l6.196-12.879 1.921 2.545 6.704-8.877h1.78l-6.22 12.887z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.769s.784-1.769 1.75-1.769 1.75.79 1.75 1.769-.784 1.769-1.75 1.769zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Gmail" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.569l-12-9.75v13.438h24v-13.438l-12 9.75z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.208 17.525c-.281.037-.478.125-.79.249-1.229.49-2.903.749-4.918.726-2.016.023-3.68-.236-4.909-.726-.312-.124-.509-.212-.79-.249-.788-.103-.984-.521-.984-1.785v-3.483c0-1.264.196-1.682.984-1.785.281-.037.478-.125.79-.249 1.229-.49 2.903-.749 4.918-.726 2.016-.023 3.68.236 4.909.726.312.124.509.212.79.249.788.103.984.521.984 1.785v3.483c0 1.264-.196 1.682-.984 1.785zM9.988 8.441v7.126l6.237-3.563-6.237-3.563z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        {links.map((section, index) => (
          <div key={index} className="lg:col-span-1">
            <h4 className="font-bold text-lg text-gray-900 mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;