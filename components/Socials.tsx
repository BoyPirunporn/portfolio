import Link from "next/link";
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const socials = [
    { icon: <FaGithub />, path: "https://github.com/bpasn" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/pirunporn-a-8849201b9" },
]


const Socials = ({
    containerStyles, iconStyles
}: {
    containerStyles: string,
    iconStyles: string
}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} target="_blank" className={iconStyles} href={social.path}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Socials;