import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="text-center py-6">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">
            Biratnagar City FC
          </h2>
          <p className="text-gray-600 text-lg">A Legacy in Nepali Football</p>
        </div>

        <div className="md:flex md:items-start md:justify-between">
          <div className="md:flex-1 px-6 md:px-12">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Biratnagar City FC is a Nepali professional franchise football
              club based in Biratnagar. The club competed in the Nepal Super
              League, the top flight football league in Nepal. Formed in March
              2021, it marked the establishment of the first ever franchise
              football league in Nepal under the supervision of ANFA. They
              played their inaugural match on 25 April 2021 against Dhangadhi.
              Despite a promising start, they struggled with consistency,
              finishing 6th and missing the second part of the tournament.
            </p>
          </div>

          <div className="md:flex-1 px-6 md:px-12 text-center">
            <img
              src="/images/navlogo.png"
              alt="Biratnagar City FC Logo"
              className="mx-auto h-auto w-auto max-w-xs md:max-w-md mb-4"
            />
            <div className="text-gray-800 mt-4">
              <p className="mb-2">
                <strong>Full Name:</strong> Biratnagar City Football Club
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
