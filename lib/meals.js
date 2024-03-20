import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

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

export async function saveMeal(meal) {
	const slug = slugify(meal.title, { lower: true });
	const instructions = xss(meal.instructions);

	meal.slug = slug;
	meal.instructions = instructions;

	const extension = meal.image.name.split(".").pop(); // gets file extension
	const fileName = `${slug}.${extension}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			throw new Error("Error saving image");
		}
	});

	meal.image = `/images/${fileName}`;

	//save in database
	db.prepare(`
		INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
		VALUES (
			@title,
			@summary,
			@instructions,
			@creator,
			@creator_email,
			@image,
			@slug
			)
	`).run(meal);
}
