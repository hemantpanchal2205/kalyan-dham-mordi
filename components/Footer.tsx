import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-sandal">
      <div className="spire-divider" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-marigold/20 text-marigold text-lg">
              ॐ
            </span>
            <span className="font-display text-lg text-ivory">
              श्री कल्याण धाम मोरड़ी
            </span>
          </div>
          <p className="text-sm text-sandal/80 leading-relaxed">
            भक्ति, शांति और सेवा का केंद्र — सभी श्रद्धालुओं का हार्दिक स्वागत है।
          </p>
        </div>

        <div>
          <h3 className="font-display text-marigold mb-3">त्वरित लिंक</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-marigold transition-colors">होम</Link></li>
            <li><Link href="/about" className="hover:text-marigold transition-colors">हमारे बारे में</Link></li>
            <li><Link href="/gallery" className="hover:text-marigold transition-colors">गैलरी</Link></li>
            <li><Link href="/events" className="hover:text-marigold transition-colors">उत्सव</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-marigold mb-3">दर्शन व आरती समय</h3>
          <ul className="space-y-2 text-sm text-sandal/90">
            <li>प्रातः आरती 8:00 AM</li>
            <li>प्रातः दर्शन 7:45 AM</li>
            <li>संध्या आरती 7:30 PM</li>
            <li>संध्या दर्शन 7:00 PM</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-marigold mb-3">संपर्क करें</h3>
          <ul className="space-y-2 text-sm text-sandal/90">
            <li>श्री कल्याण धाम, ग्राम मोरडी,
              तहसील गढ़ी, परतापुर,
              जिला बांसवाड़ा, राजस्थान - 327022</li>
            <Link href="tel:+917850918258">+91 78509 18258</Link>
            {/* <li>info@radhakrishnamandir.org</li> */}
          </ul>
        </div>
      </div>

      <div className="border-t border-sandal/15">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sandal/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} श्री काली कल्याण धाम मंदिर ट्रस्ट. सर्वाधिकार सुरक्षित।
          </p>
          <p className="text-sandal/75">
            Designed & Developed by{" "}
            <span className="text-marigold font-semibold tracking-wide">
              Harshit Panchal
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
