import { Button } from "@ma9pie/lite-ui";
import { Flex } from "@ma9pie/lite-ui";
import Link from "next/link";
import React from "react";

import { Layout } from "@/components/layout";

const Home = () => {
  return (
    <Layout>
      <Flex col gap={32}>
        <Link href="/ores">
          <Button full color="primary">
            Ores
          </Button>
        </Link>

        <Link href="/refined-ores">
          <Button full color="primary">
            Refined Ores
          </Button>
        </Link>

        <Link href="/components">
          <Button full color="primary">
            Components
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Home;
