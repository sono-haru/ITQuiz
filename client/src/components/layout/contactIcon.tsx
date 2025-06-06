import React from 'react'
import Image from 'next/image'

type ContactIconProps = {
    href: string;
    src: string;
    alt: string;
    width: number;
    height: number;

};

const ContactIcon: React.FC<ContactIconProps> = ({ href, src , alt , width , height }) => {
  return (
    <a href={href}>
        <Image
            src = {src}
            alt = {alt}
            width = {width}
            height = {height}
            className = "hover active"
        />
    </a>
  )
}

export default ContactIcon