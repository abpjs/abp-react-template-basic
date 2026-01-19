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
import { Rocket, BookOpen, Users, LogIn } from 'lucide-react';

export function HomePage() {
  return (
    <Box>
      {/* Welcome Section */}
      <Card.Root mb={6}>
        <Card.Body>
          <Heading size="lg" mb={2}>
            Welcome
          </Heading>
          <Text mb={4}>
            Welcome to the application. This is a startup project based on ABP React. For more
            information, visit{' '}
            <Link href="https://docs.abpjs.io/docs" target="_blank">
              docs.abpjs.io
            </Link>
            .
          </Text>
          <RouterLink to="/account/login">
            <Button>
              <LogIn size={18} />
              Login
            </Button>
          </RouterLink>
        </Card.Body>
      </Card.Root>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {/* Getting Started */}
        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={3}>
              <Rocket size={28} />
              <Heading size="md">Getting Started</Heading>
              <Text>
                Learn how to create and run a new web application using the ABP React template.
              </Text>
              <Link href="https://docs.abpjs.io/abp-react/getting-started" target="_blank">
                <Button variant="outline"  size="sm">
                  Getting Started
                </Button>
              </Link>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* Documentation */}
        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={3}>
              <BookOpen size={28} />
              <Heading size="md">Documentation</Heading>
              <Text>
                Explore the full documentation for ABP React packages and components.
              </Text>
              <Link href="https://docs.abpjs.io/abp-react" target="_blank">
                <Button variant="outline"  size="sm">
                  View Docs
                </Button>
              </Link>
            </VStack>
          </Card.Body>
        </Card.Root>

        {/* ABP Community */}
        <Card.Root>
          <Card.Body>
            <VStack align="start" gap={3}>
              <Users size={28} />
              <Heading size="md">ABP Community</Heading>
              <Text>
                Join the ABP community to discover articles, videos, and connect with other
                developers.
              </Text>
              <Link href="https://abp.io/community" target="_blank">
                <Button variant="outline" size="sm">
                  Join Community
                </Button>
              </Link>
            </VStack>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </Box>
  );
}
