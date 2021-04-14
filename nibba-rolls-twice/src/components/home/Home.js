import { Box, Button, Center, Flex, List, ListIcon, ListItem, SimpleGrid } from "@chakra-ui/react";
import AppHeader from "../header/AppHeader";
import { CheckIcon, SpinnerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import React from "react";

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Home() {
	const rules = ["The first dice is the value of the roll", "The second dice is the sign of the value, odd is negative and even is positive", "The third dice is the multiplier of the value"];
	const [first, setFirst] = React.useState({ value: 1, src: "/dice/1.png" });
	const [second, setSecond] = React.useState({ value: 1, src: "/dice/1.png" });
	const [third, setThird] = React.useState({ value: 1, src: "/dice/1.png" });
	const [result, setResult] = React.useState({ value: 1 });
	const calculate = (a, b, c) => a * (b % 2 == 0 ? 1 : -1) * c;
	const roll = () => {
		const [a, b, c] = [getRandomInt(1, 6), getRandomInt(1, 6), getRandomInt(1, 6)];
		setFirst({ value: a, src: `/dice/${a}.png` });
		setSecond({ value: b, src: `/dice/${b}.png` });
		setThird({ value: c, src: `/dice/${c}.png` });
		setResult({ value: calculate(a, b, c) });
	};
	const ExplainResult = () => {
		const fwdOrBckwd = () => (second.value % 2 == 0 ? "forward" : "backward");
		const oneOrMultiple = () => (Math.abs(result.value) > 1 ? "tiles" : "tile");
		const makeBold = item => <span style={{ fontWeight: "bold" }}>{item}</span>;
		return (
			<Center border='2px' background='pink.200' color='pink.800' borderColor='pink.500' p='2' borderRadius='xl'>
				<Box>
					Move {makeBold(Math.abs(result.value))} {oneOrMultiple()} {makeBold(fwdOrBckwd())}
				</Box>
			</Center>
		);
	};
	const ListItems = () =>
		rules.map((r, i) => {
			return (
				<ListItem key={i}>
					<ListIcon as={CheckIcon} color='pink.500' />
					{r}
				</ListItem>
			);
		});

	React.useEffect(roll, []);

	return (
		<>
			<AppHeader></AppHeader>
			<Center background='pink.100' w='100%'>
				<SimpleGrid padding='4' columns={[1]} spacing='1rem'>
					<Box maxW='lg' minW={["xs", "sm", "100%", "xl"]} boxShadow='md' p='4' rounded='md' bg='white'>
						<Center>
							<Box letterSpacing='2px' fontWeight='bold' color='pink.400' fontSize={["xl", "2xl", "3xl"]} pb='4'>
								The rules are
							</Box>
						</Center>
						<List spacing={3}>
							<Center>
								<Box fontSize={["md", "xl"]}>
									<ListItems></ListItems>
								</Box>
							</Center>
						</List>
						<Center>
							<Button size='lg' onClick={roll} leftIcon={<SpinnerIcon />} colorScheme='pink' variant='solid'>
								ROLL
							</Button>
						</Center>
					</Box>
					<Box maxW='lg' boxShadow='md' p='4' rounded='md' bg='white' minW={["xs", "sm", "100%", "xl"]}>
						<Center h='full'>
							<Flex alignItems='center'>
								<Image boxSize={["4rem", "4rem", "6rem", "8rem"]} fallbackSrc='/dice/1.png' src={first.src} alt='' />
								<Image boxSize={["4rem", "4rem", "6rem", "8rem"]} fallbackSrc='/dice/1.png' src={second.src} alt='' />
								<Image boxSize={["4rem", "4rem", "6rem", "8rem"]} fallbackSrc='/dice/1.png' src={third.src} alt='' />
							</Flex>
						</Center>
					</Box>
					<Box fontSize={["lg", "2xl", "3xl"]} maxW='lg' boxShadow='md' p='4' rounded='md' bg='white' minW={["xs", "sm", "100%", "xl"]}>
						<ExplainResult></ExplainResult>
					</Box>
				</SimpleGrid>
			</Center>
		</>
	);
}

export default Home;
