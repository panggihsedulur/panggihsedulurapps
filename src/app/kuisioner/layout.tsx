import { QuestionnaireBackground } from "@/components/blocks/questionnaire-background";

export default function KuisionerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuestionnaireBackground>{children}</QuestionnaireBackground>;
}
