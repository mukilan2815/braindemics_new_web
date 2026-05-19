export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__text">
        &copy; {new Date().getFullYear()} Braindemics. All rights reserved.
      </p>
    </footer>
  );
}
