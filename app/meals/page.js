import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
	const meals = await getMeals();

	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, create{" "}
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>
					Choose your facvoriyte recipe and cook it yourself. It is east and
					fun!
				</p>
				<p className={styles.cta}>
					<Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={styles.main}>
				<MealsGrid meals={meals} />
			</main>
		</>
	);
};

export default MealsPage;
