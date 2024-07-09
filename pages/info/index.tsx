import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import InfoCard from "./components/InfoCard";
import { INFO_LECTURE } from "./constants/Lecture";
import { INFO_TOY } from "./constants/Toy";
import { INFO_PROJECT } from "./constants/Project";

export default function Info() {
  return (
    <div
      style={{
        // width: "90vw",
        padding: "0vw 2vw",
      }}
    >
      <Text as="b" fontSize="5xl">
        BETA TEST
      </Text>
      {/* <h2>BETA TEST</h2> */}
      <Tabs isManual variant="enclosed">
        <TabList>
          <Tab>Project</Tab>
          <Tab>Toy</Tab>
          <Tab>Lecture</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {INFO_PROJECT.map((value) => (
              <InfoCard
                imgSrc={value.imgSrc}
                title={value.title}
                content={value.content}
                routerPath={value.routerPath}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {INFO_TOY.map((value) => (
              <InfoCard
                imgSrc={value.imgSrc}
                title={value.title}
                content={value.content}
                routerPath={value.routerPath}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {INFO_LECTURE.map((value) => {
              return (
                <InfoCard
                  imgSrc={value.imgSrc}
                  title={value.title}
                  content={value.content}
                  routerPath={value.routerPath}
                />
              );
            })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
