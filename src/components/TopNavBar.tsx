import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
  background-color: #F7F9FF;
`;

export const TopNavBar = () => {

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `newPath`; 
        history.push(path);
      }
    return (<Wrapper >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
        </ul>
    </Wrapper>);
  }