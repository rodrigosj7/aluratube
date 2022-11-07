import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

import styled from 'styled-components';
import config from '../config.json';

const StyledHeader = styled.header`
  img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    margin-top: 50px
  }
`
const Header = () => {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="profile-pic"/>
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

const Timeline = ({ playlists }) => {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName]

        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => 
                <a href={video.url}>
                  <img src={video.thumb} alt={`${video.title} thumbnail`} />
                  <span>
                    {video.title}
                  </span>
                </a>
              )}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

const HomePage = () => {
  return (
    <>
      <CSSReset />
      <main style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}/>
      </main>
    </>
  )
}

export default HomePage
