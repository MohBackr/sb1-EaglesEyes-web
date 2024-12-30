import React from 'react';
import { Shield, Camera, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Advanced Surveillance Solutions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Pioneering security surveillance with cutting-edge camera systems and comprehensive coverage solutions.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
              <p className="text-gray-400">State-of-the-art surveillance systems for complete protection</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <Camera className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Cameras</h3>
              <p className="text-gray-400">High-resolution cameras with advanced capabilities</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
              <p className="text-gray-400">Robust network and server solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}