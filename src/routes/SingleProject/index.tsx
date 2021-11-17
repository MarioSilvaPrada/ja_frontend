import React, { FC, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { getSingleProject } from 'api';
import { IProjects } from 'utils/interfaces';
import LazyImage from 'components/LazyImage';
import getTextParagraphs from 'utils/textParagraph';
import translation from '../../../translations/en_pt';

import * as S from './style';

interface IProps {
  getNameTags: (id: number) => string;
  isEN: boolean;
}
interface ILocationState {
  state: {
    project: IProjects;
  };
}

const Projetos: FC<IProps> = ({ getNameTags, isEN }) => {
  const [singleProject, setSingProject] = useState<IProjects | null>(null);
  const location = useLocation();
  const history = useHistory();

  const { state } = location as ILocationState;
  const { id }: { id: string } = useParams();

  const onGoBack = () => {
    if (history.action !== 'POP') {
      history.goBack();
      return;
    }
    history.push('/works');
  };

  useEffect(() => {
    const getProject = async (projectId: string) => {
      const res = await getSingleProject(projectId);
      if (res) {
        setSingProject(res);
      }
    };
    if (state?.project) {
      setSingProject(state.project);
    } else {
      getProject(id);
    }
  }, []);

  const projectInfo = [
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.ARCHITECTURE,
      value: singleProject?.architects,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.ENGINEERING,
      value: singleProject?.engineering,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.PHOTOGRAPHY,
      value: singleProject?.photographs,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.IMAGES,
      value: singleProject?.images,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.AREA,
      value: `${singleProject?.area} m²`,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.TYPOLOGY,
      value: singleProject?.tipology,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.YEAR,
      value: singleProject?.year,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.CONSTRUCTION,
      value: singleProject?.construction,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.STATE,
      value: singleProject?.state,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.PROGRAM,
      value: singleProject?.program,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.LOCATION,
      value: singleProject?.location,
    },
    {
      name: translation[isEN ? 'EN' : 'PT'].SINGLE_PROJECT.CLIENT,
      value: singleProject?.client,
    },
  ];

  const getInfoSection = () => {
    return (
      <>
        {singleProject?.tags && (
          <S.TagsWrapper>
            {singleProject?.tags.map((tagId) => (
              <S.TagContainer key={tagId}>
                <p>{getNameTags(tagId)}</p>
              </S.TagContainer>
            ))}
          </S.TagsWrapper>
        )}
        {projectInfo.map(({ name, value }) => {
          if (value) {
            return (
              <S.RowInfo key={name}>
                <S.RowTitle>{name}: </S.RowTitle>
                <p>{value}</p>
              </S.RowInfo>
            );
          }
        })}
      </>
    );
  };

  return (
    singleProject && (
      <Layout>
        <S.Container>
          <S.Title>
            {isEN ? singleProject?.name_en : singleProject?.name}
          </S.Title>
          <S.MobileInfoContainer>{getInfoSection()}</S.MobileInfoContainer>
          <S.Wrapper>
            <S.Column>
              {singleProject?.section.map((section) => (
                <div key={section.id}>
                  {getTextParagraphs(
                    isEN ? section.description_en : section.description,
                    S.Description
                  )}
                  {section.image
                    .sort((a, b) => {
                      if (a.image_name < b.image_name) {
                        return -1;
                      }
                      if (a.image_name > b.image_name) {
                        return 1;
                      }
                      return 0;
                    })
                    .map(({ image }) => (
                      <LazyImage
                        myWidth="100%"
                        key={`${section.id}${image}`}
                        alt="project image"
                        src={image}
                        actual={<S.Image src={image} />}
                      />
                    ))}
                </div>
              ))}
            </S.Column>
            <S.SideInfo>
              <S.Fixed>{getInfoSection()}</S.Fixed>
            </S.SideInfo>
          </S.Wrapper>
          <S.StyledLink to="/works" onClick={() => onGoBack()}>
            Back to works
          </S.StyledLink>
        </S.Container>
      </Layout>
    )
  );
};

export default Projetos;
