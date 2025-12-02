import React from 'react'
import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            category: "Networking & IT Systems",
            description: "Comprehensive networking knowledge and IT system management",
            icon: "🌐",
            gradient: "from-blue-500 to-cyan-500",
            skills: [
                "Network Infrastructure",
                "VLSM & CDR",
                "System Administration",
                "IT Support",
                "Hardware Troubleshooting"
            ]
        },
        {
            category: "Cloud Computing",
            description: "Modern cloud platforms and scalable solutions",
            icon: "☁️",
            gradient: "from-purple-500 to-pink-500",
            skills: [
                "AWS Services",
                "Google Colab",
                "Azure Basics",
                "Cloud Architecture",
                "Serverless Computing"
            ]
        },
        {
            category: "Web Development",
            description: "Full-stack web development and content management",
            icon: "💻",
            gradient: "from-green-500 to-emerald-500",
            skills: [
                "HTML5",
                "CSS3",
                "PHP",
                "jQuery",
                "WordPress",
                "SEO Optimization"
            ]
        }
    ];

    const aiComputerVision = {
        category: "AI & Computer Vision",
        description: "Artificial intelligence and intelligent systems development",
        icon: "🤖",
        gradient: "from-orange-500 to-red-500",
        items: [
            {
                category: "Technologies & Tools",
                skills: ["YOLOv8n", "Raspberry Pi"]
            },
            {
                category: "Expertise Areas",
                skills: ["Real-time Detection", "Machine Learning", "Computer Vision"]
            }
        ]
    };

    const projectManagement = {
        category: "Project Management",
        description: "Leadership and project coordination expertise",
        icon: "📊",
        gradient: "from-indigo-500 to-purple-500",
        skills: [
            "Team Leadership",
            "Agile Methodology",
            "Technical Documentation",
            "Problem Solving",
            "Collaboration"
        ]
    };

    const developmentTools = {
        category: "Development Tools",
        description: "Modern development tools and technologies",
        icon: "🛠️",
        gradient: "from-yellow-500 to-orange-500",
        items: [
            {
                category: "Core Tools",
                skills: ["Git", "Linux", "Python", "JavaScript"]
            },
            {
                category: "Technical Skills",
                skills: ["API Integration", "Database Management", "CI/CD Automation"]
            }
        ]
    };

    const technologies = [
        { name: "React", icon: "⚛️", color: "text-cyan-400" },
        { name: "Node.js", icon: "🟢", color: "text-green-400" },
        { name: "JavaScript", icon: "📜", color: "text-yellow-400" },
        { name: "Python", icon: "🐍", color: "text-blue-400" },
        { name: "MongoDB", icon: "🍃", color: "text-green-300" },
        { name: "MySQL", icon: "🐬", color: "text-orange-400" },
        { name: "Docker", icon: "🐳", color: "text-blue-300" },
        { name: "Git", icon: "📌", color: "text-red-400" },
        { name: "Tailwind CSS", icon: "🎨", color: "text-teal-400" },
        { name: "Linux", icon: "🐧", color: "text-white" }
    ];

    const cdciTools = {
        category: "CI/CD & Automation",
        description: "Continuous Integration/Deployment and automation tools",
        icon: "⚙️",
        gradient: "from-cyan-500 to-blue-500",
        tools: [
            {
                name: "GitHub Actions",
                icon: "⚡",
                description: "Automated workflows and CI/CD pipelines"
            },
            {
                name: "Docker",
                icon: "🐳",
                description: "Containerization and deployment"
            },
            {
                name: "Jenkins",
                icon: "🤖",
                description: "Automation server for CI/CD"
            },
            {
                name: "Nginx",
                icon: "🚀",
                description: "Web server and reverse proxy"
            }
        ]
    };

    return (
        <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
                        <span className="text-white font-medium">🛠️ Technical Arsenal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        A comprehensive toolkit spanning networking, cloud computing, AI development, and project management
                    </p>
                </div>

                {/* Main Skills Categories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, catIndex) => (
                        <div 
                            key={catIndex}
                            className="skill-category relative group"
                            data-aos="fade-up"
                            data-aos-delay={catIndex * 100}
                        >
                            {/* Gradient Border Glow */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                            
                            <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 h-full">
                                {/* Category Header */}
                                <div className="flex items-center mb-6">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl mr-4 shadow-lg`}>
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                                        <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                                    </div>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div 
                                            key={skillIndex}
                                            className="skill-item group"
                                            data-aos="fade-right"
                                            data-aos-delay={catIndex * 100 + skillIndex * 50}
                                        >
                                            <div className="flex items-center p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group-hover:scale-105">
                                                <div className={`w-2 h-6 bg-gradient-to-b ${category.gradient} mr-3 rounded-full`}></div>
                                                <span className="text-gray-200 font-medium">{skill}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI & Computer Vision and Project Management Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div 
                        className="lg:col-span-2 relative group"
                        data-aos="fade-right"
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${aiComputerVision.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                        
                        <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 h-full">
                            <div className="flex items-center mb-8">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${aiComputerVision.gradient} flex items-center justify-center text-2xl mr-6 shadow-xl animate-pulse-slow`}>
                                    {aiComputerVision.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{aiComputerVision.category}</h3>
                                    <p className="text-gray-400 mt-1">{aiComputerVision.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {aiComputerVision.items.map((item, index) => (
                                    <div key={index} className="ai-section">
                                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                            <div className={`w-2 h-6 bg-gradient-to-b ${aiComputerVision.gradient} mr-3 rounded-full`}></div>
                                            {item.category}
                                        </h4>
                                        <div className="space-y-3">
                                            {item.skills.map((skill, skillIndex) => (
                                                <div 
                                                    key={skillIndex}
                                                    className="ai-skill-item group relative"
                                                    data-aos="fade-up"
                                                    data-aos-delay={index * 100 + skillIndex * 50}
                                                >
                                                    <div className="px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300 group-hover:scale-105">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-200 font-medium">{skill}</span>
                                                            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${aiComputerVision.gradient} flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                                                →
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Management Section */}
                    <div 
                        className="relative group"
                        data-aos="fade-left"
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${projectManagement.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                        
                        <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 h-full">
                            <div className="flex items-center mb-6">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${projectManagement.gradient} flex items-center justify-center text-2xl mr-4 shadow-lg`}>
                                    {projectManagement.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{projectManagement.category}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{projectManagement.description}</p>
                                </div>
                            </div>

                            {/* Project Management Grid */}
                            <div className="space-y-3">
                                {projectManagement.skills.map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="pm-skill-item group"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 50}
                                    >
                                        <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 group-hover:border-indigo-500/50 transition-all duration-300 group-hover:scale-105">
                                            <div className="text-gray-300 font-medium text-center">{skill}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Development Tools & CI/CD Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Development Tools */}
                    <div 
                        className="relative group"
                        data-aos="fade-up"
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${developmentTools.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                        
                        <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 h-full">
                            <div className="flex items-center mb-8">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${developmentTools.gradient} flex items-center justify-center text-2xl mr-6 shadow-xl`}>
                                    {developmentTools.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{developmentTools.category}</h3>
                                    <p className="text-gray-400 mt-1">{developmentTools.description}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {developmentTools.items.map((item, index) => (
                                    <div key={index} className="dev-tools-section">
                                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                                            <div className={`w-3 h-8 bg-gradient-to-b ${developmentTools.gradient} mr-3 rounded-full`}></div>
                                            {item.category}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            {item.skills.map((tool, toolIndex) => (
                                                <div 
                                                    key={toolIndex}
                                                    className="dev-tool-item group"
                                                    data-aos="flip-up"
                                                    data-aos-delay={index * 100 + toolIndex * 50}
                                                >
                                                    <div className="p-4 bg-gray-800/40 rounded-xl border border-gray-700/40 group-hover:border-yellow-500/50 transition-all duration-300 group-hover:scale-105 text-center">
                                                        <div className="text-2xl mb-2">
                                                            {tool === "Git" && "📌"}
                                                            {tool === "Linux" && "🐧"}
                                                            {tool === "Python" && "🐍"}
                                                            {tool === "JavaScript" && "📜"}
                                                            {tool === "API Integration" && "🔗"}
                                                            {tool === "Database Management" && "🗄️"}
                                                            {tool === "CI/CD Automation" && "⚙️"}
                                                        </div>
                                                        <div className="text-gray-200 font-medium">{tool}</div>
                                                        <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${developmentTools.gradient} transition-all duration-500 mt-2 mx-auto rounded-full`}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CI/CD & Automation Section */}
                    <div 
                        className="relative group"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${cdciTools.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                        
                        <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 h-full">
                            <div className="flex items-center mb-8">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cdciTools.gradient} flex items-center justify-center text-2xl mr-6 shadow-xl animate-pulse-slow`}>
                                    {cdciTools.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{cdciTools.category}</h3>
                                    <p className="text-gray-400 mt-1">{cdciTools.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {cdciTools.tools.map((tool, index) => (
                                    <div 
                                        key={index}
                                        className="cdci-tool-item group"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="p-6 bg-gray-800/40 rounded-xl border border-gray-700/40 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-105 text-center h-full">
                                            <div className="text-4xl mb-4">{tool.icon}</div>
                                            <h4 className="text-lg font-bold text-white mb-2">{tool.name}</h4>
                                            <p className="text-gray-400 text-sm">{tool.description}</p>
                                            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${cdciTools.gradient} transition-all duration-500 mt-4 mx-auto rounded-full`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technologies Grid */}
                <div className="mb-16" data-aos="zoom-in">
                    <h3 className="text-2xl font-bold text-white text-center mb-10">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Technologies I Work With
                        </span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
                        {technologies.map((tech, index) => (
                            <div 
                                key={index}
                                className="tech-item group relative"
                                data-aos="flip-left"
                                data-aos-delay={index * 50}
                            >
                                <div className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/30 hover:border-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/20 text-center">
                                    <div className="text-3xl mb-2">{tech.icon}</div>
                                    <div className={`text-sm font-medium ${tech.color}`}>{tech.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Web Development Section */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/30 p-8" data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                            Web Development Stack
                        </span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-blue-400 font-bold text-lg flex items-center">
                                <div className="w-2 h-6 bg-blue-500 mr-3 rounded-full"></div>
                                Frontend
                            </h4>
                            <div className="space-y-2">
                                {["HTML5", "CSS3", "React", "jQuery"].map((skill, index) => (
                                    <div key={index} className="skill-badge bg-blue-500/20 border border-blue-500/30">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="text-green-400 font-bold text-lg flex items-center">
                                <div className="w-2 h-6 bg-green-500 mr-3 rounded-full"></div>
                                Backend
                            </h4>
                            <div className="space-y-2">
                                {["Node.js", "PHP", "Python", "Express.js"].map((skill, index) => (
                                    <div key={index} className="skill-badge bg-green-500/20 border border-green-500/30">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="text-purple-400 font-bold text-lg flex items-center">
                                <div className="w-2 h-6 bg-purple-500 mr-3 rounded-full"></div>
                                CMS & Tools
                            </h4>
                            <div className="space-y-2">
                                {["WordPress", "Git", "Docker", "CI/CD"].map((skill, index) => (
                                    <div key={index} className="skill-badge bg-purple-500/20 border border-purple-500/30">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="text-yellow-400 font-bold text-lg flex items-center">
                                <div className="w-2 h-6 bg-yellow-500 mr-3 rounded-full"></div>
                                Optimization
                            </h4>
                            <div className="space-y-2">
                                {["SEO", "Performance", "Accessibility", "Responsive"].map((skill, index) => (
                                    <div key={index} className="skill-badge bg-yellow-500/20 border border-yellow-500/30">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;