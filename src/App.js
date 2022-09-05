import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { DashboardOne, DashboardThree, DashboardTwo } from "./subconsoles";
import theme from "./utils/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Sidebar/>
        <Routes>
          <Route path="/recharts" element={<DashboardOne/>}/>
          <Route path="/chartJs" element={<DashboardTwo/>}/>
          <Route path="/apexCharts" element={<DashboardThree/>}/>
        </Routes>
      </Wrapper>
    </ThemeProvider>

  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`