import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const InfoCard = ({
  imgSrc,
  title,
  content,
  routerPath,
}: {
  imgSrc: string;
  title: string;
  content: string;
  routerPath: string;
}) => {
  const handleRouter = () => {
    window.location.href = routerPath;
  };

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        m={"1rem 0"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "270px" }}
          src={imgSrc}
          alt="Project Capture"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2">{content}</Text>
          </CardBody>

          <CardFooter>
            <Button onClick={handleRouter} variant="solid" colorScheme="blue">
              Go Page!
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default InfoCard;
