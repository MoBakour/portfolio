import { useRef, useEffect, useState } from "react";

const skills = [
	{
		name: "HTML/CSS",
		percentage: 96,
	},
	{
		name: "TailwindCSS",
		percentage: 92,
	},
	{
		name: "SASS/SCSS",
		percentage: 86,
	},
	{
		name: "JavaScript",
		percentage: 100,
	},
	{
		name: "TypeScript",
		percentage: 94,
	},
	{
		name: "React.js",
		percentage: 96,
	},
	{
		name: "Node.js",
		percentage: 92,
	},
	{
		name: "Express.js",
		percentage: 95,
	},
	{
		name: "Nest.js",
		percentage: 80,
	},
	{
		name: "MongoDB",
		percentage: 93,
	},
];

const Skills = () => {
	const domRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		if (!domRef) return;

		const observer = new IntersectionObserver(
			(entries) => {
				setVisible(entries[0].isIntersecting);
			},
			{
				rootMargin: "0px 0px -30% 0px",
			}
		);

		observer.observe(domRef.current!);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="skills" ref={domRef}>
			{skills.map((skill) => (
				<div
					key={skill.name}
					className="flex justify-start items-center py-3 group"
				>
					<p className="w-[140px] sm:w-[100px] sm:text-sm transition group-hover:text-slate-200">
						{skill.name}
					</p>
					<div className="w-[240px] sm:w-[180px] relative">
						<div
							className="overflow-hidden rounded"
							style={{ width: `${skill.percentage}%` }}
						>
							<div
								className={`h-[3px] bg-teal-400 ${
									visible ? "animate-progress" : "w-0"
								}`}
							/>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Skills;
