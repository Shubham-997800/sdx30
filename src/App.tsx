import { PageLayout } from "@/components/layout/PageLayout";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { BackToTop } from "@/components/shared/BackToTop";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { HeroSection } from "@/sections/hero/HeroSection";
import { MarqueeSection } from "@/sections/marquee/MarqueeSection";
import { WorkSection } from "@/sections/work/WorkSection";
import { EngineeringSection } from "@/sections/engineering/EngineeringSection";
import { StackSection } from "@/sections/stack/StackSection";
import { JourneySection } from "@/sections/journey/JourneySection";
import { AboutSection } from "@/sections/about/AboutSection";
import { LearningSection } from "@/sections/learning/LearningSection";
import { GitHubSection } from "@/sections/github/GitHubSection";
import { ContactSection } from "@/sections/contact/ContactSection";
import { FooterSection } from "@/sections/footer/FooterSection";

export default function App() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <ScrollProgress />
        <HeroSection />
        <MarqueeSection />
        <WorkSection />
        <EngineeringSection />
        <StackSection />
        <JourneySection />
        <AboutSection />
        <LearningSection />
        <GitHubSection />
        <ContactSection />
        <FooterSection />
        <BackToTop />
      </PageLayout>
    </ErrorBoundary>
  );
}
