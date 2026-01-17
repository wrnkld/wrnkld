import { Link } from "react-router-dom";

const links = [
  { title: "Tools", section: "Design & AI", to: "/designai/tools" },
  { title: "Vibes", section: "Design & AI", to: "/designai/vibes" },
  { title: "Sleeves", section: "Design & AI", to: "/designai/sleeves" },
  { title: "Experience", section: "About", to: "/about/experience" },
  { title: "Books", section: "About", to: "/about/books" },
  { title: "Records", section: "About", to: "/about/records" },
  { title: "Tanium", section: "Work", to: "/work/tanium" },
  { title: "Red Hat", section: "Work", to: "/work/redhat" },
  { title: "SAS", section: "Work", to: "/work/sas" },
];

const groupedLinks = links.reduce((acc, link) => {
  if (!acc[link.section]) acc[link.section] = [];
  acc[link.section].push(link);
  return acc;
}, {} as Record<string, typeof links>);

const sectionOrder = ["Design & AI", "Work", "About"];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16 space-y-10">
        <div className="space-y-4">
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Matthew Stevens
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Head of Design at <a href="https://montecarlodata.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Monte Carlo</a>. Recently built <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Sleeves</a>, an app for tracking albums you love with friends. Product design leader with 20 years of experience designing elegant solutions for complex software, leading teams while working as an individual contributor. I work closely with customers and partners in product and engineering to ship clear, usable products.
          </p>
        </div>
        
        {sectionOrder.map((section) => (
          <div key={section} className="space-y-3">
            <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
              {section}
            </p>
            <ul className="space-y-1">
              {groupedLinks[section]?.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-display text-xl md:text-2xl text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <p className="font-body text-lg text-muted-foreground">
          Say hello → <a href="mailto:hello@wrnkld.tv" className="underline hover:text-foreground transition-colors">hello@wrnkld.tv</a>
        </p>
      </div>
    </div>
  );
}
