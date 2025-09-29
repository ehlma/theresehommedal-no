import ContactForm from "../features/contact/ContactForm.jsx";

export default function ContactPage() {
  document.title = "Kontakt – Therese Hommedal";

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="font-tangerine text-6xl leading-none text-neutral-900">Kontakt</h1>
        <p className="mt-2 text-neutral-600">
          Send meg en melding – jeg svarer så fort jeg kan.
        </p>

        {/* Kun layout her. Selve skjemaet med logikk/render kommer fra ContactForm */}
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}