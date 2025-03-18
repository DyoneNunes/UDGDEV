import * as S from './TattoadorStyles';
import backgroundVideo from "../../../assets/video/background.mp4";
import Header from "../../../components/Header2/Header_Lion";

function Background() {
    return (
        <S.LandingPage>
            <S.VideoBg src={backgroundVideo} autoPlay muted loop />
            
            <Header />
        </S.LandingPage>
    );
}

export default Background;
