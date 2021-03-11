import React from "react";
import { useHistory, } from "react-router-dom";
import { Avatar } from "baseui/avatar";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
import { Button, KIND, } from "baseui/button";
import { ChevronDown, } from "baseui/icon";

const ProfileButton = ({ user, onLogout = () => {}, onItemSelect = () => {} }) => {
    const history = useHistory();
  
    const ITEMS = [
      {
        label: "Profile",
        action: () => {
          history.push("/profile");
        },
      },
      {
        label: "Logout",
        action: () => {
          onLogout();
          window.location.reload();
        },
      },
    ];
  
    return (
      <StatefulPopover
        focusLock
        placement={PLACEMENT.bottomRight}
        content={({ close }) => (
          <StatefulMenu
            items={ITEMS}
            onItemSelect={({ item }) => {
              onItemSelect(item);
              item.action();
              close();
            }}
            overrides={{ List: { style: { width: '138px' } } }}
          />
        )}
      >
        <Button
          type="button"
          kind={KIND.minimal}
          endEnhancer={ChevronDown}
          $style={{
            ":hover": {
              backgroundColor: "transparent",
            },
            ":active": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Avatar name={user.username} />
        </Button>
      </StatefulPopover>
    );
  }

  export default ProfileButton;