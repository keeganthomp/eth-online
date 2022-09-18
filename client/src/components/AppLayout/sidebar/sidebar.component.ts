import styled from 'styled-components';

type SidebarProps = {
  gridArea: string;
};

const Sidebar = styled.div<SidebarProps>`
  grid-area: ${(props) => props.gridArea};
  height: 100vh;
  padding: 0.75rem;
  background: ${(props) => props.theme.background};
`;

export default Sidebar;
