import React from 'react';
import { Network, Camera, Shield, Server, Wifi, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Camera className="w-12 h-12 text-blue-500" />,
      title: "Surveillance Systems",
      description: "Supply, installation, and maintenance of advanced security camera systems"
    },
    {
      icon: <Network className="w-12 h-12 text-blue-500" />,
      title: "Network Solutions",
      description: "Design and implementation of wired and wireless networks"
    },
    {
      icon: <Server className="w-12 h-12 text-blue-500" />,
      title: "Infrastructure Setup",
      description: "Complete infrastructure design including servers and storage solutions"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Cyber Security",
      description: "Implementation of robust cyber security measures and protocols"
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: "Wireless Systems",
      description: "Advanced wireless surveillance solutions for flexible coverage"
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "Maintenance",
      description: "Ongoing support and maintenance of installed systems"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}