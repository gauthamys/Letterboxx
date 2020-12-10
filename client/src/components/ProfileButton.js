import { NavItem, NavLink } from 'reactstrap';
import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

const ProfileLink = () => {
    return(
        <NavItem>
            <NavLink className="text-white" href='/profile'>Profile</NavLink>
        </NavItem>
    )
}

const ProfileButton = () => {
    const { user } = useAuth0();
    return user ? <ProfileLink /> : <a></a>;
}

export default ProfileButton;