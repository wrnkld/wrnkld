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

// Group links by section
const groupedLinks = links.reduce((acc, link) => {
  if (!acc[link.section]) acc[link.section] = [];
  acc[link.section].push(link);
  return acc;
}, {} as Record<string, typeof links>);

const sectionOrder = ["Design & AI", "Work", "About"];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Accent bar */}
      <div className="h-1.5 w-full card-slate" />
      
      {/* Header Section */}
      <header className="px-6 pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6 text-left">
            Matthew Stevens
          </h1>
          <p className="prose">
            Head of Design at <a href="https://montecarlodata.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Monte Carlo</a>. Recently built <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-foreground/60 transition-colors">Sleeves</a>, an app for tracking albums you love with friends. Product design leader with 20 years of experience designing elegant solutions for complex software, leading teams while working as an individual contributor. I work closely with customers and partners in product and engineering to ship clear, usable products.
          </p>
        </div>
      </header>
      
      {/* Links Section */}
      <section className="px-6 pb-12 md:pb-20">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="grid gap-8 md:gap-12">
            {sectionOrder.map((section) => (
              <div key={section}>
                <h2 className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  {section}
                </h2>
                <ul className="space-y-2">
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
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="px-6 pb-12">
        <div className="max-w-3xl">
          <p className="font-body text-lg text-muted-foreground">
            Say hello → <a href="mailto:hello@wrnkld.tv" className="underline hover:text-foreground transition-colors">hello@wrnkld.tv</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
