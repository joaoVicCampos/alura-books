import LastDrops from '../components/LastDrops';
import Search from '../components/Search';
import styled from 'styled-components';


const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
}

`

function Home() {
  return (
    <HomeContainer>
      <Search />
      <LastDrops />
    </HomeContainer>
  );
}

export default Home; 
