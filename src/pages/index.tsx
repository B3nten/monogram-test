import { useAnimateIn } from "@src/common/hooks/useAnimateIn";
import Head from "next/head";
import { API } from "@src/modules/index/API";
import { Hero } from "@src/modules/index/Hero";
import { Markup, BlockStack } from "@src/modules/index/Markup";
import { Audit } from "@src/modules/index/Audit";
import { JS } from "@src/modules/index/JS";

export default function Home() {


  return (
    <>
      <Head>
        <title>Monogram Test - Benton</title>
        <meta name="Benton's Monogram Test" content="This is a test page build by Benton Boychuuk-Chorney."></meta>
      </Head>
      {/* Hero section */}
      <Hero />
      {/* Javascript computer section */}
      <JS />
      {/* API section */}
      <API />
      {/* Markup section */}
      <Markup />
      <BlockStack />
      {/* Audit section */}
      <Audit />
    </>
  );
};