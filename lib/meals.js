import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
	// just to simulate production delay
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const stmt = db.prepare("SELECT * FROM meals");
	return stmt.all();
}

export async function getMeal(slug) {
	const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
	return stmt.get(slug);
}

export function saveMeal(meal) {
	const slug = slugify(meal.title, { lower: true });
	const instructions = xss(meal.instructions);

	meal.slug = slug;
	meal.instructions = instructions;
}
