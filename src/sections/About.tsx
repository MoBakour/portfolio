import IconDownload from "../icons/IconDownload";
import Line from "../components/Line";

const About = () => {
    return (
        <section>
            <h2 className="uppercase text-lg font-bold">About</h2>

            <article className="p-4 relative">
                {/* decoration corners */}
                <Line top left horizontal size="short" />
                <Line top left vertical size="long" />
                <Line bottom right horizontal size="short" />
                <Line bottom right vertical size="long" />

                {/* paragraphs */}
                <p>
                    Hi there! I am{" "}
                    <span className="text-teal-400">Mohamed Bakour</span>{" "}
                    <span className="opacity-70 text-sm">
                        (also go by MoBakour or Swordax)
                    </span>{" "}
                    from Syria, born in the United Arab Emirates. I am a
                    Software Engineering student at Istinye University in
                    Istanbul. Back in 2019, I decided to start diving into the
                    world of web development and coding. It was then when I
                    started learning concepts of frontend and server-side
                    development and started building projects to challenge
                    myself and build stuff I could show to others.
                </p>

                <br />

                <p>
                    My main focus these days is keeping up with the trends of
                    the tech world and keeping my skills up-to-date. I love
                    building web apps and I am passionate about learning newer
                    technologies and tech stacks.
                </p>
            </article>

            <a
                title="Download Resume"
                className="cursor-pointer w-fit flex justify-center items-center gap-2 bg-teal-400/20 text-teal-400 font-bold text-xl rounded-full py-2 px-4 m-auto mt-8 transition hover:bg-teal-400/10"
                href="/Mohamed_Bakour_Resume.pdf"
                download="Mohamed_Bakour_Resume.pdf"
            >
                <span className="uppercase">Download My Resume</span>{" "}
                <IconDownload className="text-2xl" />
            </a>
        </section>
    );
};

export default About;
