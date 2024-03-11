"use client";
import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
	const [pickedImage, setPickedImage] = useState(null);
	const imageInputRef = useRef();

	const handlePickImage = () => {
		imageInputRef.current.click();
	};

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (!file) {
			setPickedImage(null);
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};

	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt="The image selected by the user"
							fill
						/>
					)}
				</div>
				<input
					ref={imageInputRef}
					className={styles.input}
					type="file"
					id={name}
					name={name}
					accept="image/jpeg"
					onChange={handleImageChange}
					required
				/>
				<button
					className={styles.button}
					type="button"
					onClick={handlePickImage}
				>
					Pick an Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
