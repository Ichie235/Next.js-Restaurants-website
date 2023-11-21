"use client";
import { CSSProperties, ChangeEvent, useState } from "react";
import { Public_Sans } from "next/font/google";

type FormInputTypes = {
	type: string;
	title: string;
	id?: string;
	name: string;
	pattern?: string;
	value: string | number;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	maxLength?: number;
	minLength?: number;
	icon?: string;
	placeholder?: string;
	disabled?: boolean;
	style?: CSSProperties;
	className?: string;
};

const font = Public_Sans({ subsets: ["latin"] });

export default function FormInput(props: FormInputTypes) {
	const [formState, setFormState] = useState({
		[props.name]: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		e.preventDefault();

		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function togglePassword() {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	}

	return (
		<span
			id="form-input"
			className="w-full flex flex-col items-start gap-1 bg-transparent rounded-small"
		>
			<label
				htmlFor={props.id}
				className={`text-base ${formState[props.name] ? "active" : ""} ${
					font.className
				}`}
			>
				{props.title}
			</label>

			<input
				type={props.type === "password" && showPassword ? "text" : props.type}
				name={props.name}
				id={props.id}
				value={props.value}
				onChange={(e: ChangeEvent<HTMLInputElement>): void => {
					handleChange(e);
					if (props.onChange) {
						props.onChange(e);
					}
				}}
				pattern={props.pattern}
				maxLength={props.maxLength}
				minLength={props.minLength}
				required
				placeholder={props.placeholder}
				disabled={props.disabled}
				className={`w-full h-10 bg-transparent outline-none resize-none placeholder:text-apt-blue-500 border-[1px] border-apt-blue-500 rounded py-1 px-1 overflow-hidden text-apt-black focus-within:border-blue ${font.className} ${props.className}`}
			/>
			{props.icon && <i className={props.icon}></i>}

			{props.type === "password" && (
				<i
					className={`fa-solid fa-${showPassword ? "eye" : "eye-slash"}`}
					onClick={togglePassword}
				></i>
			)}
		</span>
	);
}
