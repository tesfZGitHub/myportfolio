import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with shopping cart, user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Task Manager Pro',
      description: 'Collaborative task management application with real-time updates, drag & drop, and team features.',
      technologies: ['React', 'Firebase', 'Tailwind', 'DnD'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecast, maps, and location-based recommendations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness app with workout tracking, progress charts, and nutrition logging.',
      technologies: ['React Native', 'Express', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag & drop portfolio builder with customizable templates and real-time preview.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'DnD'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, file sharing, and video calling capabilities.',
      technologies: ['React', 'Socket.io', 'WebRTC', 'Express'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project represents a unique challenge and solution.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-800/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;