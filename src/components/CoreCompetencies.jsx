import React from 'react'
import './CoreCompetencies.css'

const CoreCompetencies = () => {
    const competencies = [
        {
            title: "Performance",
            subtitle: "Optimized solutions",
            icon: "⚡",
            description: "Building high-performance applications with optimized code and efficient algorithms",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            title: "Security",
            subtitle: "Secure implementations",
            icon: "🛡️",
            description: "Implementing robust security measures and following best practices",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Responsive",
            subtitle: "Cross-platform compatibility",
            icon: "📱",
            description: "Creating seamless experiences across all devices and screen sizes",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Precision",
            subtitle: "Detail-oriented approach",
            icon: "🎯",
            description: "Focusing on accuracy, attention to detail, and pixel-perfect implementations",
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="core-competencies" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
                        <span className="text-white font-medium">🔧 Technical Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                        Core Competencies
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Key technical skills and approaches that define my development philosophy
                    </p>
                </div>
                
                {/* Desktop/Tablet View - Grid Layout */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {competencies.map((item, index) => (
                        <div 
                            key={index}
                            className="competency-card relative group"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {/* Animated glow effect */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                            
                            {/* Card content */}
                            <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800/50 h-full transform transition-all duration-300 group-hover:scale-105">
                                {/* Icon with pulse animation */}
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl mb-6 mx-auto shadow-xl animate-pulse-slow`}>
                                    {item.icon}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 font-medium text-lg mb-4 text-center">
                                    {item.subtitle}
                                </p>
                                <p className="text-gray-400 text-center leading-relaxed">
                                    {item.description}
                                </p>
                                
                                {/* Animated progress bar */}
                                <div className="mt-6">
                                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full bg-gradient-to-r ${item.gradient} rounded-full progress-animate`}
                                            style={{ width: '0%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Mobile View - Table-like layout */}
                <div className="md:hidden overflow-x-auto">
                    <div className="min-w-max">
                        {/* Table header */}
                        <div className="grid grid-cols-4 gap-4 mb-6 px-4">
                            {competencies.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mx-auto mb-2`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                        
                        {/* Table content */}
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6">
                            <div className="grid grid-cols-4 gap-4 text-center">
                                {competencies.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-gray-300 text-sm font-medium">{item.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Animated floating elements */}
                <div className="absolute left-1/4 top-1/3 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute right-1/4 bottom-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>
        </section>
    );
};

export default CoreCompetencies;