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
				<div className="relative z-10 h-full max-w-6xl mx-auto px-8 md:flex md:items-end">
					<div className="w-full md:w-[44%] pb-[30%]">
						<h1 className="font-tangerine text-white drop-shadow-md text-6xl md:text-7xl leading-none">
							Therese Hommedal
						</h1>
						<div className="mt-2 flex items-center ml-10 gap-4 text-white/90">
							<span className="h-[1px] w-12 bg-white/60" />
							<span className="text-[12px] md:text-[13px] tracking-[0.28em]">
								MAKEUPARTIST
							</span>
							<span className="h-[1px] w-12 bg-white/60" />

						</div>

						<div className="mt-6 ml-24 flex items-center gap-3">
							{/* Om meg */}
							<a
								href="/about"
								className="
									rounded-full px-5 py-2 text-[13px] uppercase tracking-wide
									bg-[#F6EFE7] text-neutral-900 ring-1 ring-neutral-900/10 shadow-sm
									transition-colors duration-200
									hover:bg-neutral-900 hover:text-[#F6EFE7] hover:ring-neutral-900
									focus:outline-none focus:ring-2 focus:ring-neutral-900/40
								"
							>
								Om meg
							</a>

							{/* Instagram */}
							<a
								href="https://www.instagram.com/theresehommedal/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								className="
									group flex h-10 w-10 items-center justify-center rounded-full
									bg-[#F6EFE7] text-neutral-900 ring-1 ring-neutral-900/10 shadow-sm
									transition-colors duration-200
									hover:bg-neutral-900 hover:text-[#F6EFE7] hover:ring-neutral-900
									focus:outline-none focus:ring-2 focus:ring-neutral-900/40
								"
							>
								<FaInstagram className="h-5 w-5 transition-colors duration-200" />
							</a>
						</div>




					</div>
				</div>
			</div>
		</section>
	);
}
