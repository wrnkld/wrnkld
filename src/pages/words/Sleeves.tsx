import { SplitHeroLayout } from "@/components/SplitHeroLayout";
import { Link } from "react-router-dom";

function SideNote({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <>
      <sup className="text-muted-foreground">{number}</sup>
      <span className="absolute right-0 translate-x-full pl-8 w-48 text-sm text-muted-foreground hidden xl:inline-block">
        <sup>{number}</sup> {children}
      </span>
    </>
  );
}

export default function Sleeves() {
  return (
    <SplitHeroLayout title="Pt 3 → Sleeves" subtitle="Design & AI" colorClass="card-mustard">
      <div className="p-8 lg:p-12 xl:p-16">
        <div className="relative">
          <article className="prose space-y-6">
            <p>
              You can't really quibble with <Link to="/designai/tools" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">Part 1</Link> — it's basically my life story. You could 
              nitpick <Link to="/designai/vibes" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">Part 2</Link>, especially when I admit I haven't explored Figma Make. But Part 3 
              is different. It's where I'm deliberately pushing into new territory.
            </p>
            
            <p className="relative">
              My app, <a href="https://sleeves.app" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">Sleeves</a>, is super simple: you search for music albums and mark your favorites, 
              or current listens. You can make lists, follow friends, and write reviews. That's it. 
              Pretty basic. But I wanted it to work for real, real.<SideNote number={1}>
                <a href="https://www.youtube.com/watch?v=gPNdFHSLAeI" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity">youtube.com/watch?v=gPNdFHSLAeI</a>
              </SideNote>
            </p>
            
            <p>
              Here's the stack I used to make that happen:
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">Lovable</h2>
            <p>
              As I mentioned in Part 2, I tried almost every AI app builder and ended up with Lovable. 
              It's hard to overstate how much better it is than it was a few months ago. I burned through 
              credits and spent about $200 total, but with loose wireframes, decent prompts, and a lot of 
              help from ChatGPT, I had something working in a couple of weeks.
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">ChatGPT</h2>
            <p className="relative">
              I should think more about my prompts in general.<SideNote number={2}>Less cursing, less ALL CAPS</SideNote> For this project, at least at the start, 
              I did. ChatGPT helped at almost every step, especially early architecture decisions.
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">Supabase</h2>
            <p>
              Lovable integrates with Supabase for Postgres, auth, and storage. 
              I needed a database and login flow, and this handled both. The integration is mostly invisible 
              to me, which is fine — I know it's there and that it works.
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">Resend</h2>
            <p className="relative">
              I decided users should get a welcome email. Lovable suggested Resend.<SideNote number={3}>It still blows my mind that Resend is just an email sender. I spent way too long trying to figure out where I was supposed to design the emails.</SideNote> I signed up, wired a 
              couple of keys, and got it working without leaving the free tier.
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">Vercel</h2>
            <p>
              Once I had a working product with auth and emails, I needed it deployed somewhere that wasn't a 
              Lovable subdomain. Lovable recommended Vercel, which worked out since I already use it for 
              this portfolio.
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">Namecheap</h2>
            <p>
              I bought a domain on Namecheap, then pointed the DNS at Vercel so it would serve the app 
              under the real domain. With some help from ChatGPT, this mostly worked on the first try.
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">GitHub</h2>
            <p>
              Eventually, I had to put this in GitHub because… It's code. More importantly, I wanted a 
              path out of the Lovable universe so I wouldn't have to pay maintenance forever.
            </p>
            
            <h2 className="font-display text-xl font-semibold mt-12 mb-4 text-foreground">Cursor</h2>
            <p>
              Here's where I briefly lost the plot. Cursor is incredibly cool, but I couldn't get it to 
              run my local code (user error), so I ran a few Git commands in Terminal and got the repo 
              working. I don't exactly thrive in git, or anything involving bash, nvm, or npm, but I 
              survived. Cursor turned out to be genuinely helpful for cleanup, and after double-checking 
              its advice with ChatGPT, I landed on code that works and feels reasonably stable.
            </p>

            <p className="relative">
              End of interview!<SideNote number={4}>
                <a href="https://www.youtube.com/watch?v=RFZZEpNKjg0" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity">youtube.com/watch?v=RFZZEpNKjg0</a>
              </SideNote> None of this is especially impressive on its own. Sleeves is small, the stack is conventional,
              and the tools did most of the heavy lifting. But that's the point. It's real, it works, and 
              I learned a lot building it.
            </p>

            {/* Mobile/tablet fallback footnotes */}
            <div className="xl:hidden">
              <hr className="border-border my-12" />
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><sup>1</sup> <a href="https://www.youtube.com/watch?v=gPNdFHSLAeI" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity">youtube.com/watch?v=gPNdFHSLAeI</a></p>
                <p><sup>2</sup> Less cursing, less ALL CAPS</p>
                <p><sup>3</sup> It still blows my mind that Resend is just an email sender. I spent way too long trying to figure out where I was supposed to design the emails.</p>
                <p><sup>4</sup> <a href="https://www.youtube.com/watch?v=RFZZEpNKjg0" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity">youtube.com/watch?v=RFZZEpNKjg0</a></p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </SplitHeroLayout>
  );
}