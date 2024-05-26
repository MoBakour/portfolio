import { useEffect, useRef, useState } from "react";

interface IFadeInDivProps {
	children: React.ReactNode;
	className?: string;
	percentage?: number;
	[key: string]: any;
}

const FadeInDiv = ({
	children,
	className,
	percentage = 30,
	...rest
}: IFadeInDivProps) => {
	const domRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState<boolean>(false);

	useEffect(() => {
		if (!domRef) return;

		const observer = new IntersectionObserver(
			(entries) => {
				setVisible(entries[0].isIntersecting);
			},
			{
				rootMargin: `-${percentage}% 0px`,
			}
		);

		observer.observe(domRef.current!);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={domRef}
			className={`${
				visible ? "opacity-100 visible" : "opacity-0 invisible"
			} ${className}`}
			style={{ transition: "all 1s ease" }}
			{...rest}
		>
			{children}
		</div>
	);
};

export default FadeInDiv;
