import React from 'react';

import { Box, Title, Text, Button, Spacer } from '../../components'

const Home = () => {
  return (
    <Box hasPadding align="center" background="dark">
      
      <Box justify="center" align="center" fluid>
        <Title color="light" variant="big" bold>LOOKAPP</Title>
        <Spacer />
        <Text align="center" spacing="0px 40px">Stay on top fo the fashion world and buy your favorite looks.</Text>
      </Box>

      <Box fluid justify="flex-end" align="center">
        <Button block>
          <Text color="light">SigIn my account</Text>
        </Button>
        <Spacer size="20px" />
        <Text underline color="light" onPress={() => alert('teste')}>Create new account</Text>
        <Spacer size="70px" />
      </Box>

    </Box>
  );
};

export default Home;