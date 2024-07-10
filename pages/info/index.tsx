import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import InfoCard from "./components/InfoCard";
import { INFO_LECTURE } from "@/contents/info/lecture";
import { INFO_TOY } from "@/contents/info/toy";
import { INFO_PROJECT } from "@/contents/info/project";

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
            {INFO_PROJECT.map((value, index) => (
              <InfoCard
                key={`${value.title}_${index}`}
                imgSrc={value.imgSrc}
                title={value.title}
                content={value.content}
                routerPath={value.routerPath}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {INFO_TOY.map((value, index) => (
              <InfoCard
                key={`${value.title}_${index}`}
                imgSrc={value.imgSrc}
                title={value.title}
                content={value.content}
                routerPath={value.routerPath}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {INFO_LECTURE.map((value, index) => {
              return (
                <InfoCard
                  key={`${value.title}_${index}`}
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
