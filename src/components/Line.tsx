interface ILine {
    className?: "";
    vertical?: boolean;
    horizontal?: boolean;
    top?: boolean;
    left?: boolean;
    bottom?: boolean;
    right?: boolean;
    size?: "short" | "long" | "longer";
}

enum Sizes {
    SHORT = 60,
    LONG = 90,
    LONGER = 105,
}

const Line = ({
    className = "",
    vertical = false,
    horizontal = false,
    top = false,
    left = false,
    bottom = false,
    right = false,
    size = "short",
}: ILine) => {
    return (
        <div
            className={`bg-teal-400 rounded absolute ${className}`}
            style={{
                top: top ? "0" : "auto",
                left: left ? "0" : "auto",
                bottom: bottom ? "0" : "auto",
                right: right ? "0" : "auto",
                width: (() => {
                    if (vertical) return "3px";
                    if (horizontal)
                        return (
                            Sizes[size.toUpperCase() as keyof typeof Sizes] +
                            "px"
                        );
                })(),
                height: (() => {
                    if (horizontal) return "3px";
                    if (vertical)
                        return (
                            Sizes[size.toUpperCase() as keyof typeof Sizes] +
                            "px"
                        );
                })(),
            }}
        />
    );
};

export default Line;
