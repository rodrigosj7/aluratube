import styled from 'styled-components';
import { useState } from 'react';


const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  width: 57px;
  height: 35px;
  padding: 2px;
  background-color: #232323;
  border-radius: 35px;
  transition: all .5s ease;
  justify-content: ${
    ({ theme }) => theme === 'dark' ? 'flex-start' : 'flex-end'
  };

  .switch-button {
    display: flex;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
  }
`

export default function SwitchTheme() {
  const [theme, setTheme] = useState('light');

  return (
    <StyledSwitch theme={theme}>
      <div
        className="switch-button"
        onClick={() => setTheme(state => state === 'light' ? 'dark' : 'light')}
      ></div>
    </StyledSwitch>
  );
}
