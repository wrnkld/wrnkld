import { Link } from "react-router-dom";

const links = [
  { title: "Pt 1 → Tools", section: "Design & AI", to: "/designai/tools", date: "2025", hoverClass: "hover:bg-[hsl(12_76%_52%)]" },
  { title: "Pt 2 → Vibes", section: "Design & AI", to: "/designai/vibes", date: "2025", hoverClass: "hover:bg-[hsl(160_40%_35%)]" },
  { title: "Pt 3 → Sleeves", section: "Design & AI", to: "/designai/sleeves", date: "2025", hoverClass: "hover:bg-[hsl(220_50%_25%)]" },
  { title: "Experience", section: "About", to: "/about/experience", date: "2026", hoverClass: "hover:bg-[hsl(45_80%_55%)]", darkText: true },
  { title: "Books", section: "About", to: "/about/books", date: "2026", hoverClass: "hover:bg-[hsl(220_15%_45%)]" },
  { title: "Records", section: "About", to: "/about/records", date: "2026", hoverClass: "hover:bg-[hsl(280_35%_40%)]" },
  { title: "Tanium", section: "Work", to: "/work/tanium", date: "2019–21", hoverClass: "hover:bg-[hsl(5_85%_65%)]" },
  { title: "Red Hat", section: "Work", to: "/work/redhat", date: "2016–19", hoverClass: "hover:bg-[hsl(175_50%_40%)]" },
  { title: "SAS", section: "Work", to: "/work/sas", date: "2011–16", hoverClass: "hover:bg-[hsl(230_45%_45%)]" },
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
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-10">
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
            <div className="border border-border rounded-md overflow-hidden">
              {groupedLinks[section]?.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center justify-between py-3 px-4 border-b border-border last:border-b-0 transition-colors duration-300 group ${link.hoverClass}`}
                >
                  <span className={`font-display text-xl font-semibold text-foreground transition-colors duration-300 ${link.darkText ? 'group-hover:text-foreground' : 'group-hover:text-white'}`}>
                    {link.title}
                  </span>
                  <span className={`font-body text-muted-foreground transition-colors duration-300 ${link.darkText ? 'group-hover:text-foreground/70' : 'group-hover:text-white/80'}`}>
                    {link.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        
        <p className="font-body text-lg text-muted-foreground">
          Say hello → <a href="mailto:hello@wrnkld.tv" className="underline hover:text-foreground transition-colors">hello@wrnkld.tv</a>
        </p>
      </div>
    </div>
  );
}
