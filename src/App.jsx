import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Users from "./assets/Pages/Users";
import UserDetails from "./assets/Pages/UserDetails";
import styled from "styled-components";
import PrivatePage from "./assets/Pages/PrivatePage";
import StyledLink from "./assets/components/StyledLink";
import "./App.css";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  align-items: center;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <nav>
            <StyledLink to="/">Home</StyledLink>
          </nav>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route
            path="/private"
            element={
              <PrivatePage>
                <h1>This is a private page</h1>
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
