export default function Header() {
  return (
    <header
      id="header"
      className="relative pt-32 pb-16 lg:pt-[19rem] lg:pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/images/header-background.jpg')",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-10/12 text-center">
            <h1 className="text-[#129dd8] font-bold text-[2.5rem] lg:text-[3.75rem] leading-tight tracking-tight mb-4">
              Training & Staffing Solutions
            </h1>
            <p className="text-[#6b747b] text-base leading-[1.625rem] text-justify mb-24 lg:mb-56">
              Established in the year 2019 in India, New Clue Consultants is an IT Training Organization, focused on up- skilling corporate workforce through tailor-made training needs. Our Vision is to provide the most relevant and work-related training that are aligned with company's objectives, goals & strategies.
            </p>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-4 xl:gap-[4.375rem]">
          <ExpertiseCard
            icon="/images/service-icon-3.svg"
            iconAlt="Classroom trainings icon"
            title={<>CLASSROOM<br />TRAININGS</>}
            description="Instructor-led trainings (ILT) have been around since the beginning of the training function and considered one of the most popular mediums of training. It is an effective means of delivering information, as it allows for real-time feedback, questions and answers"
          />
          <ExpertiseCard
            icon="/images/header-expertise-icon-1.svg"
            iconAlt="Virtual trainings icon"
            title={<>VIRTUAL<br />TRAININGS</>}
            description="Virtual classroom courses are Instructor-led-web-based training programs. These courses are designed for private groups and run at a time convenient to you by experienced instructors."
          />
          <ExpertiseCard
            icon="/images/service-icon-5.svg"
            iconAlt="Onsite trainings icon"
            title={<>ONSITE<br />TRAININGS</>}
            description="On-site training is one of the most cost-effective ways to facilitate your organization's learning and development goals. We want to learn about your business challenges and work with you to understand your needs."
          />
        </div>
      </div>
    </header>
  );
}

function ExpertiseCard({ icon, iconAlt, title, description }) {
  return (
    <div className="lg:w-[320px] mb-8 lg:mb-0">
      <div className="flex items-start mb-2 lg:mb-4">
        <div className="w-[50px] lg:w-[62px] mr-4 lg:mr-[1.125rem] shrink-0">
          <img src={icon} alt={iconAlt} />
        </div>
        <h5 className="text-[#333] font-bold text-[1.25rem] leading-[1.625rem] mt-0 lg:mt-1">
          {title}
        </h5>
      </div>
      <p className="text-[#6b747b] text-base leading-[1.625rem]">{description}</p>
    </div>
  );
}
