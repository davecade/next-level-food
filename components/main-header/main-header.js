import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

const MainHeader = () => {
	return (
		<>
			<MainHeaderBackground />
			<header className={styles.header}>
				<Link href="/" className={styles.logo}>
					<Image src={logoImg} alt="A plate with food on it" priority />
					NextLevel Food
				</Link>

				<nav className={styles.nav}>
					<ul>
						<li>
							<Link href="/meals">Browse Meals</Link>
						</li>
						<li>
							<Link href="/contact">Foodies Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeader;
