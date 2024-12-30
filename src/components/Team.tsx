import React from 'react';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Expert Team</h2>
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Our team consists of 7 highly qualified engineers and consultants with over 10 years of experience in security systems and surveillance solutions.
          </p>
        </div>
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Why Choose Our Team?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}