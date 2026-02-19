import { FaCircle } from 'react-icons/fa';
import pastCourses from '../data/courses';

export default function Services() {
  return (
    <div id="services" className="relative bg-[#3f424b] pt-36 pb-14 lg:pb-28">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-white font-bold text-[2rem] leading-[2.5rem] tracking-tight text-center mb-[3.75rem] max-w-[35.25rem] mx-auto">
          Trainings Conducted In Past
        </h2>

        {/* Course Cards */}
        <div className="py-3">
          <div className="flex flex-wrap gap-0">
            {pastCourses.map((course) => (
              <div
                key={course.id}
                className="w-full lg:w-[286px] xl:w-[326px] lg:inline-block lg:align-top lg:mx-auto mb-4"
                style={{
                  display: 'inline-block',
                  verticalAlign: 'top',
                }}
              >
                <div className="flex items-start gap-3 py-2">
                  <span className="relative inline-flex items-center justify-center shrink-0">
                    <FaCircle className="text-[#129dd8] text-[2.25rem]" />
                    <span className="absolute text-white font-bold text-sm leading-[2.125rem]">
                      {course.id}
                    </span>
                  </span>
                  <div>
                    <h5 className="text-[#efefef] font-bold text-[1.25rem] leading-[1.625rem] mt-0.5 mb-1">
                      {course.title}
                    </h5>
                    {course.description && (
                      <p className="text-[#efefef] text-base leading-[1.625rem]">{course.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <p className="text-white text-[1.125rem] leading-[1.75rem] text-center mt-11">
          Our experts will take your company to the next level.{' '}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#129dd8] no-underline font-bold"
          >
            Contact us
          </a>{' '}
          today for a quote
        </p>
      </div>

      {/* Bottom wave decoration */}
      <svg
        className="absolute bottom-0 left-0 w-full bg-white"
        style={{ height: '20px' }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 2349.939 110.567"
      >
        <path
          fill="#3f424b"
          d="M0,0C282.74,67.647,704.207,110.567,1174.97,110.567S2067.2,67.647,2349.939,0H0Z"
        />
      </svg>
    </div>
  );
}
