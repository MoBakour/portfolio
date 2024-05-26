import { useEffect, useState } from "react";
import IconGithub from "../icons/IconGithub";
import IconInstagram from "../icons/IconInstagram";
import IconLinkedin from "../icons/IconLinkedin";
import IconMail from "../icons/IconMail";
import IconTwitter from "../icons/IconTwitter";

const phrases = [
	"Software Engineer",
	"University Student",
	"Web Developer",
	"JavaScripter",
	"Syrian",
];

const contacts = [
	{
		name: "Github",
		link: "https://github.com/MoBakour",
		icon: <IconGithub />,
		iconSize: "4xl",
	},
	{
		name: "Linkedin",
		link: "https://linkedin.com/in/mobakour",
		icon: <IconLinkedin />,
		iconSize: "4xl",
	},
	{
		name: "Instagram",
		link: "https://instagram.com/mo.bakour",
		icon: <IconInstagram />,
		iconSize: "4xl",
	},
	{
		name: "Email",
		link: "mailto:mo.bakour@outlook.com",
		icon: <IconMail />,
		iconSize: "4xl",
	},
	{
		name: "Twitter",
		link: "https://twitter.com/SwordaxSy",
		icon: <IconTwitter />,
		iconSize: "4xl",
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
		<header className="w-[40%] lg:w-[90%] h-screen py-20 px-4 sm:px-0 flex flex-col lg:items-center justify-between sticky lg:static top-0 animate-slideFromLeft">
			{/* top */}
			<div>
				<h1 className="text-slate-200 text-4xl font-bold">
					Mohamed Bakour
				</h1>
				<h2 className="text-xl">
					{display}
					<span className="pl-[1px] animate-blink">|</span>
				</h2>
				<p className="pt-4">
					I love building software
					<br />
					and hunting bugs!
				</p>
			</div>

			{/* navigation */}
			<nav>
				<ul className="flex flex-col gap-4">
					{sections.map((nav) => (
						<li
							key={nav}
							className="w-fit lg:w-auto transition hover:text-slate-200 group"
						>
							<a
								href={`#${nav.toLowerCase()}`}
								className="flex py-2 lg:justify-center items-center"
							>
								<p className="uppercase w-28 font-bold">
									{nav}
								</p>
								<span className="block bg-slate-200/80 w-20 h-[2px] transition-all group-hover:bg-slate-200 group-hover:w-28"></span>
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
						className={`text-${contact.iconSize} transition hover:text-slate-200`}
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
