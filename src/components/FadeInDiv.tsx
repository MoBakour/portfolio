import { useEffect, useRef, useState } from "react";

interface IFadeInDivProps {
	children: React.ReactNode;
	className?: string;
	[key: string]: any;
}

const FadeInDiv = ({ children, className, ...rest }: IFadeInDivProps) => {
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
