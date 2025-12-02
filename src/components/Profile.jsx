import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Profile = () => {
  const profileData = {
    name: "Tesfaye Dinku",
    title: "Full Stack Developer",
    email: "tesfayedinku2021@gmail.com",
    phone: "+251939060612",
    location: "Addis Ababa, Ethiopia",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/tesfZGitHub",
    bio: "Passionate developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies. I love turning complex problems into simple, beautiful, and intuitive designs.",
    cvUrl: "/cv.pdf",
    profilePhoto: "/profile.png"
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* ========== UPDATED PROFILE PHOTO SECTION ========== */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-700"></div>
              
              {/* Profile photo container - FIXED SIZING */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img 
                  src={profileData.profilePhoto} 
                  alt={profileData.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  style={{
                    objectPosition: 'center top', // Adjust if face is cut off
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E"
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </div>
              
              {/* Photo corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-pink-400 rounded-br-lg"></div>
            </div>
          </div>
          {/* ========== END PROFILE PHOTO ========== */}

          {/* Profile Info */}
          <div className="lg:w-3/5">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{profileData.name}</h3>
            <p className="text-xl text-blue-400 mb-6">{profileData.title}</p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {profileData.bio}
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <FaEnvelope className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${profileData.email}`} className="hover:text-blue-400 transition">
                    {profileData.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <FaPhone className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href={`tel:${profileData.phone}`} className="hover:text-purple-400 transition">
                    {profileData.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>{profileData.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl">
                <div className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex gap-3">
                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="hover:text-blue-400 transition">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href={profileData.github} target="_blank" rel="noopener noreferrer"
                       className="hover:text-white transition">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Social</p>
                  <p>Connect with me</p>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <a 
              href={profileData.cvUrl} 
              download={`${profileData.name.replace(/\s+/g, '_')}_CV.pdf`}
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;