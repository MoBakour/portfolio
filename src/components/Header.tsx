import { useEffect, useState } from "react";
import {
    AiOutlineLinkedin,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineTwitter,
} from "react-icons/ai";

const phrases = [
    "Software Engineer",
    "University Student",
    "Web Developer",
    "JavaScripter",
];

const contacts = [
    {
        name: "Github",
        link: "https://github.com/MoBakour",
        icon: <AiOutlineGithub />,
    },
    {
        name: "Linkedin",
        link: "https://linkedin.com/in/mobakour",
        icon: <AiOutlineLinkedin />,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/mo.bakour",
        icon: <AiOutlineInstagram />,
    },
    {
        name: "Email",
        link: "mailto:mo.bakour@outlook.com",
        icon: <AiOutlineMail />,
    },
    {
        name: "Twitter",
        link: "https://twitter.com/SwordaxSy",
        icon: <AiOutlineTwitter />,
    },
];

interface IHeader {
    sections: string[];
}

const Header = ({ sections }: IHeader) => {
    const [display, setDisplay] = useState("");

    const sleep = (time = 1000) => {
        return new Promise((res: any) => {
            setTimeout(res, time);
        });
    };

    useEffect(() => {
        const func = async () => {
            for (let phrase of phrases) {
                for (let i = 0; i < phrase.length + 1; i++) {
                    setDisplay(phrase.slice(0, i));
                    await sleep(100);
                }

                await sleep(2000);

                for (let i = phrase.length; i >= 0; i--) {
                    setDisplay(phrase.slice(0, i));
                    await sleep(30);
                }
            }

            func();
        };

        func();
    }, []);

    return (
        <header className="w-[40%] max-lg:w-[90%] h-screen max-md:h-auto max-md:gap-16 py-20 px-4 max-sm:px-0 flex flex-col max-lg:items-center justify-between sticky max-lg:static top-0 animate-slideFromLeft">
            {/* top */}
            <div>
                <h1 className="text-text text-4xl font-bold">Mohamed Bakour</h1>
                <h2 className="text-text text-xl">
                    {display}
                    <span className="pl-px animate-blink">|</span>
                </h2>
                <p className="pt-4 text-sm">
                    In the world of tech we say
                    <br />
                    If it works, don't touch it
                </p>
            </div>

            {/* navigation */}
            <nav>
                <ul className="flex flex-col gap-4">
                    {sections.map((nav) => (
                        <li
                            key={nav}
                            className="w-fit max-lg:w-auto transition hover:text-text group"
                        >
                            <a
                                href={`#${nav.toLowerCase()}`}
                                className="flex py-2 max-lg:justify-center items-center"
                            >
                                <p className="uppercase w-28 font-bold">
                                    {nav}
                                </p>
                                <span className="block bg-text/80 w-20 h-[2px] transition-all group-hover:bg-text group-hover:w-28"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* contacts */}
            <div className="flex justify-center items-center w-fit gap-6">
                {contacts.map((contact) => (
                    <a
                        href={contact.link}
                        key={contact.link}
                        className="text-[40px] transition hover:text-text"
                        title={contact.name}
                        target="_blank"
                    >
                        {contact.icon}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Header;
