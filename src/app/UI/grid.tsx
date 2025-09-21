import { Container, Grid, SimpleGrid, Skeleton, MantineProvider } from '@mantine/core';
import ImageProject from './projectUione';


const PRIMARY_COL_HEIGHT = '300px';

export function GridTab() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <MantineProvider>

        <Container my="md">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <ImageProject />
                <Grid gutter="md">
                <Grid.Col>
                    <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
                    hi
                </Grid.Col>
                </Grid>
            </SimpleGrid>
        </Container>
    </MantineProvider>
    
  );
}