interface IBullets {
    bullets: string[];
}

const Bullets = ({ bullets }: IBullets) => {
    return (
        <ul className="flex flex-wrap gap-2">
            {bullets.map((bullet) => (
                <li
                    key={bullet}
                    className="px-2 py-1 bg-teal-400/20 text-teal-400 font-bold rounded-full text-xs"
                >
                    {bullet}
                </li>
            ))}
        </ul>
    );
};

export default Bullets;
