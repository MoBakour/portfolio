import { useEffect, useRef } from "react";
import FadeInDiv from "./components/FadeInDiv";
import About from "./components/About";
import Header from "./components/Header";
// import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const sections = [
	{ name: "about", element: <About /> },
	{ name: "skills", element: <Skills /> },
	{ name: "projects", element: <Projects /> },
];

const App = () => {
	const bubbleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!bubbleRef.current) return;

			bubbleRef.current.style.left = e.pageX.toString() + "px";
			bubbleRef.current.style.top = e.pageY.toString() + "px";
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="app min-h-screen bg-slate-900 text-slate-200/80">
			{/* decoration bubble element */}
			<div
				ref={bubbleRef}
				className="w-[calc(100vw/2)] h-[calc(100vw/2)] rounded-full bg-sky-600 absolute blur-[200px] opacity-20 pointer-events-none -z-10 -translate-x-1/2 -translate-y-1/2"
			/>

			<div className="max-w-[1100px] m-auto flex lg:flex-col lg:items-center">
				<Header sections={sections.map((section) => section.name)} />

				<main className="w-[60%] lg:w-[90%] sm:w-[95%] sm:px-0 flex flex-col px-8 animate-slideFromRight">
					{sections.map((section, index) => (
						<FadeInDiv
							key={index}
							className="min-h-screen py-10 flex justify-center items-center"
						>
							{section.element}
						</FadeInDiv>
					))}
				</main>
			</div>

			<p className="text-center p-4 text-sm">
				Portfolio built by{" "}
				<span className="text-teal-400">Mohamed Bakour</span>. Design
				inspired by{" "}
				<a
					href="https://brittanychiang.com/"
					className="text-teal-400"
					target="_blank"
				>
					Brittany Chiang's
				</a>{" "}
				portfolio
			</p>
		</div>
	);
};

export default App;
