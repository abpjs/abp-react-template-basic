import {
  Box,
  Button,
  Card,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export function HomePage() {
  return (
    <Box>
      {/* Welcome Section */}
      <Card.Root mb={6}>
        <Card.Body>
          <Heading size="lg" mb={2}>
            Welcome
          </Heading>
          <Text color="gray.600" mb={4}>
            Welcome to the application. This is a startup project based on ABP React. For more
            information, visit{' '}
            <Link href="https://docs.abpjs.io/abp-react" color="blue.500" target="_blank">
              docs.abpjs.io
            </Link>
            .
          </Text>
          <Button as={RouterLink} to="/account/login" colorScheme="blue">
            Login
          </Button>
        </Card.Body>
      </Card.Root>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {/* Getting Started */}
        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={3}>
              <Heading size="md">Getting Started</Heading>
              <Text color="gray.600">
                Learn how to create and run a new web application using the ABP React template.
              </Text>
              <Button
                as={Link}
                href="https://docs.abpjs.io/abp-react/getting-started"
                target="_blank"
                colorScheme="pink"
                size="sm"
              >
                Getting Started
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Documentation */}
        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={3}>
              <Heading size="md">Documentation</Heading>
              <Text color="gray.600">
                Explore the full documentation for ABP React packages and components.
              </Text>
              <Button
                as={Link}
                href="https://docs.abpjs.io/abp-react"
                target="_blank"
                colorScheme="pink"
                size="sm"
              >
                View Docs
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* ABP Community */}
        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={3}>
              <Heading size="md">ABP Community</Heading>
              <Text color="gray.600">
                Join the ABP community to discover articles, videos, and connect with other
                developers.
              </Text>
              <Button
                as={Link}
                href="https://abp.io/community"
                target="_blank"
                variant="outline"
                colorScheme="pink"
                size="sm"
              >
                Join Community
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </Box>
  );
}
