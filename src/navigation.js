import React, { useState } from 'react';
// import { getProjects, getSettings, getTags } from 'api';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './routes/App';

// Pages
// import Projetos from './routes/Projetos';
// import ProductPage from './routes/SingleProject';
// import Sobre from './routes/Sobre';
// import PageNotFound from './routes/PageNotFound';
import Footer from 'components/Footer';
import Spinner from 'components/Spinner';
import NavBar from 'components/NavBar';
import styled from 'styled-components';

const Navigation = () => {
  const [settings, setSettings] = useState([]);
  const [projects, setProjects] = useState([]);
  // const [allTags, setAllTags] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [isEN, setIsEN] = useState(true);

  // const getData = async () => {
  //   const mySettings = await getSettings();

  //   if (mySettings) {
  //     setSettings(mySettings);
  //   }

  //   const myProjects = await getProjects();

  //   if (myProjects) {
  //     setProjects(myProjects);
  //   }

  //   const tags = await getTags();

  //   if (tags) {
  //     setAllTags(tags);
  //   }

  //   setIsLoading(false);
  // };

  // const getNameTags = (tagId) => {
  //   if (allTags) {
  //     for (let tag of allTags) {
  //       if (tag.id == tagId) {
  //         if (isEN) {
  //           return tag.name_en;
  //         }
  //         return tag.name;
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return true ? (
    <Router>
      <NavBar setIsEN={setIsEN} isEN={isEN} />

      <Wrapper>
        <StyledText>Site under construction</StyledText>
      </Wrapper>

      {/* <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <App
              isEN={isEN}
              sliderProjects={projects.filter((project) => project.highlighted)}
            />
          )}
        />
        <Route exact path="/works" component={() => <Projetos isEN={isEN} />} />
        <Route
          exact
          path="/works/:id"
          component={() => (
            <ProductPage getNameTags={getNameTags} isEN={isEN} />
          )}
        />
        <Route
          exact
          path="/studio"
          component={() => <Sobre settings={settings} isEN={isEN} />}
        />
        <Route path="*" component={PageNotFound} />
      </Switch> */}
      <Footer settings={settings} isEN={isEN} />
    </Router>
  ) : (
    <Spinner />
  );
};

export default Navigation;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding: 1rem;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
