"use client";

import { useState } from "react";
import FacebookIcon from "../../../public/smallIcons/facebookIcon";
import LinkedinIcon from "../../../public/smallIcons/linkedinIcon";
import WhatsappIcon from "../../../public/smallIcons/whatsappIcon";
import InstagramIcon from "../../../public/smallIcons/instagramIcon";

const SocialMediaShare = () => {
  return (
    <>
      <div className="flex flex-col gap-10 mt-20">
        <div className="cursor-pointer">
          <a target="_blank" href="https://www.facebook.com/">
            <FacebookIcon width={100} height={100} />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="">
            <LinkedinIcon width={100} height={100} />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://wa.me/+93744021022">
            <WhatsappIcon width={100} height={100} />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://www.instagram.com/">
            <InstagramIcon width={100} height={100} />
          </a>
        </div>
      </div>
    </>
  );
};
export default SocialMediaShare;
