import { Avatar } from '@material-ui/core';
import React from 'react'
import '../Styles/Post.css';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import { ShareOutlined } from '@material-ui/icons';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>

            </div>

            <hr className="post__divider" />

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltIcon} title={"Like"} color={"gray"} />
                <InputOption Icon={CommentIcon} title={"Comments"} color={"gray"} />
                <InputOption Icon={ShareOutlined} title={"Share"} color={"gray"} />
                <InputOption Icon={SendOutlinedIcon} title={"Send"} color={"gray"} />

            </div>

        </div>
    )
}

export default Post
