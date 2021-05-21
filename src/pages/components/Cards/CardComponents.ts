import styled from 'styled-components';

export const StyledCardsContainer = styled.div`
  background-color: #3d424d;
  font-size: calc(8px + 2vmin);
  display: flex;
  flex-direction: column;
`
export const StartTime = styled.p`
    margin: 0;
`;

export const GameDetails = styled.div`
    text-align: center;
`;

export const StyledCard = styled.div`
  background-color: #2d3038;
  padding: 10px 0;
  width: 100%;
  line-height: calc(20px + 2vmin);
  font-size: calc(8px + 2vmin);
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #0e1529;
  margin: 5px 0;
`;

export const StyledRow = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HomeTeam = styled.div`
  text-align: right;
  width: 47%;
  text-shadow: 2px 2px #0e1529;
`;

export const AwayTeam = styled.div`
text-align: left;
width: 47%;
text-shadow: 2px 2px #0e1529;
`;

export const Separator = styled.div`
  width: 4%;
  text-align: center;
  font-weight: 800;
  font-size: calc(3px + 2vmin);
`;