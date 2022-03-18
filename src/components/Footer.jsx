function Footer() {
  return (
    <footer className="footer-copyright">
      <div className="container">
        <span>© {new Date().getFullYear()} Victor Listapad</span>
        <a className="grey-text text-lighten-4 right" href="#!" target="_blank">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export { Footer };
