import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, } from "react-router-dom";
import {
  HeaderNavigation,
  StyledNavigationList,
  StyledNavigationItem,
  ALIGN,
} from "baseui/header-navigation";
import { Button, KIND, SIZE } from "baseui/button";
import { Show } from "baseui/icon";
import { LOGOUT_REQUEST } from "utils/storeConsts";
import LoginModal from "components/modals/LoginModal";
import { HeadingXSmall } from "baseui/typography";
import ProfileButton from "components/navbar/ProfileButton";

export const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>
        Login
      </Button>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </React.Fragment>
  );
}

const NavButton = (props) => {
  const history = useHistory();

  return (
    <Button
      {...props}
      kind={KIND.minimal}
      onClick={() => history.push(props.to)}
    >
      {props.children}
    </Button>
  );
};

const DesktopNavbar = ({ user, logout, toggleTheme }) => {

  return (
    <HeaderNavigation
      style={{
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "12%",
        paddingRight: "12%",
        height: "4rem"
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link to="/">
            <HeadingXSmall $style={{ margin: "0" }} >Spring React</HeadingXSmall>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <NavButton
            to={"/signup"}
          >
            Sign up
          </NavButton>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button
            kind={KIND.minimal}
            size={SIZE.compact}
            onClick={toggleTheme}
          >
            <Show />
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          {user ? <ProfileButton user={user} onLogout={logout} /> : <LoginButton />}
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: LOGOUT_REQUEST }),
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(DesktopNavbar);