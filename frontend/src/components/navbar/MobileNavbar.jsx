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
import { LOGOUT_REQUEST } from "utils/storeConsts";
import { HeadingXSmall } from "baseui/typography";
import { Menu, Plus } from "baseui/icon";
import { Drawer } from 'baseui/drawer';
import ProfileButton from "components/navbar/ProfileButton";

const MobileNavButton = (props) => {
  return (
    <Button
      {...props}
      $style={{
        width: "100%"
      }}
    >
      {props.children}
    </Button>
  );
}

const MobileNavbar = ({ user, logout, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <HeaderNavigation
      style={{
        padding: "1rem",
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link to="/" style={{ textDecoration: "inherit", color: "inherit", }}>
            <HeadingXSmall $style={{ margin: "0" }} >Spring React</HeadingXSmall>
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button
            kind={KIND.minimal}
            size={SIZE.compact}
            onClick={toggleTheme}
          >
            <Plus />
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button
            kind={KIND.minimal}
            size={SIZE.mini}
            onClick={() => setOpen(true)}
          >
            <Menu size={32} />
          </Button>
          <Drawer
            isOpen={open}
            renderAll
            onClose={() => setOpen(false)}
          >
            <div
              style={{
                display: "block",
                padding: "10px"
              }}
            >
              {
                user ?
                  <ProfileButton 
                    user={user}
                    onLogout={logout}
                    onItemSelect={() => setOpen(false)}
                  />
                  :
                  <MobileNavButton
                    onClick={() => {
                      history.push("/login");
                      setOpen(false);
                    }}
                  >
                    Login
                  </MobileNavButton>
              }
            </div>
          </Drawer>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
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
)(MobileNavbar);