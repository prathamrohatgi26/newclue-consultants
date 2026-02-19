import { FaCircle, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const socialIcons = [
  { Icon: FaFacebookF, label: 'Facebook' },
  { Icon: FaTwitter, label: 'Twitter' },
  { Icon: FaPinterestP, label: 'Pinterest' },
  { Icon: FaInstagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <div className="bg-[#3f424b] pt-[5.5rem] pb-6">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            {/* First Column */}
            <div className="mb-8 lg:mb-8 lg:w-[320px] xl:w-[352px]">
              <h6 className="text-[#cacfdf] font-bold text-base leading-[1.375rem] mb-2.5">
                New Clue Consultants
              </h6>
              <p className="text-[#cacfdf] text-[0.875rem] leading-[1.5rem]">
                Training & Staffing Solutions
              </p>
            </div>

            {/* Second Column (empty in original) */}
            <div className="mb-8 lg:mb-8 lg:w-[320px]" />

            {/* Third Column */}
            <div className="mb-8 lg:mb-8 lg:w-[224px] lg:text-right">
              <div className="flex lg:justify-end gap-1.5 mb-5">
                {socialIcons.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="relative inline-flex items-center justify-center group"
                    aria-label={label}
                  >
                    <FaCircle className="text-[#cacfdf] text-[2.75rem] group-hover:text-[#129dd8] transition-all duration-200" />
                    <Icon className="absolute text-[#3f424b] text-sm group-hover:text-white transition-all duration-200" />
                  </a>
                ))}
              </div>
              <p className="text-[#cacfdf] text-[0.875rem] leading-[1.5rem]">
                We would love to hear from you{' '}
                <a href="mailto:info@newclue.co.in" className="text-[#cacfdf] no-underline font-bold">
                  info@newclue.co.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#3f424b] pb-4 text-center">
        <p className="text-[#cacfdf] text-[0.875rem] leading-[1.5rem]">
          Copyright © <a href="#" className="text-[#cacfdf] no-underline">New Clue Consultants</a>
        </p>
      </div>
    </>
  );
}
