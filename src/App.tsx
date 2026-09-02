import { lazy, Suspense } from 'react';
import { PageLayout } from "@/components/layout/PageLayout";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { BackToTop } from "@/components/shared/BackToTop";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { HeroSection } from "@/sections/hero/HeroSection";
import { MarqueeSection } from "@/sections/marquee/MarqueeSection";
import { WorkSection } from "@/sections/work/WorkSection";

const EngineeringSection = lazy(() => import('@/sections/engineering/EngineeringSection').then(m => ({ default: m.EngineeringSection })));
const StackSection = lazy(() => import('@/sections/stack/StackSection').then(m => ({ default: m.StackSection })));
const JourneySection = lazy(() => import('@/sections/journey/JourneySection').then(m => ({ default: m.JourneySection })));
const AboutSection = lazy(() => import('@/sections/about/AboutSection').then(m => ({ default: m.AboutSection })));
const LearningSection = lazy(() => import('@/sections/learning/LearningSection').then(m => ({ default: m.LearningSection })));
const GitHubSection = lazy(() => import('@/sections/github/GitHubSection').then(m => ({ default: m.GitHubSection })));
const ContactSection = lazy(() => import('@/sections/contact/ContactSection').then(m => ({ default: m.ContactSection })));
const FooterSection = lazy(() => import('@/sections/footer/FooterSection').then(m => ({ default: m.FooterSection })));

function SectionLoader() {
  return <div className="min-h-[200px]" />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <PageLayout>
        <ScrollProgress />
        <HeroSection />
        <MarqueeSection />
        <WorkSection />
        <Suspense fallback={<SectionLoader />}>
          <EngineeringSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <StackSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <JourneySection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LearningSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <GitHubSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FooterSection />
        </Suspense>
        <BackToTop />
      </PageLayout>
    </ErrorBoundary>
  );
}
