import styles from './page.module.css';
import Hero from '@components/hero';
import ProjectsSection from '@components/sections/projects';
import ServicesSection from '@components/sections/services';
import ExperienceSection from '@components/sections/experience';
import Banner from '@components/banner';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.content}>
        <ProjectsSection />
        <ServicesSection />
        <ExperienceSection />

        <div className={'section'}>
          <Banner />
        </div>
      </div>
    </main>
  );
}
