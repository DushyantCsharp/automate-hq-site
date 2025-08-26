// components/Footer.js
export default function Footer(){
  return (
    <footer className="mt-16 md:mt-20 border-t border-white/10">
      <div className="container-pad py-8 md:py-10 text-sm text-white/70">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Automate-HQ. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#book" className="hover:text-white">Book a call</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
