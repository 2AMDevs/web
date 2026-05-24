import { getOrgRepos, getTeamProfiles } from "@/lib/github";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { UpcomingServices } from "@/components/UpcomingServices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const [repos, team] = await Promise.all([
    getOrgRepos("2AMDevs"),
    getTeamProfiles(),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero repoCount={repos.length} />
        <About team={team} />
        <Projects repos={repos} />
        <UpcomingServices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
