import React, { FC, useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { getSingleProject } from 'api';
import { IProjects } from 'utils/interfaces';
import LazyImage from 'components/LazyImage';
import getTextParagraphs from 'utils/textParagraph';

import * as S from './style';

interface IProps {
  getNameTags: (id: number) => string;
}
interface ILocationState {
  state: {
    project: IProjects;
  };
}

const Projetos: FC<IProps> = ({ getNameTags }) => {
  const [singleProject, setSingProject] = useState<IProjects | null>(null);
  const location = useLocation();
  const history = useHistory();

  const { state } = location as ILocationState;
  const { id }: { id: string } = useParams();

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
      name: 'Arquitetura',
      value: singleProject?.architects,
    },
    {
      name: 'Engenharia',
      value: singleProject?.engineering,
    },
    {
      name: 'Fotografia',
      value: singleProject?.photographs,
    },
    {
      name: 'Images',
      value: singleProject?.images,
    },
    {
      name: 'Area',
      value: `${singleProject?.area} m²`,
    },
    {
      name: 'Typology',
      value: singleProject?.tipology,
    },
    {
      name: 'Year',
      value: singleProject?.year,
    },
    {
      name: 'Construction',
      value: singleProject?.construction,
    },
    {
      name: 'State',
      value: singleProject?.state,
    },
    {
      name: 'Program',
      value: singleProject?.program,
    },
    {
      name: 'Location',
      value: singleProject?.location,
    },
    {
      name: 'Client',
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
          <S.Title>{singleProject?.name}</S.Title>
          <S.MobileInfoContainer>{getInfoSection()}</S.MobileInfoContainer>
          <S.Wrapper>
            <S.Column>
              {singleProject?.section.map((section) => (
                <div key={section.id}>
                  {getTextParagraphs(section.description, S.Description)}
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
          <S.StyledLink to="/works" onClick={() => history.goBack()}>
            Back to works
          </S.StyledLink>
        </S.Container>
      </Layout>
    )
  );
};

export default Projetos;
