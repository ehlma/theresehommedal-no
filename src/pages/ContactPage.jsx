import ContactForm from "../features/contact/ContactForm.jsx";

export default function ContactPage() {
  document.title = "Kontakt – Therese Hommedal";

  return (
    <div className="bg-white">


      {/* Kun layout her. Selve skjemaet med logikk/render kommer fra ContactForm */}
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}