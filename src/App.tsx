import { useEffect, useRef } from "react";
import FadeInDiv from "./components/FadeInDiv";
import About from "./sections/About";
import Header from "./components/Header";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

const sections = [
    { name: "about", element: <About /> },
    { name: "education", element: <Education /> },
    { name: "skills", element: <Skills /> },
    { name: "projects", element: <Projects /> },
];

const App = () => {
    const bubbleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!bubbleRef.current) return;

            const { width } = bubbleRef.current.getBoundingClientRect();

            bubbleRef.current.style.left = e.clientX - width / 2 + "px";
            bubbleRef.current.style.top = e.clientY - width / 2 + "px";
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200/80">
            {/* decorative moving bubble */}
            <div
                ref={bubbleRef}
                className="w-[calc(100vw/2)] h-[calc(100vw/2)] rounded-full bg-sky-600 fixed blur-[200px] opacity-20 pointer-events-none md:hidden"
            />

            {/* decorative static bubbles */}
            <div className="w-[calc(100vw)] h-[calc(100vw)] rounded-full bg-sky-600 fixed -top-1/4 -left-1/2 blur-[100px] opacity-20 pointer-events-none hidden md:block" />
            <div className="w-[calc(100vw)] h-[calc(100vw)] rounded-full bg-sky-600 fixed -bottom-1/4 -right-1/2 blur-[100px] opacity-20 pointer-events-none hidden md:block" />

            <div className="max-w-[1100px] m-auto flex lg:flex-col lg:items-center">
                <Header sections={sections.map((section) => section.name)} />

                <main className="w-[60%] lg:w-[90%] sm:w-[95%] sm:px-0 flex flex-col px-8">
                    {sections.map((section, index) => (
                        <FadeInDiv
                            key={index}
                            id={section.name}
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
                    Brittany Chiang
                </a>
                's portfolio
            </p>
        </div>
    );
};

export default App;
