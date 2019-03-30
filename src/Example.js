import React from 'react'
import { render } from 'react-dom'
import { ScaleImg, ClientInnerWidth } from './ScaleImg'
import styled from 'styled-components'

const ExampleStyles = styled.div`
  body {
    margin: 0;
  }

  .project-card {
    width: calc(33% - 16px);
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0.625rem 0px;
  }

  .row {
    max-width: 1200px;
    margin: 4rem auto 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .row-1 {
    display: flex;
    justify-content: center;
  }

  .row-2 {
    column-count: 2;
    column-gap: 1.25rem;
  }
  .row-2 > div {
    width: 100%;
    display: inline-block;
    break-inside: avoid;
    margin-bottom: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0.625rem 0px;
  }

  .row-3 {
    & > div {
      display: inline-block;
      margin-bottom: 1rem;
      break-inside: avoid;
    }
  }

  .row-3 {
    column-count: 1;
  }

  @media (min-width: 600px) {
    .row-3 {
      column-count: 3;
      column-gap: 1.25rem;
    }
  }
  /* @media (min-width: 750px) {
    .row-3 {
      column-count: 3;
      column-gap: 1.25rem;
    }
  } */

  .project-card {
    margin: 0.5rem;
  }

  .card-meta {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0;
    margin: 0 1rem 1rem;
  }
`

const Example = () => (
  <ExampleStyles>
    <ClientInnerWidth>
      {({ width }) => (
        <section>
          <div className="section-container">
            <div className="sc-bdVaJa gWMRIx">
              <div className="projects">
                <div className="row row-1">
                  <div className="project-card">
                    <ScaleImg
                      url="/example/images/race-track.jpg"
                      clientWidth={width}
                    />
                    <div className="card-meta">
                      <div className="project-title">project 3!</div>
                      <div className="project-types">
                        Publication / Illustration
                      </div>
                    </div>
                  </div>

                  <div className="project-card">
                    <ScaleImg
                      url="/example/images/chicago-el-southside.jpg"
                      clientWidth={width}
                    />
                    <div className="card-meta">
                      <div className="project-title">Project 5’s Alive</div>
                      <div className="project-types">
                        Publication / Illustration
                      </div>
                    </div>
                  </div>
                  <div className="project-card">
                    <ScaleImg
                      url="/example/images/easter-hound.jpg"
                      clientWidth={width}
                    />
                    <div className="card-meta">
                      <div className="project-title">First Project</div>
                      <div className="project-types">
                        Publication / Illustration
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-2">
                  <ScaleImg
                    url="/example/images/bridge-to-nowhere.jpg"
                    clientWidth={width}
                    fixHeight={320}
                  />
                  <ScaleImg
                    url="/example/images/espresso-coffee-machine.jpg"
                    clientWidth={width}
                    fixHeight={288}
                  />
                  <ScaleImg
                    url="/example/images/decrepit-room-peeling-paint.jpg"
                    clientWidth={width}
                    fixHeight={630}
                  />
                </div>
                <div className="row row-3">
                  <ScaleImg
                    url="/example/images/cauliflour.jpg"
                    clientWidth={width}
                    aspect={0.75}
                  />
                  <ScaleImg
                    url="/example/images/citrus-stoplight.jpg"
                    clientWidth={width}
                    aspect={0.5}
                  />
                  <ScaleImg
                    url="/example/images/flower-lookin-things.jpg"
                    clientWidth={width}
                    aspect={0.5}
                    bgPosition="top"
                  />
                  <ScaleImg
                    url="/example/images/these-are-my-colors.jpg"
                    clientWidth={width}
                    aspect={1.375}
                    bgPosition="right"
                  />
                  <ScaleImg
                    url="/example/images/typewriter.jpeg"
                    clientWidth={width}
                    aspect={0.4}
                    bgPosition={'left'}
                  />
                  <ScaleImg
                    url="/example/images/warhol-in-rouge.jpg"
                    clientWidth={width}
                    aspect={0.75}
                    bgPosition="bottom"
                  />

                  {/* <ScaleImg
                    url="/example/images/cauliflour.jpg"
                    clientWidth={width}
                    aspect={0.5}
                  />
                  <ScaleImg
                    url="/example/images/citrus-stoplight.jpg"
                    clientWidth={width}
                    aspect={1.5}
                  />
                  <ScaleImg
                    url="/example/images/flower-lookin-things.jpg"
                    clientWidth={width}
                    aspect={1}
                    bgPosition="top"
                  />
                  <ScaleImg
                    url="/example/images/these-are-my-colors.jpg"
                    clientWidth={width}
                    aspect={2}
                    bgPosition="right"
                  />
                  <ScaleImg
                    url="/example/images/typewriter.jpeg"
                    clientWidth={width}
                    aspect={0.8}
                    bgPosition={'top'}
                  />
                  <ScaleImg
                    url="/example/images/warhol-in-rouge.jpg"
                    clientWidth={width}
                    aspect={1}
                    bgPosition="center"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </ClientInnerWidth>
  </ExampleStyles>
)

render(<Example />, document.getElementById('root'))

export default Example
