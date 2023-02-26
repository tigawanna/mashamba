import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa/index.js";
import { TheIcon } from "../shared/wrappers/TheIcon";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 gap-5">
      <TheIcon Icon={FaInstagram} />
      <TheIcon Icon={FaFacebook} />
      <TheIcon Icon={FaTwitter} />
      <TheIcon Icon={FaWhatsapp} />
    </div>
  );
};
