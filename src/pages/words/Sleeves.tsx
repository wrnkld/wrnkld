import { PageLayout } from "@/components/PageLayout";

export default function Sleeves() {
  return (
    <PageLayout title="Pt 3 → Sleeves" subtitle="Design & AI">
      <article className="prose space-y-6">
        <p>
          You can't really quibble with Part 1 — it's basically my life story. And sure, 
          you could nitpick Part 2, especially when I admit I haven't explored Figma Make. 
          But Part 3 is where it becomes obvious I was learning in real time.
        </p>
        
        <p>
          My app, Sleeves, is super simple: you search for music albums and mark your favorites, 
          or current listens. You can make lists, follow friends, and write reviews. That's it. 
          Pretty basic. But I wanted it to work for real, real.
        </p>
        
        <p>
          Here's the stack I used to make that happen:
        </p>
        
        <h2>Lovable</h2>
        <p>
          As I mentioned in Part 2, I tried almost every AI app builder and ended up with Lovable. 
          It's hard to overstate how much better it is than it was a few months ago. I burned through 
          credits and spent about $200 total, but with loose wireframes, decent prompts, and a lot of 
          help from ChatGPT, I had something working in a couple of weeks.
        </p>
        
        <h2>ChatGPT</h2>
        <p>
          I should think more about my prompts in general. For this project, at least at the start, 
          I did. ChatGPT helped at almost every step, especially early architecture decisions.
        </p>
        
        <h2>Supabase</h2>
        <p>
          Lovable (and most of these builders) integrates with Supabase for Postgres, auth, and storage. 
          I needed a database and login flow, and this handled both. The integration is mostly invisible 
          to me, which is fine — I know it's there and that it works.
        </p>
        
        <h2>Resend</h2>
        <p>
          I decided users should get a welcome email. Lovable suggested Resend. I signed up, wired a 
          couple of keys, and got it working without leaving the free tier.
        </p>
        
        <p className="text-sm text-muted-foreground italic">
          Sidebar: It still blows my mind that Resend is just an email sender. I spent way too long 
          trying to figure out where I was supposed to design the emails.
        </p>
        
        <h2>Vercel</h2>
        <p>
          Once I had a working product with auth and emails, I needed it live somewhere that wasn't a 
          Lovable subdomain. Lovable recommended Vercel, which worked out since I already use it for 
          my portfolio.
        </p>
        
        <h2>Namecheap</h2>
        <p>
          I bought a domain on Namecheap, then pointed the DNS at Vercel so it would serve the app 
          under the real domain. With some help from ChatGPT, this mostly worked on the first try.
        </p>
        
        <h2>GitHub</h2>
        <p>
          Eventually, I had to put this in GitHub because… It's code. More importantly, I wanted a 
          path out of the Lovable universe so I wouldn't have to pay maintenance forever.
        </p>
        
        <h2>Cursor</h2>
        <p>
          Here's where I briefly lost the plot. Cursor is incredibly cool, but I couldn't get it to 
          run my local code (user error), so I ran a few Git commands in Terminal and got the repo 
          working. I don't exactly thrive in git, or anything involving bash, nvm, or npm, but I 
          survived. Cursor turned out to be genuinely helpful for cleanup, and after double-checking 
          its advice with ChatGPT, I landed on code that works and feels reasonably stable.
        </p>
      </article>
    </PageLayout>
  );
}
