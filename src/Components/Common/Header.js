import { Dropdown, Menu } from "semantic-ui-react";
import React from "react";

const Header = () => (
    <Menu>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text="Projects" pointing className="link item">
    <Dropdown.Menu>
    {/* <Dropdown.Header>Categories</Dropdown.Header> */}
    <Dropdown.Item>
    <Dropdown text="Web">
    <Dropdown.Menu>
    <Dropdown.Header>Proj1</Dropdown.Header>
    <Dropdown.Item>Proj2</Dropdown.Item>
    <Dropdown.Item>Proj3</Dropdown.Item>
    <Dropdown.Divider />
    </Dropdown.Menu>
    </Dropdown>
    </Dropdown.Item>
    <Dropdown.Item>
    <Dropdown text="Game">
    <Dropdown.Menu>
    <Dropdown.Header>Proj1</Dropdown.Header>
    <Dropdown.Item>Proj2</Dropdown.Item>
    <Dropdown.Item>Proj3</Dropdown.Item>
    <Dropdown.Divider />
    </Dropdown.Menu>
    </Dropdown>
    </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Forums</Menu.Item>
    <Menu.Item>Contact Us</Menu.Item>
</Menu>
);

export default Header;
