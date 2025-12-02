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
                { name: "Network Infrastructure", level: 90 },
                { name: "VLSM & CDR", level: 85 },
                { name: "System Administration", level: 80 },
                { name: "IT Support", level: 95 },
                { name: "Hardware Troubleshooting", level: 88 }
            ]
        },
        {
            category: "Cloud Computing",
            description: "Modern cloud platforms and scalable solutions",
            icon: "☁️",
            gradient: "from-purple-500 to-pink-500",
            skills: [
                { name: "AWS Services", level: 85 },
                { name: "Google Colab", level: 90 },
                { name: "Azure Basics", level: 75 },
                { name: "Cloud Architecture", level: 82 },
                { name: "Serverless Computing", level: 78 }
            ]
        },
        {
            category: "Web Development",
            description: "Full-stack web development and content management",
            icon: "💻",
            gradient: "from-green-500 to-emerald-500",
            skills: [
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 92 },
                { name: "PHP", level: 85 },
                { name: "jQuery", level: 80 },
                { name: "WordPress", level: 88 },
                { name: "SEO Optimization", level: 83 }
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
            { name: "Team Leadership", level: 88 },
            { name: "Agile Methodology", level: 85 },
            { name: "Technical Documentation", level: 90 },
            { name: "Problem Solving", level: 92 },
            { name: "Collaboration", level: 95 }
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
                skills: ["API Integration", "Database Management"]
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

                                {/* Skills List with Animated Bars */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-item">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                                <span className={`text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full bg-gradient-to-r ${category.gradient} rounded-full skill-bar`}
                                                    style={{ 
                                                        width: '0%',
                                                        animationDelay: `${(catIndex * 0.2 + skillIndex * 0.1)}s`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI & Computer Vision Section */}
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

                            {/* Project Management Grid Table */}
                            <div className="grid grid-cols-2 gap-4">
                                {projectManagement.skills.map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="pm-skill-item group"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 50}
                                    >
                                        <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 group-hover:border-indigo-500/50 transition-all duration-300 group-hover:scale-105 text-center h-full">
                                            <div className="text-gray-300 font-medium mb-2">{skill.name}</div>
                                            <div className="flex items-center justify-center">
                                                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                                    <div 
                                                        className={`h-full bg-gradient-to-r ${projectManagement.gradient} rounded-full pm-skill-bar`}
                                                        style={{ 
                                                            width: '0%',
                                                            animationDelay: `${index * 0.1}s`
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className={`ml-2 text-xs font-bold bg-gradient-to-r ${projectManagement.gradient} bg-clip-text text-transparent`}>
                                                    {skill.level}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Development Tools Section */}
                <div 
                    className="relative group mb-16"
                    data-aos="fade-up"
                >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${developmentTools.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                    
                    <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50">
                        <div className="flex items-center mb-8">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${developmentTools.gradient} flex items-center justify-center text-2xl mr-6 shadow-xl`}>
                                {developmentTools.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">{developmentTools.category}</h3>
                                <p className="text-gray-400 mt-1">{developmentTools.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {developmentTools.items.map((item, index) => (
                                <div key={index} className="dev-tools-section">
                                    <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
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

                {/* Web Development Table Section */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/30 p-8" data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                            Web Development Mastery
                        </span>
                    </h3>
                    
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 text-left text-lg font-bold text-blue-400">Frontend</th>
                                    <th className="py-4 px-6 text-left text-lg font-bold text-green-400">Backend</th>
                                    <th className="py-4 px-6 text-left text-lg font-bold text-purple-400">CMS</th>
                                    <th className="py-4 px-6 text-left text-lg font-bold text-yellow-400">Optimization</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-800/50">
                                    <td className="py-4 px-6">
                                        <div className="skill-badge bg-blue-500/20 border border-blue-500/30">HTML5</div>
                                        <div className="skill-badge bg-blue-500/20 border border-blue-500/30 mt-2">CSS3</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="skill-badge bg-green-500/20 border border-green-500/30">PHP</div>
                                        <div className="skill-badge bg-green-500/20 border border-green-500/30 mt-2">jQuery</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="skill-badge bg-purple-500/20 border border-purple-500/30">WordPress</div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="skill-badge bg-yellow-500/20 border border-yellow-500/30">SEO Optimization</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Grid View */}
                    <div className="md:hidden grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="text-blue-400 font-bold">Frontend</h4>
                            <div className="skill-badge bg-blue-500/20 border border-blue-500/30">HTML5</div>
                            <div className="skill-badge bg-blue-500/20 border border-blue-500/30">CSS3</div>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-green-400 font-bold">Backend</h4>
                            <div className="skill-badge bg-green-500/20 border border-green-500/30">PHP</div>
                            <div className="skill-badge bg-green-500/20 border border-green-500/30">jQuery</div>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-purple-400 font-bold">CMS</h4>
                            <div className="skill-badge bg-purple-500/20 border border-purple-500/30">WordPress</div>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-yellow-400 font-bold">Optimization</h4>
                            <div className="skill-badge bg-yellow-500/20 border border-yellow-500/30">SEO Optimization</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;