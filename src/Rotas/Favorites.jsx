import Search from "../components/Search"
import styled from "styled-components"


const FavContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
}

`

const Favorites = () => {
    return (
        <FavContainer>
            <Search />
        </FavContainer>
    )
}

export default Favorites