import Hero from './components/Hero';
import WorkExplorer from './components/WorkExplorer';
import AboutProjectsNav from './components/AboutProjectsNav';
import CompanyContact from './components/CompanyContact';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkExplorer />
      <AboutProjectsNav />
      <CompanyContact />
    </>
  );
}