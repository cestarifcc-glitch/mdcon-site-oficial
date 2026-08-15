export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/5555984522204?text=Olá%20MDCon,%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a MDCon pelo WhatsApp"
      title="Falar com a MDCon pelo WhatsApp"
    >
      <svg
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8z" />
        <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
      </svg>
    </a>
  );
}
