// app/home.tsx
'use client';

import { Box, Text, Button } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box textAlign="center" fontSize="xl" p={10}>
      <Text fontSize="3xl" color="brand.500">
        Welcome to Your Chakra UI Enhanced Next.js App!
      </Text>
      <Text my={4}>
        This is a simple demonstration of custom theming with Chakra UI.
      </Text>
      <Button colorScheme="brand" p={6}>
        Click Me!
      </Button>
    </Box>
  );
}
//Tests 