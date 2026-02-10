import { Link } from "react-router-dom";

const links = [
  { title: "Pt 1 → Tools", section: "Design & AI", to: "/designai/tools", date: "2025", accentText: "group-hover:text-orange-500" },
  { title: "Pt 2 → Vibes", section: "Design & AI", to: "/designai/vibes", date: "2025", accentText: "group-hover:text-emerald-600" },
  { title: "Pt 3 → Sleeves", section: "Design & AI", to: "/designai/sleeves", date: "2025", accentText: "group-hover:text-cyan-500" },
  { title: "Experience", section: "About", to: "/about/experience", accentText: "group-hover:text-amber-500" },
  { title: "Books", section: "About", to: "/about/books", accentText: "group-hover:text-pink-500" },
  { title: "Records", section: "About", to: "/about/records", accentText: "group-hover:text-purple-500" },
  

  { title: "Tanium", section: "Work", to: "/work/tanium", date: "2019 - 2021", accentText: "group-hover:text-rose-400" },
  { title: "Red Hat", section: "Work", to: "/work/redhat", date: "2016 - 2019", accentText: "group-hover:text-teal-500" },
  { title: "SAS", section: "Work", to: "/work/sas", date: "2011 - 2016", accentText: "group-hover:text-blue-600" },
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
      {/* Rainbow gradient bar with all 9 bright colors */}
      <div 
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(to right, 
            hsl(25 95% 53%),
            hsl(38 92% 50%),
            hsl(160 84% 39%),
            hsl(166 64% 47%),
            hsl(188 94% 43%),
            hsl(221 83% 53%),
            hsl(271 81% 56%),
            hsl(330 81% 60%),
            hsl(351 95% 71%)
          )`
        }}
      />
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-12">
        <div className="space-y-5">
          <h1 className="font-display text-xl md:text-2xl font-medium text-foreground">
            Matthew Stevens
          </h1>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Head of Design at <a href="https://montecarlodata.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">Monte Carlo</a>. Recently built <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">Sleeves</a>, an app for tracking albums you love with friends.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Product design leader with 20 years of experience designing elegant solutions for complex software, leading teams while working as an individual contributor. I work closely with customers and partners in product and engineering to ship clear, usable products.
          </p>
          <p className="font-body text-base text-muted-foreground">
            Say hello → <a href="mailto:hello@wrnkld.tv" className="text-foreground hover:text-muted-foreground transition-colors duration-200">hello@wrnkld.tv</a>
          </p>
        </div>
        
        {sectionOrder.map((section) => (
          <div key={section} className="space-y-3">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
              {section}
            </p>
            <div className="border border-border rounded-md overflow-hidden">
              {groupedLinks[section]?.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center justify-between py-3 px-4 border-b border-border last:border-b-0 transition-all duration-200 hover:bg-white group"
                >
                  <span className={`font-display text-base font-medium text-foreground transition-colors duration-200 ${link.accentText}`}>
                    {link.title}
                  </span>
                  {link.date && (
                    <span className="font-body text-sm text-muted-foreground">
                      {link.date}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
