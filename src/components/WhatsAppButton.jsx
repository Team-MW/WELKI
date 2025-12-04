function WhatsAppButton() {
  const phone = '33608070696'; // 06 08 07 06 96 au format international
  const url = `https://wa.me/${phone}?text=Bonjour%20WELKI%2C%20je%20souhaite%20un%20devis%20ou%20des%20informations%20sur%20vos%20services.`;

  return (
    <a
      href={url}
      className="wa-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec WELKI sur WhatsApp"
    >
      <span className="wa-icon">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M16 4C9.935 4 5 8.935 5 15c0 2.27.67 4.374 1.83 6.148L6 28l7.066-1.796C14.02 26.733 15 27 16 27c6.065 0 11-4.935 11-11S22.065 4 16 4z"
            fill="#25D366"
          />
          <path
            d="M13.4 11.2c-.306-.68-.63-.694-.92-.706-.238-.01-.51-.01-.782-.01-.272 0-.714.102-1.087.51-.373.408-1.427 1.39-1.427 3.39 0 1.999 1.461 3.936 1.664 4.209.204.272 2.83 4.517 6.985 6.147 3.455 1.36 4.158 1.09 4.909 1.02.75-.068 2.416-.987 2.758-1.94.34-.952.34-1.769.238-1.94-.102-.17-.374-.272-.782-.476-.408-.204-2.416-1.19-2.79-1.326-.374-.136-.646-.204-.92.204-.272.408-1.056 1.326-1.296 1.598-.238.272-.476.306-.884.102-.408-.204-1.72-.634-3.278-2.02-1.211-1.08-2.03-2.415-2.27-2.823-.238-.408-.025-.626.18-.83.184-.183.408-.476.612-.714.204-.238.272-.408.408-.68.136-.272.068-.51-.034-.714-.102-.204-.9-2.227-1.27-3.042z"
            fill="#fff"
          />
        </svg>
      </span>
      <span className="wa-label">WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;


