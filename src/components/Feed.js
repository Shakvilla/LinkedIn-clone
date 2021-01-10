import React, { useState, useEffect } from 'react'
import '../Styles/Feed.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import InputOption from '../components/InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../components/Post'
import { db } from '../firebase'
import firebase from 'firebase'


function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        db.collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            )
            );
    }, [])

    const sendPost = (event) => {
        event.preventDefault();
        db.collection('posts').add({
            name: 'Abdul Shakur',
            description: 'FullStack, MERN Developer at Tunga',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");

    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">

                    <AddBoxIcon />
                    <form>
                        <input type="text" placeholder="Write a post" value={input}
                            onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Submit</button>
                    </form>
                </div>
                <div className="feed__inputOption">

                    <InputOption Icon={ImageIcon} title="Photo"
                        color="#70b5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video"
                        color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event"
                        color="#C0CBCD" />

                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title="Write Article"
                        color="#7fc15e" />

                </div>
            </div>
            <hr className="app__horizontal" />
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}



        </div>
    )
}

export default Feed
