"use server";

import { redirect } from "next/navigation.js";
import { saveMeal } from "./meals.js";
import { revalidatePath } from "next/cache.js";

function isInvalidTeam(text) {
	return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isInvalidTeam(meal.title) ||
		isInvalidTeam(meal.summary) ||
		isInvalidTeam(meal.instructions) ||
		isInvalidTeam(meal.creator) ||
		isInvalidTeam(meal.creator_email) ||
		!meal.creator_email.includes("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: "Invalid input",
		};
	}

	await saveMeal(meal);
	revalidatePath("/meals", "layout");
	redirect("/meals");
}
