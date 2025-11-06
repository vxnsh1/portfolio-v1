import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";

const Socials = () => {
  const socialLinks = [
    { name: "Github", url: "https://github.com/vxnsh1", icon: <FaGithub />},
    { name: "LinkedIn", url: "https://linkedin.com/in/vanshchouhan", icon: <FaLinkedin /> },
    { name: "Twitter", url: "https://twitter.com/itzvxnsh", icon: <FaXTwitter /> },
    { name: "Instagram", url: "https://instagram.com/ugh.vansh", icon: <CiInstagram />},
    { name: "Medium", url: "https://medium.com/@dragzyonline", icon: <FaMedium />},
    { name: "Email", url: "mailto:chouhanvansh00@gmail.com", icon: <MdAlternateEmail /> },
  ];

  return (
    <div className="">
      <ul className="flex md:gap-2 justify-center flex-wrap">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target={link.url}
              rel="noopener noreferrer"
              className="inline-flex py-1 px-3 cursor-pointer hover:underline cursor-target text-gray-400 hover:text-white gap-2 items-center"
            >
              {link.icon ? link.icon : null}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
