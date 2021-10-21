import axios from 'axios';

// export const PRODUCTION = true;

// const api = axios.create({
//   baseURL: PRODUCTION ? process.env.BASE_URL : process.env.BASE_STAGING_URL,
// });

const getSettings = async () => {
  try {
    const res = await axios.get(process.env.BASE_URL + '/settings');

    if (res.status === 200) {
      return res.data[0];
    }
  } catch (e) {
    return e.response;
  }
};

const getProjects = async () => {
  try {
    const res = await axios.get(process.env.BASE_URL + '/projects');

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return e.response;
  }
};

const getSingleProject = async (id) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/projects/${id}`);

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return e.response;
  }
};

const getAbout = async () => {
  try {
    const res = await axios.get(process.env.BASE_URL + '/about');

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
    const res = await axios.get(process.env.BASE_URL + '/partners');

    if (res.status === 200) {
      return res.data;
    }
  } catch (e) {
    return e.response;
  }
};

export { getSettings, getProjects, getAbout, getPartners, getSingleProject };
