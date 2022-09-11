import { HashRouter, Routes, Route } from "react-router-dom";
import { BackgroundContainer } from './components'
import { HomePage, StartedPage, PerformancePage, DetailsPage, PoliticsPage } from './pages'

function App() {
  return (
    <HashRouter basename="/">
      <BackgroundContainer>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/started' element={<StartedPage />} />
          <Route path='/performance' element={<PerformancePage />} />
          <Route path='/details' element={<DetailsPage />} />
          <Route path='/politics' element={<PoliticsPage />} />
        </Routes>
      </BackgroundContainer>
    </HashRouter>
  );
}

export default App;
