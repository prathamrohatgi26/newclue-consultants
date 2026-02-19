import { FaSquare } from 'react-icons/fa';

export default function About() {
  return (
    <div
      id="about"
      className="py-24 lg:py-36 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/about-background.jpg')",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-[3.75rem]">
          <div className="text-[#129dd8] font-bold text-[0.8125rem] leading-[1.125rem]">ABOUT</div>
          <h2 className="text-[#333] font-bold text-[2rem] leading-[2.5rem] tracking-tight max-w-[35.25rem] mx-auto">
            Who we are and what we do
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image */}
          <div>
            <img src="/images/about.jpg" alt="About New Clue" className="w-full rounded" />
          </div>

          {/* Differentiators */}
          <div className="lg:mt-5 lg:mx-2 xl:mx-2 xl:mt-5">
            <h4 className="text-[#333] font-bold text-[1.5rem] leading-[2rem] tracking-tight mb-4">
              How are we <em>different</em> ?
            </h4>
            <ul className="list-none p-0 space-y-2">
              <li className="flex items-start gap-2">
                <FaSquare className="text-[#6b747b] text-[0.375rem] mt-[0.6rem] shrink-0" />
                <span className="text-[#6b747b] text-base leading-[1.625rem]">
                  New Clue's uniqueness stands for customizing the content to every industry, based on their businesses and providing the training programmes through various training models.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaSquare className="text-[#6b747b] text-[0.375rem] mt-[0.6rem] shrink-0" />
                <span className="text-[#6b747b] text-base leading-[1.625rem]">
                  New Clue is a Training Organization for developing skills and knowledge required in today's corporate world. We aim to serve people to acquire the right attitude and skills through various IT & Non- IT training programmes to different industries in India and Abroad.
                </span>
              </li>
            </ul>
          </div>

          {/* Testimonial Quote */}
          <div className="lg:mt-2.5 xl:mt-2.5 xl:ml-4">
            <p className="text-[#333] italic font-semibold text-[1.5rem] leading-[2.125rem]">
              "New Clue has a wide network of Certified and Skilled Trainers who are specialist in their own domain to conduct programmes across India & Abroad"
            </p>
            <hr className="w-16 h-0.5 border-none bg-[#129dd8] my-[1.125rem]" />
            <div className="text-[#333] font-semibold text-base leading-[1.5rem] mb-0.5">
              New Clue Consultants
            </div>
            <div className="text-[#6b747b] text-[0.875rem] leading-[1.5rem]">
              Training & Staffing Solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
