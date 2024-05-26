interface ILine {
	className?: "";
	vertical?: boolean;
	horizontal?: boolean;
	top?: boolean;
	left?: boolean;
	bottom?: boolean;
	right?: boolean;
	short?: boolean;
	long?: boolean;
}

const Line = ({
	className = "",
	vertical = false,
	horizontal = false,
	top = false,
	left = false,
	bottom = false,
	right = false,
	short = false,
	long = false,
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
					else if (horizontal && short) {
						return "60px";
					} else if (horizontal && long) {
						return "90px";
					}
				})(),
				height: (() => {
					if (horizontal) return "3px";
					else if (vertical && short) {
						return "60px";
					} else if (vertical && long) {
						return "90px";
					}
				})(),
			}}
		/>
	);
};

export default Line;
