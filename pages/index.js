import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
	const [showHeart, setShowHeart] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showText, setShowText] = useState(true);
	const [data, setData] = useState([]);

	const HandleClick = (e) => {
		e.preventDefault();
		fetch("https://api-animation.vercel.app/Data/sampleSentence.json")
			.then((response) => response.json())
			.then((datas) => {
				let content = datas[Math.floor(Math.random() * datas.length)];
				setData(content);
				console.log(content);
			});
		setTimeout(bye, 4000);
		setShowHeart(true);
		function bye() {
			setShowHeart(false);
			setShowModal(true);
			setShowText(false);
		}
		
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{showModal && (
					<div className={styles.modal}>
						<div>
							<div className={styles.heading}>
								<h3>{data.title}</h3>
							</div>
							<div className={styles.paragraph}>
								<p>{data.sentence}</p>
							</div>
						</div>
					</div>
				)}

				{showHeart && (
					<div className={styles.heartBox}>
						<div className={styles.heart}></div>
					</div>
				)}

				<div className={styles.socket}>
					{showText && (
						<div className={styles.text}>
							<p>Tap to learn about this home....</p>
						</div>
					)}

					<div className={`${styles.gel}  ${styles.center_gel}`}>
						<div className={styles.request_loader}>
							<div
								onClick={HandleClick}
								className={`${styles.hex_brick} ${styles.h2}`}
							></div>
						</div>
					</div>
				</div>
			</main>

			<footer className="footer"></footer>
		</div>
	);
}
