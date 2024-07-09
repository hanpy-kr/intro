import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import HanpyLog from "public/education/hanpy_computer.jpeg";
import IncheonAirport from "public/images/resume/incheon-airport.jpg";

import { MdCheckCircle } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsPencil } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
// import { ExternalLinkIcon } from "react-icons/ex";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex
        p={8}
        flex={1}
        direction="column"
        // align={"center"}
        // justify={"center"}
      >
        <Container>
          <Flex align="center" gap="1">
            <Image
              src={HanpyLog}
              alt="hanpy logo"
              width={65}
              height={40}
              placeholder="blur"
              unoptimized
            />
            <Heading as="h1" noOfLines={1}>
              강창현
            </Heading>
          </Flex>
          <Spacer p={1} />
          <hr />
          <Box>
            <Spacer p={1} />
            <Badge variant="outline" colorScheme="green">
              사용자와 가장 가까이서
            </Badge>{" "}
            비즈니스 가치를 창출함에 가치를 두고있는 풀스택 웹개발자입니다.
            미래에 대한 고민보다는, 오늘보다 발전한 내일을 위해 고민합니다.
          </Box>
          {/* <Box>
          개발자란 MAKER라고 생각합니다. MAKER로서의 가치는 비즈니스 가치를
          구현함으로 시작된다고 믿습니다. 사용자와 가장 가까이서 비즈니스 가치를
          창출하는 웹개발자 입니다.
        </Box> */}
          <Spacer p={4} />
          <Heading as="h1" noOfLines={1}>
            Experiences
          </Heading>
          <Spacer p={1} />
          <hr />
          <Spacer p={4} />
          <Flex align="center" gap="1">
            <Icon as={FaRegBuilding} w={8} h={8} color="blue.800" />

            <Heading as="h2" noOfLines={1} size="md">
              딥브레인에이아이
            </Heading>
          </Flex>
          <Spacer p={1} />
          <Text fontSize="md">
            인공지능(AI) 영상 합성 전문 기업으로 영상 합성, 음성 합성 원천
            기술을 모두 보유하고 있는 대표적인 글로벌 3대 기업
          </Text>
          <Spacer p={2} />
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>period</Th>
                  <Td>2022.07 ~ 재직중</Td>
                </Tr>
                <Tr>
                  <Th>position</Th>
                  <Td>Full Stack</Td>
                </Tr>
                <Tr>
                  <Th>projects</Th>
                  <Td> Web SDK / SaaS 서비스 개발 / Solution 개발</Td>
                </Tr>
                <Tr>
                  <Th>tech</Th>
                  <Td> Nextjs / Typescript / 자동화 배포</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Spacer p={5} />

          {/* <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [Service] Admin 리펙토링 (2024.03~)
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            현재 운영중인 AIStudio/AIHuman/Deepfake/DreamAvatar/Kiosk 통합 admin
            구축
          </Text>
          <hr />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              SaaS 서비스와 솔루션 최적화를 위한{" "}
              <Badge variant="outline" colorScheme="yellow">
                kubernetes configmap
              </Badge>{" "}
              적용과
              <Badge variant="outline" colorScheme="green">
                NEXT_PUBLIC_ 대신 recoil
              </Badge>
              로 대체
            </ListItem>
          </List> */}
          <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [Service] DEEPFAKE 탐지 서비스 개발 (2024.02~)
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            전 리전 배포 예정(미국/중국/한국/유럽)
          </Text>
          <hr />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Frontend 개발 리드
            </ListItem>
          </List>
          <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 우리은행 국민연금 다국어 KIOSK 개발 (2024.01~)
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            국민연금 본사(전주) 납품 (4개 지점 추가 납품)
          </Text>
          <hr />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              프로젝트 개발 리드
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="green">
                zustand 도입
              </Badge>{" "}
              AIHuman Speech Cycle에 따른 전역변수 간소화
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="blue">
                ADAPTER PATTERN
              </Badge>{" "}
              STT&TTS 모듈화 / Translation 모듈화 / Chatbot 모듈화
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="blue">
                ADAPTER PATTERN
              </Badge>{" "}
              STT&TTS 모듈화 / Translation 모듈화 / Chatbot 모듈화
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="yellow">
                자동화 배포 관리
              </Badge>{" "}
              Docker / argo CICD
            </ListItem>
          </List>
          <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] DEEPFAKE 탐지 솔루션 (2023.09~2023.12)
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            경찰청/미래과학아카데미 납품
          </Text>
          <hr />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Frontend 개발 리드
            </ListItem>

            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              제공한 Web SDK에서 IOS 에 따른 이슈 해결
            </ListItem> */}
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="green">
                HTML VIDEO DOM
              </Badge>{" "}
              <Badge variant="outline" colorScheme="green">
                ffmpeg
              </Badge>{" "}
              영상 편집 기능 제작
            </ListItem>
          </List>
          <Spacer p={4} />

          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 인천국제공항공사 Kiosk (web) (2023.07 ~ 2023.08)
          </Heading>
          <Spacer p={1} />
          <hr />

          <Flex align="center" gap="1">
            <List spacing={1} p={2}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                SaaS 형 KIOSK 도입 제안 (기존 : on-premise형 키오스크)
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Badge variant="outline" colorScheme="blue">
                  Vanilla Javascript
                </Badge>{" "}
                공통으로 사용되는 State들은 Observer 패턴의 상태관리 적용하여 UI
                변경
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Badge variant="outline" colorScheme="yellow">
                  kubernetes CronJob
                </Badge>{" "}
                5분마다 항공시간 업데이트
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                <Badge variant="outline" colorScheme="blue">
                  Stateless API
                </Badge>{" "}
                session을 활용한 socket 연동 (remote control)
              </ListItem>
            </List>
            <Image
              src={IncheonAirport}
              alt="hanpy logo"
              width={120}
              height={180}
              unoptimized
              // loading="lazy"
              placeholder="blur"
              style={{ margin: "10px", borderRadius: "3px" }}
            />{" "}
          </Flex>

          {/* <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] KB국민은행 인공인간 금융비서 프로젝트 (2023.6)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              제공한 Web SDK를 적용하는 과정에서, Background에서 Forground
              진입시 IOS 음성/MOV 제어 이슈로 Brige 함수 제공
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              폐쇄망 내부 환경에 맞게 Web 서비스 환경(Nextjs) 재구성 및
              DockerFile 제공
            </ListItem>
          </List> */}
          <Spacer p={4} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              Web SDK 최적화 (2022.12~2023.06)
            </Heading>
            <Link href="https://docs.deepbrain.io/aihuman/web-sdk">
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Flex>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            Web에서 실제 사람과 닮은 AI Human을 실시간으로 표시할 수 있도록
            도와주는 SDK
          </Text>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="green">
                requestAnimationFrame
              </Badge>{" "}
              도입으로 브라우저별 AI Human 프래임 안정화
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="green">
                Browser Caching
              </Badge>{" "}
              브라우저 indexedDB API 적용을 통한 GPU 비용 절감
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [API 서버] SDK 토큰 인증 설계/개발 (appId / userKey 발급 고도화)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              SDK 이전 레거시 코드 제거
            </ListItem>
            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              실시간으로 png로 실행하던 AI Human을 영상 버전(Webm/mov)으로 변경
              하여, 리소스 다운로드 최소화
            </ListItem> */}
            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              SDK 인증 서버를 통해, Web/IOS/Wnd/And 플랫폼에 필요한 API 제공
            </ListItem> */}
          </List>
          <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            실시간 고속 합성 Web SDK 연구/개발 (2023.01~2023.02)
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            Text를 Web에서 딥러닝 서버로 보낸 후에, 학습 결과인 Image/Audio를
            실시간으로 받아서 AI Human이 발화하기 까지 1.5s를 목표로 최적화
            구현.(Web SDK 고도화)
          </Text>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <Badge variant="outline" colorScheme="blue">
                socketIO
              </Badge>{" "}
              image Buffer / audio Buffer 최적화를 위해 SDK 우선순위 큐 적용
            </ListItem>
          </List>
          <Spacer p={4} />
          {/* <Heading as="h4" size="sm" noOfLines={1}>
            자사 통합 로그인 SSO 서버 구축
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              자사 서비스에 적합한 통합 auth 서버 설계/도입
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              자사 보안 강화를 위해 기존의 단순 로그인 방식에
              accessToken/refreshToken 적용
            </ListItem>
          </List> */}
          <Heading as="h4" size="sm" noOfLines={1}>
            SDK 사용 고객사를 위한 가이드 문서 / Sample Code
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            고객사의 편의를 위한, userKey / appId만 넣으면 실행가능하도록 변경.
            (고객 SDK 사용 문의 감소)
          </Text>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Express / html 를 활용한 데모 버전 제작/제공
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Nextjs 를 활용한 데모 프로젝트 제작/제공
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              vanilla javascript 제작/제공
            </ListItem>
          </List>
          {/* <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 국정원 딥페이크 탐지 (2022.11~ 1차 완료. 2차 고도화 진행 중)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              기획에 따른 UI 제작
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              내부 설치
            </ListItem>
          </List> */}
          {/* <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] KB국민은행 인공인간 프로젝트 (2022.10~ 2차 완료. 3차 고도화
            진행 중)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              폐쇄망 내부 환경에 맞게 Web 서비스 환경 재구성 및 DockerFile 제공
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Web SDK 수정 제공
            </ListItem>
          </List> */}
          <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 농협은행 가상인간 고도화 사업 (2022.09~2022.11)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [솔루션 개발] 폐쇄망 내부 환경에 맞게 Web 서버 리펙토링
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              은행 내부 사원과 SSO 연동
            </ListItem>
          </List>
          <Spacer p={4} />
          {/* <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] BMW 개발 지원(2022.12)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              BMW 내부망(On-premise) SDK 인증 Server 경량화 제공
            </ListItem>
          </List>
          <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 골프존 (2023.04~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              최경주 모델 기준 신규 SDK 기능 추가 구현 (옆을 바라보는 루틴 추가)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              카운터에서 AI-human 발화를 통제 가능한, Web socket POC 개발
            </ListItem>
          </List> */}
          {/* <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 인천국제공항공사 (2023.05~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              자사 Unity 3D Human 키오스크 Web 구현 (인천국제공항공사 길안내
              AI-Human)
            </ListItem>
          </List> */}
          {/* <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [예정] 신한은행 (2023.06~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [개인 목표] 기존 납품 code 경량화(리펙토링)
            </ListItem>
          </List>
          <Spacer p={4} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [예정] 우리은행 (2023.07~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [개인 목표] yarn zero install 적용
            </ListItem>
          </List> */}
          <Spacer p={4} />
        </Container>

        <Container>
          <hr />
          <Spacer p={4} />
          <Flex align="center" gap="1">
            <Icon as={FaRegBuilding} w={8} h={8} color="blue.800" />

            <Heading as="h2" noOfLines={1} size="md">
              제이소프트웨어 (2021.06~2022.03)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <Text fontSize="lg">
            4명이서 시작한 스타트업으로, SI 프로젝트를 주로 진행
          </Text>
          <Spacer p={2} />
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>period</Th>
                  <Td>2021.06 ~ 2022.03</Td>
                </Tr>
                <Tr>
                  <Th>position</Th>
                  <Td>Full Stack</Td>
                </Tr>
                <Tr>
                  <Th>projects</Th>
                  <Td> SI 프로젝트</Td>
                </Tr>
                <Tr>
                  <Th>tech</Th>
                  <Td> nodejs / Python / Django / pandas</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Spacer p={4} />
          {/* <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              세븐파트너스 입찰/낙찰 통합 구축 시스템 (2023.02~03)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              공공기간 정보 크롤링하고, DB 적재
            </ListItem>
          </List>
          <Spacer p={4} /> */}
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              대우건설 하자관리 시스템 (2022.01~03)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              기획에 따른, front(react) / backend(express) / MySQL / AWS EC2
              전체를 혼자 개발 진행
            </ListItem>
          </List>
          <Spacer p={4} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              LG 전자 경량화 프로젝트(2022.10~11)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              LG CNS 상주하여 9개 서버 redis를 클러스터링 구축
            </ListItem>
          </List>
          <Spacer p={4} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              당진화력발전소 운전데이터 분석 (2021.08)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              화력발전소에서 사용하는 16,000 개의 운전 센서 데이터 분석으로 원소
              예측 제작
            </ListItem>
          </List>

          <Spacer p={4} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              KKday의 카카오 알림톡 (2022.02)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              php Laravel을 활용한 API Gateway 제공 (카카오 비즈 메시지 API
              제공)
            </ListItem>
          </List>
          <Spacer p={5} />

          <Heading as="h1" noOfLines={1}>
            ETC.
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            {/* 강사경력 / 외주경력 / 교육 */}
            지식 공유를 통해 함께 성장하고 싶습니다. 블로그를 꾸준히 작성하고
            있으며, 휴식기에는 강사활동을 통한 지식 공유를 즐깁니다.
          </Text>
          <Spacer p={4} />
          <Flex align="center" gap="1">
            <Icon as={MdHomeWork} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Outsourcing
            </Heading>
          </Flex>
          <List spacing={1}>
            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              백화점 VIP 고객 차량인식 프로젝트 MVP제작 : PM 참여
              (2023.01~2023.03){" "}
            </ListItem> */}
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {/* 하루 방문자 수가 1000명 이상인{" "} */}[운영 종료] 공부 및
              지식 공유를 위한 <Badge colorScheme="green">블로그 운영</Badge>{" "}
              (하루 방문자 1000명 이상)
              <Link href="https://han-py.tistory.com/">
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {/* 하루 방문자 수가 1000명 이상인{" "} */}
              [2024.01 ~ ] 전문성 있는 지식 공유를 위한{" "}
              <Badge colorScheme="green">영어 블로그</Badge> 개발 중
            </ListItem>
          </List>
          <Spacer p={4} />

          <Flex align="center" gap="1">
            <Icon as={GrGamepad} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Toy Project
            </Heading>
          </Flex>
          <List spacing={1}>
            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [제작중] storybook 자사 도입을 위한, storybook 제작{" "}
              <Link href="https://deploy-preview-12--glowing-taffy-1adff9.netlify.app/?path=/story/components-button--solid">
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem> */}
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              STT Azure 적용 및 컴포넌트 책임 관계 이해를 위한, 영어 단어 발음
              연습 페이지
              <Link href="https://han-py.com/education/word-evaluation">
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              chatGPT 사용해보기 위해, 영어 인터뷰 연습 페이지
              <Link href="https://han-py.com/education/freetalk-evaluation">
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [예정] 자사 모노레포 적용을 위한, 프로젝트 분리
            </ListItem> */}
          </List>
          <Spacer p={4} />

          <Flex align="center" gap="1">
            <Icon as={BsPencil} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Teaching career
            </Heading>
          </Flex>

          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [영우글로벌러닝] K-digital 데이터분석/코딩테스트 강사 (2021.03)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [홍익대학교] K-data 빅데이터 분석 기반 비즈니스 개발자 양성 및
              취업과정 - 데이터 분석(Kaggle) 강사 (2022.06)
            </ListItem>
            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [렛유인] 로봇비전활용 엔지니어링 온라인 교육 강사 -
              자료구조/알고리즘 (영상 제작 일정 : 2023.06~2023.07)
            </ListItem> */}
          </List>
          <Spacer p={4} />

          <Flex align="center" gap="1">
            <Icon as={GiGraduateCap} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Education
            </Heading>
          </Flex>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              ssafy - 삼성 청년 SW 아카데미 (2020.01 ~ 2020.12)
            </ListItem>
          </List>
        </Container>
      </Flex>
    </Stack>
  );
}
