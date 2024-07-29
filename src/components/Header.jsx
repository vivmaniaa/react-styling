import logo from '../assets/logo.png';
import { styled } from 'styled-components';
// import { paragraph } from './Header.module.css';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center mt-2em mb-2em ">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-2em w-11em h-11em"
      />
      <h1 className="text-2xl font-semibold tracking-0.4em text-center uppercase text-amber-700 font-pacifico m-0">
        ReactArt
      </h1>
      <p className="text-center ">A community of artists and art-lovers.</p>
    </header>
  );
}
