import React from 'react';
import { Eye } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Eye className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">EAGLES EYES</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#team" className="hover:text-blue-400 transition-colors">Team</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}