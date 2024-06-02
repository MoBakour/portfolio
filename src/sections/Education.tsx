import IconExternalLink from "../icons/IconExternalLink";
import Bullets from "../components/Bullets";
import Line from "../components/Line";

interface IEducation {
	date: string;
	institution: string;
	location?: string;
	title: string;
	grade?: number;
	courses: string[];
	link: string;
}

const educationData: IEducation[] = [
	{
		date: "Oct 2022 — Present",
		institution: "Istinye University",
		location: "Istanbul — Turkey",
		title: "Bachelor's degree in Software Engineering",
		courses: [
			"Data Structures and Algorithms",
			"Analysis of Algorithms",
			"Discrete Mathematics",
			"Programming with Python",
			"OOP Programming with C++",
			"Principles of AI",
		],
		link: "https://istinye.edu.tr",
	},
	{
		date: "Mar 2023",
		institution: "MongoDB University",
		title: "MongoDB Node.js Developer Path",
		courses: [
			"Database CRUD Operations",
			"MongoDB Aggregation",
			"MongoDB Atlas",
			"Data Modeling",
			"MongoDB Node.js Driver",
		],
		link: "https://learn.mongodb.com/c/_TSeC5WwQF2aky4Mm4Wrmw",
	},
];

interface IEducationCard {
	education: IEducation;
}

const EducationCard = ({ education }: IEducationCard) => {
	return (
		<a href={education.link} target="_blank">
			<div className="group-hover/container:opacity-60 md:!opacity-100 hover:!opacity-100 group/card flex flex-col gap-4 p-4 py-4 transition rounded-lg hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg md:hover:bg-transparent md:hover:shadow-none md:hover:drop-shadow-none cursor-pointer">
				<header>
					<div className="flex justify-between items-center md:flex-col md:items-start">
						<h2 className="text-xl font-bold group-hover/card:text-teal-400 md:group-hover/card:text-slate-200 transition">
							{education.institution}
							<IconExternalLink className="inline-block ml-2 mb-2" />
						</h2>

						<p className="text-sm opacity-80">{education.date}</p>
					</div>

					<p className="text-sm opacity-80">{education.location}</p>
				</header>

				<div className="flex flex-col gap-3 px-4">
					<p className="font-bold">{education.title}</p>

					<Bullets bullets={education.courses} />
				</div>
			</div>
		</a>
	);
};

const Education = () => {
	return (
		<section>
			<h2 className="uppercase text-lg font-bold">Education</h2>

			<article className="p-4 relative group/container flex flex-col gap-4">
				{/* decoration corners */}
				<Line top left horizontal size="longer" />
				<Line top left vertical size="short" />
				<Line bottom right horizontal size="short" />
				<Line bottom right vertical size="long" />

				{/* education cards */}
				{educationData.map((data, index) => (
					<EducationCard education={data} key={index} />
				))}
			</article>
		</section>
	);
};

export default Education;
