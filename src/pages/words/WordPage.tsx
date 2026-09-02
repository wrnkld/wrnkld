import { Navigate, useParams } from "react-router-dom";
import { DetailLayout } from "@/components/DetailLayout";
import { ToolsBody } from "@/content/words/ToolsBody";
import { VibesBody } from "@/content/words/VibesBody";
import { SleevesBody } from "@/content/words/SleevesBody";
import { ClaudeBody } from "@/content/words/ClaudeBody";

const WORDS = {
  tools: { title: "Pt 1 → Tools", Body: ToolsBody },
  vibes: { title: "Pt 2 → Vibes", Body: VibesBody },
  sleeves: { title: "Pt 3 → Sleeves", Body: SleevesBody },
  claude: { title: "Pt 4 → Claude", Body: ClaudeBody },
} as const;

export default function WordPage() {
  const { slug } = useParams<{ slug: keyof typeof WORDS }>();
  const entry = slug ? WORDS[slug] : undefined;
  if (!entry) return <Navigate to="/" replace />;
  const { title, Body } = entry;

  return (
    <DetailLayout title={title} subtitle="Words">
      <Body />
    </DetailLayout>
  );
}
