import type { NextPage } from "next";
import Head from "next/head";
import yaml from "js-yaml";
import fs from "fs";
import About from "../components/About";
import Links from "../components/Links";
import Cards from "../components/Cards";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Background from "../components/Common/Background";
import Container from "../components/Common/Container";
import Content from "../components/Common/Content";
import Footer from "../components/Common/Footer";

const Home: NextPage<IData> = ({
  name,
  avatar,
  about,
  occupancy,
  location,
  ctas,
  stats,
  links,
  cards,
  experience,
  skills,
  certifications,
  meta,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: occupancy,
    description: about,
    image: avatar,
    address: location,
    sameAs: (links || [])
      .reduce<ILinkItem[]>((all, group) => [...all, ...group.items], [])
      .map((item) => item.url)
      .filter((url) => /^https?:\/\//.test(url)),
  };

  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.tags} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={avatar} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <link rel="canonical" href="https://pedrorod.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Background />

      <Content>
        <About
          avatar={avatar}
          name={name}
          about={about}
          occupancy={occupancy}
          location={location}
          ctas={ctas}
          stats={stats}
        />
        <Links links={links || []} />
        <Experience experience={experience || []} />
        <Skills skills={skills || []} />
        <Certifications certifications={certifications || []} />
        <Cards cards={cards || []} />
      </Content>

      <Footer />
    </Container>
  );
};

export async function getStaticProps() {
  const gistUrl = process.env.GIST_URL as string;

  if (gistUrl) {
    const gistData = await fetch(gistUrl)
      .then((res) => res.blob())
      .then((blob) => blob.text())
      .then((yamlAsString) => yaml.load(yamlAsString) as IData)
      .catch((err) => {
        console.log("yaml err:", err);
      });

    if (gistData) {
      return {
        props: {
          ...gistData,
        },
      };
    }
  }

  const data = yaml.load(
    fs.readFileSync("src/data/index.yml", "utf8")
  ) as IData;

  return {
    props: {
      ...data,
    },
  };
}

export default Home;
