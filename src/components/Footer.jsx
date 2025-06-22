import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Neeraj Reddy</p>
      <p>📧 neeraj.gangidi@gmail.com</p>
    </footer>
  );
}
