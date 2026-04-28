import { QuestionnaireBackground } from "@/components/questionnaire-background";

export default function KuisionerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuestionnaireBackground>
      {children}
    </QuestionnaireBackground>
  );
}
