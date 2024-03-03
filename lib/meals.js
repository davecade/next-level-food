import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
	// just to simulate production delay
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const stmt = db.prepare("SELECT * FROM meals");
	throw new Error("loading meals failed");
	return stmt.all();
}
