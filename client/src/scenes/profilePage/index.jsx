import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../scenes/Navbar";
import FriendListWidget from "../../scenes/Widgets/FriendListWidget";
import MyPostWidget from "../../scenes/Widgets/MyPostWidget";
import PostsWidget from "../../scenes/Widgets/PostsWidget";
import UserWidget from "../../scenes/Widgets/UserWidget";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

    const getUser = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${userId}`, 
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>ProfilePage</div>
    )
};

export default ProfilePage;