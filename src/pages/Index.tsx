import { Link } from "react-router-dom";

const links = [
  { title: "Pt 1 → Tools", section: "Design & AI", to: "/designai/tools", date: "2025", accentBorder: "hover:border-orange-500" },
  { title: "Pt 2 → Vibes", section: "Design & AI", to: "/designai/vibes", date: "2025", accentBorder: "hover:border-emerald-600" },
  { title: "Pt 3 → Sleeves", section: "Design & AI", to: "/designai/sleeves", date: "2025", accentBorder: "hover:border-indigo-900" },
  { title: "Experience", section: "About", to: "/about/experience", date: "2026", accentBorder: "hover:border-amber-500" },
  { title: "Books", section: "About", to: "/about/books", date: "2026", accentBorder: "hover:border-slate-500" },
  { title: "Records", section: "About", to: "/about/records", date: "2026", accentBorder: "hover:border-purple-600" },
  { title: "Tanium", section: "Work", to: "/work/tanium", date: "2019–21", accentBorder: "hover:border-rose-400" },
  { title: "Red Hat", section: "Work", to: "/work/redhat", date: "2016–19", accentBorder: "hover:border-teal-500" },
  { title: "SAS", section: "Work", to: "/work/sas", date: "2011–16", accentBorder: "hover:border-blue-600" },
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
          <h1 className="font-display text-2xl md:text-3xl font-medium text-foreground">
            Matthew Stevens
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Head of Design at <a href="https://montecarlodata.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-foreground/60 transition-colors">Monte Carlo</a>. Recently built <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-foreground/60 transition-colors">Sleeves</a>, an app for tracking albums you love with friends.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Product design leader with 20 years of experience designing elegant solutions for complex software, leading teams while working as an individual contributor. I work closely with customers and partners in product and engineering to ship clear, usable products.
          </p>
          <p className="font-body text-lg text-muted-foreground">
            Say hello → <a href="mailto:hello@wrnkld.tv" className="text-foreground hover:text-foreground/60 transition-colors duration-200">hello@wrnkld.tv</a>
          </p>
        </div>
        
        {sectionOrder.map((section) => (
          <div key={section} className="space-y-3">
            <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
              {section}
            </p>
            <div className="space-y-1">
              {groupedLinks[section]?.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center justify-between py-3 px-4 border border-transparent -mb-px last:mb-0 rounded-md transition-all duration-200 hover:bg-white ${link.accentBorder}`}
                >
                  <span className="font-display text-xl font-medium text-foreground">
                    {link.title}
                  </span>
                  <span className="font-body text-muted-foreground">
                    {link.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
