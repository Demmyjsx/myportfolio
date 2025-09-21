"use client";

import {
  Container,
  Grid,
  GridCol,
  SimpleGrid,
  Skeleton,
  MantineProvider,
} from "@mantine/core";
import Image from "next/image";


const PRIMARY_COL_HEIGHT = "300px";

export function GridTab() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <MantineProvider>
      <Container my="md" className="mx-auto">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {/* Left column: your image */}
          <Image src={"/project1.png"} alt="coding" width={500} height={500} />

          {/* Right column: Grid layout */}
          <Grid gutter="md">
            <GridCol>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </GridCol>

            <GridCol span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </GridCol>

            <GridCol span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
              hi
            </GridCol>
          </Grid>
        </SimpleGrid>
      </Container>
    </MantineProvider>
  );
}
