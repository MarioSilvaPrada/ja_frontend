import axios from 'axios';

export const PRODUCTION = true;

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

const getSettings = async () => {
  try {
    const res = await api.get('/settings');

    if (res.status === 200) {
      return res.data[0];
    }
  } catch (e) {
    return e.response;
  }
};

const getProjects = async () => {
  try {
    const res = await api.get('/projects');

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return e.response;
  }
};

const getSingleProject = async (id) => {
  try {
    const res = await api.get(`/projects/${id}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return e.response;
  }
};

const getAbout = async () => {
  try {
    const res = await api.get('/about');

    if (res.status === 200) {
      console.log({ res: res.data });
      return res.data;
    }
  } catch (e) {
    return e.response;
  }
};

const getPartners = async () => {
  try {
    const res = await api.get('/partners');

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return e.response;
  }
};

export { getSettings, getProjects, getAbout, getPartners, getSingleProject };
