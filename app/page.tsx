import { getOrgRepos, getOrgMembers } from "@/lib/github";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { UpcomingServices } from "@/components/UpcomingServices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const [repos, members] = await Promise.all([
    getOrgRepos("2AMDevs"),
    getOrgMembers("2AMDevs"),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About members={members} />
        <Projects repos={repos} />
        <UpcomingServices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
