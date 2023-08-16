import { Link } from 'react-router-dom';
import logo from '../../assets/logoCineTeam.png';
import { StyledHeader } from './styles';

export default function Header(){
    return(
        <>
        <StyledHeader>
            <Link to="/" data-testid="link-home">
                <img src={logo} alt="Logo CineTeam" />
            </Link>
        </StyledHeader>        
        </>
    )
}