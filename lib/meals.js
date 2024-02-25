import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
	// just to simulate production delay
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const stmt = db.prepare("SELECT * FROM meals");
	return stmt.all();
}