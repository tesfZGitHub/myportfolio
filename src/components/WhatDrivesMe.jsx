import React from 'react'
import './WhatDrivesMe.css'

const WhatDrivesMe = () => {
    const sections = [
        {
            title: "Innovation",
            description: "Always exploring new technologies and creative solutions to complex challenges",
            icon: "💡",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Collaboration",
            description: "Believing in the power of teamwork and knowledge sharing to achieve excellence",
            icon: "🤝",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Continuous Learning",
            description: "Committed to staying current with emerging technologies and industry best practices",
            icon: "📚",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Impact",
            description: "Striving to create meaningful solutions that make a positive difference in the world",
            icon: "✨",
            gradient: "from-orange-500 to-red-500"
        }
    ];

    return (
        // ⚠️ MAKE SURE THIS ID MATCHES THE NAVIGATION LINKS ⚠️
        <section id="what-drives-me" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
                        <span className="text-white font-medium">🌟 My Motivation</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        What Drives Me
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The core values and principles that guide my work and passion for technology
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {sections.map((section, index) => (
                        <div 
                            key={index}
                            className="relative group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Animated background glow */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${section.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                            
                            {/* Card */}
                            <div className="relative p-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:border-gray-700">
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg`}>
                                    {section.icon}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                    {section.title}
                                </h3>
                                <p className="text-gray-400 text-center leading-relaxed">
                                    {section.description}
                                </p>
                                
                                {/* Animated underline */}
                                <div className="mt-6">
                                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${section.gradient} transition-all duration-500 mx-auto rounded-full`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Animated floating elements */}
                <div className="absolute left-10 top-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute right-10 bottom-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>
        </section>
    );
};

export default WhatDrivesMe;