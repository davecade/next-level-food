"use client";
import React from "react";

const Error = ({ error }) => {
	console.log("ERROR COMPONENT", error);
	return (
		<main className={"error"}>
			<h1>An error occured!</h1>
			<p>Failed to fetch meal data. Please try again later.</p>
		</main>
	);
};

export default Error;
