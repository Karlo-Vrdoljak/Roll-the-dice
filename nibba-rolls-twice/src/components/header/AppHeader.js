import { Box, Center } from "@chakra-ui/layout";

function AppHeader() {
	return (
		<Box background='pink.100' d='flex' justifyContent='center' alignItems='center' padding='4'>
			<Box maxW='4xl' minW={['xs', 'sm', 'md', 'lg']} boxShadow='md' p='4' rounded='md' bg='white'>
				<Center fontWeight="light" letterSpacing='3px' fontSize="2xl">Roll the dice</Center>
			</Box>
		</Box>
	);
}

export default AppHeader;
