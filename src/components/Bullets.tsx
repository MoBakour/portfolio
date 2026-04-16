interface IBullets {
    bullets: string[];
}

const Bullets = ({ bullets }: IBullets) => {
    return (
        <ul className="flex flex-wrap gap-2">
            {bullets.map((bullet) => (
                <li
                    key={bullet}
                    className="px-2 py-1 bg-primary/20 text-primary font-bold rounded-full text-xs"
                >
                    {bullet}
                </li>
            ))}
        </ul>
    );
};

export default Bullets;
