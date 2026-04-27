const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with actual number
const DEFAULT_MESSAGE = "Hello Laya Green Ventures! I'd like to know more about your initiatives.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <span className="relative flex items-center justify-center h-14 w-14 bg-[#25D366] rounded-full shadow-glow hover:scale-110 transition-transform">
        {/* Official WhatsApp glyph */}
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <path
            fill="#ffffff"
            d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.314.232-.66.232-1.003 0-.214-.058-.328-.244-.43-.214-.114-1.92-.97-2.064-.97zm-2.91 7.218a8.41 8.41 0 0 1-4.297-1.174l-3.072.97 1.003-3.044A8.31 8.31 0 0 1 7.94 16.18a8.247 8.247 0 0 1 8.26-8.245 8.25 8.25 0 0 1 8.276 8.245 8.25 8.25 0 0 1-8.276 8.243zm0-18.118c-5.435 0-9.87 4.434-9.87 9.873 0 1.86.515 3.65 1.504 5.21L5.78 27.045l5.81-1.847a9.86 9.86 0 0 0 4.612 1.146h.014c5.434 0 9.97-4.434 9.97-9.872 0-2.638-1.12-5.118-2.98-6.98a9.74 9.74 0 0 0-6.99-2.91z"
          />
        </svg>
      </span>
    </a>
  );
}
