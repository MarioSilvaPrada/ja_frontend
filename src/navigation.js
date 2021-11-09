import React, { useState, useEffect } from 'react';
import { getProjects, getSettings, getTags } from 'api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './routes/App';
// Pages
import Projetos from './routes/Projetos';
import ProductPage from './routes/SingleProject';
import Sobre from './routes/Sobre';
import PageNotFound from './routes/PageNotFound';
import Footer from 'components/Footer';

const Navigation = () => {
  const [settings, setSettings] = useState([]);
  const [projects, setProjects] = useState([]);
  const [allTags, setAllTags] = useState([]);

  const getData = async () => {
    const mySettings = await getSettings();

    if (mySettings) {
      setSettings(mySettings);
    }

    const myProjects = await getProjects();

    if (myProjects) {
      setProjects(myProjects);
    }

    const tags = await getTags();

    if (tags) {
      setAllTags(tags);
    }
  };

  const getNameTags = (tagId) => {
    if (allTags) {
      for (let tag of allTags) {
        if (tag.id == tagId) {
          return tag.name;
        }
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <App
              sliderProjects={projects.filter((project) => project.highlighted)}
            />
          )}
        />
        <Route
          exact
          path="/work"
          component={() => <Projetos projects={projects} />}
        />
        <Route
          exact
          path="/work/:id"
          component={() => <ProductPage getNameTags={getNameTags} />}
        />
        <Route
          exact
          path="/studio"
          component={() => <Sobre settings={settings} />}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer settings={settings} />
    </Router>
  );
};

export default Navigation;
