import { FaInstagram } from "react-icons/fa";
import heroImage from "../../../assets/collabs/c5.avif";

export default function Hero() {
	return (
		<section id="hero" className="hero">
			{/* Wrapper som tar full høyde minus header */}
			<div className="hero-wrap">
				{/* Bakgrunnsbilde i full bredde/høyde  */}
				<img
					src={heroImage}
					alt="Bilde av # for Costume"
					className="hero-bg"
				/>
				

				{/* Bunn-gradient for kontrast */}
				<div className="hero-gradient" />

				{/* Innhold/tekst – lagt over kjolen */}
				<div className="hero-inner container-fluid flex items-end">
					<div className="hero-col">
						<div className="hero-row">
							<div className="hero flex-1">
								<h1 className="heading-hero font-heading">
									Therese Hommedal
								</h1>

								<div className="mt-2">
									<span className="eyebrow font-inter whitespace-nowrap">
										Fremhever din naturlige skjønnhet
									</span>
								</div>
							</div>

							<div className="flex items-center gap-3">
								{/* Om meg */}
								<a
									href="/about"
									className="link-btn"
								>
									<span>
										Om meg
									</span>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="arrow ml-2 h-3 w-3"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={1.5}
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
