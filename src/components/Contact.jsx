import { FaCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact details"
      className="pt-[8.25rem] pb-[4.5rem] text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(63,66,75,0.7), rgba(63,66,75,1)), url('/images/contact-background.jpg')",
      }}
    >
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-white font-bold text-[2rem] leading-[2.5rem] tracking-tight mb-2.5 text-center max-w-[35.25rem] mx-auto">
          Contact details
        </h2>
        <p className="text-white text-base leading-[1.625rem] mb-[3.75rem] max-w-[46rem] mx-auto">
          For any type of training/course please don't hesitate to get in touch with us. The fastest way is to send us your message using the following.
        </p>

        <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8">
          {/* Email */}
          <span className="inline-flex items-center gap-1.5 text-left md:text-center ml-3 md:ml-0">
            <span className="relative inline-flex items-center justify-center text-[1.375rem] mr-1.5">
              <FaCircle className="text-[#cacfdf] text-[2.75rem]" />
              <FaEnvelope className="absolute text-[#3f424b] text-base" />
            </span>
            <a
              href="mailto:info@newclue.co.in"
              className="text-[#129dd8] no-underline font-bold"
            >
              info@newclue.co.in
            </a>
          </span>

          {/* Phone */}
          <span className="inline-flex items-center gap-1.5 text-left md:text-center ml-3 md:ml-0">
            <span className="relative inline-flex items-center justify-center text-[1.375rem] mr-1.5">
              <FaCircle className="text-[#cacfdf] text-[2.75rem]" />
              <FaPhoneAlt className="absolute text-[#3f424b] text-base" />
            </span>
            <a href="tel:+918920825768" className="text-[#129dd8] no-underline font-bold">+91 8920825768</a>
          </span>
        </div>
      </div>
    </section>
  );
}
