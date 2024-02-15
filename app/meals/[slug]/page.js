export default function MealsPost({ params }) {
	console.log("params > ", params);
	return (
		<main>
			<h1 style={{ color: "white", textAlign: "center" }}>
				Meals Post Page {params.slug}
			</h1>
		</main>
	);
}
