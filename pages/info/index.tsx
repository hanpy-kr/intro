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
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          border: "0",
          clip: "rect(0,0,0,0)",
        }}
      >
        hanpy에서 관리하고 있는 프로젝트와 토이프로젝트에 대한 정리페이지
        입니다. 프로젝트의 종류는 초대카드/블로그/네컷 사진/농수산물 커뮤니티
        관련 프로젝트를 진행하였습니다.
        <br />
        블로그를 만든 목표는 코드 정보를 공유하는데 있습니다. 카테고리로는
        프런트엔드/백엔드/인프라가 있습니다. 기본적으로 2틀에 한번씩 글이
        올라오면 독자들에게 도움을 많이 줄 수 있도록 최선을 다할 예정입니다.
        <br />
        토이 브로젝트는 간단하게 기술들을 적용해보고 플래폼 까지는 연결하지 않는
        기술들을 다룹니다. 영어 교육사이트에서는 발금 공유를 할 수 있는 페이지와
        프리토킹이 가능한 페이지를 만들고 있습니다.
      </div>
    </div>
  );
}
