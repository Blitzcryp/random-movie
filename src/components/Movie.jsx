import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Heart, ArrowClockwise, HeartFill } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const movies = [
    {
        title: "A",
        poster: "https://cdn.shopify.com/s/files/1/1057/4964/products/star-wars-vintage-movie-poster-original-1-sheet-27x41_763d721d-879a-4610-a9b8-2e0f8185a787.jpg?v=1625000581",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        title: "B",
        poster: "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        title: "C",
        poster: "https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747",
        description: "Lorem ipsum dolor sit amet..."
    }

    ,{
        title: "D",
        poster: "https://i.pinimg.com/originals/d1/3a/d5/d13ad50397ecbb4144d6a714846d0415.png",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        title: "E",
        poster: "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        title: "F",
        poster: "data:image/jpeg;base64,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",
        description: "Lorem ipsum dolor sit amet..."
    },
    {
        title: "G",
        poster: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/5cae019e64c0ee10ead36a00e60f0137_8b8714b2-b733-44ec-8f3f-f131a04915b5_240x360_crop_center.progressive.jpg?v=1614780406",
        description: "Lorem ipsum dolor sit amet..."
    }
]

const cardStyles = {
    width: '18rem',
    height: "20rem",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(50%)"
};

const buttonStyle = {
    width: '40%',
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "4px",
    color: "black",
    margin: "10px",
    height: "8rem"
}

let icon = {
    width: "80%",
    height: "80%"
}

export default function Movie(){
    const [ dummyData, setDummyData ] = useState(movies[0]);
    const [ heartClicked, setHeartClicked ] = useState(false);

    return (
        <Card style={cardStyles}>
            <Card.Img style={{ width: '18rem', height: '20rem'}} variant="top" src={ dummyData.poster } />
            <Card.Body>
                <Card.Title> { dummyData.title }</Card.Title>
                <Card.Text>
                    { dummyData.description }
                </Card.Text>
                <motion.button
                    style={buttonStyle}
                    whileTap={{ scale: 0.96, backgroundColor: 'black', color: 'white'}}
                    onClick={() => setHeartClicked(!heartClicked)}
                >
                    {
                        heartClicked? <HeartFill style={ icon }/> : <Heart style={ icon }/>
                    }
                </motion.button>
                <motion.button
                    style={buttonStyle}
                    variant="primary"
                    whileTap={{ scale: 0.96, backgroundColor: 'black', color: 'white'}}
                    onClick={() => {
                        setDummyData(movies[Math.floor(Math.random() * movies.length)])
                        setHeartClicked(false)
                }}>
                    <ArrowClockwise style={icon}/>
                </motion.button>
            </Card.Body>
        </Card>
    )
}