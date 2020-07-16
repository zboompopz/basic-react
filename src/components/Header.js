import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>


            <Navbar color="light" light expand="md">
                <NavbarBrand> <Link to="/">Wutthinun</Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/about"> เกี่ยวกับเรา </Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/contact"> ติดต่อเรา </Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/profile"> ข้อมูลส่วนตัว </Link></NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" nabar>
                        <NavItem>
                            <NavLink><Link to="/signup"> เข้าสู่ระบบ </Link></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink><Link to="/signin"> สมัครสมาชิก </Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
