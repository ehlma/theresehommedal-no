import brideHome2 from "../../assets/bride/brideHome2.jpeg";
import { FaInstagram } from "react-icons/fa";

export default function Hero() {
	return (
		<section id="hero" className="relative bg-[#f5f0e8]">
			{/* Wrapper som tar full høyde minus header */}
			<div className="relative h-[calc(90svh-52px)]">
				{/* Bakgrunnsbilde i full bredde/høyde */}
				<img
					src={brideHome2}
					alt="Brud i bil, Therese Hommedal"
					className="
						absolute inset-x-0 -top-[10px]         
						h-full w-full         
						object-cover
						object-[50%_5%]                      
					"
					style={{ objectPosition: "50% 5%" }}
				/>

				{/* Bunn-gradient for kontrast */}
				<div className="pointer-events-none absolute inset-z-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

				{/* Innhold/tekst – lagt over kjolen */}
				<div className="relative z-10 h-full max-w-6xl mx-auto px-8 flex items-end">
					<div className="w-full md:w-[44%] self-end md:pb-12 pb-8">
						<div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
							<div className="flex-1">
								<h1 className="font-playfair text-neutral-900 text-5xl md:text-6xl leading-tight">
									Therese Hommedal
								</h1>

								<div className="mt-2 flex items-center gap-4 text-neutral-800">
									<span className="font-inter text-[12px] md:text-[13px] tracking-[0.2em] uppercase whitespace-nowrap">
										Fremhever din naturlige skjønnhet
									</span>
								</div>
							</div>

							<div className="flex items-center gap-3">
								{/* Om meg */}
								<a
									href="/about"
									className="
					          group relative inline-flex items-center font-inter text-[13px] uppercase tracking-[0.18em] text-neutral-900 hover:text-neutral-800 transition-all duration-300

					        "
								>
									<span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-neutral-900 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-left">
										Om meg
									</span>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
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
