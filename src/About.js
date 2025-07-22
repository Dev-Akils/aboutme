import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Hi, I'm Akila 👋</h1>
        <p className="text-xl text-gray-600">Software Developer</p>
      </header>

      {/* About Section */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate web developer with 2 years of experience in the Web development. 
          I specialize in building responsive, dynamic, and user-friendly applications using React, Node.js, Express, and MongoDB.
          I enjoy solving problems and continuously learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>React.js, Redux, React Router</li>
          <li>Tailwind CSS, Material-UI, Styled Components</li>
          <li>Node.js, Express.js, MongoDB</li>
          <li>REST API Integration</li>
          <li>Git, GitHub</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Company Projects</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Admin Dashboard</strong> - User management, filters, KYC, responsive design using React & Redux.
          </li>
          <li>
            <strong>Academy Website</strong> - Built responsive educational platform with Tailwind and Material UI.
          </li>
          <li>
            <strong>Fintech Dashboard</strong> - I built a responsive Fintech Dashboard using React, TypeScript, Redux, and TailwindCSS to manage user's personal loan and epay details, transactions, and secure admin controls.
          </li>
          <li>
            <strong>Sports Club</strong> - Built responsive sports training center with react,redux, Tailwind and Material UI.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Contact</h2>
        <p className="text-gray-700">
          📧 Email: suyambuakila2000@gmail.com <br />
          💼 GitHub: <a href="https://github.com/Dev-Akils" className="text-blue-500 underline">Dev-Akils</a> <br />
          🔗 LinkedIn: <a href="#" className="text-blue-500 underline">https://www.linkedin.com/in/akila-s-02a8ab244</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Akila S. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
