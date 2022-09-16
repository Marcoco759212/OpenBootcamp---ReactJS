import React, {useState, useEffect} from 'react';
import { getRandomJokes } from '../../Services/axiosServices';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import '../../styles/RandomJockers.scss'

const ChucknorrisJokes = () => {

    const defaultStatistics = {
        status: null,
        like: 0,
        dislike: 0
    }

    const [Joke, setJoke] = useState(null);
    const [statistics, setStatistics] = useState(defaultStatistics);
    const [likes, setLikes] = useState(null);

    useEffect(() => {
        console.log(statistics);
    },);

    const obtainJoke = () => {
        getRandomJokes()
            .then((response) => {
                if(response.status === 200){
                    setJoke(response.data)
                    setLikes(null)
                    setLikesStatistics(null)
                }
                console.log(response.data);
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const changeLikes = (val) => {
        if(Joke){
            if(val){
                setLikes(true)
                setLikesStatistics(true)
            }else{
                setLikes(false)
                setLikesStatistics(false)
            }
        }
        console.log(`click on like: ${val}`);
    }

    const setLikesStatistics = (val) => {
        if(statistics.status === null){
            if(val){
                setStatistics({
                    status: 'changedTrue',
                    like: statistics.like + 1,
                    dislike: statistics.dislike
                })
            }else{
                setStatistics({
                    status: 'changedFalse',
                    like: statistics.like,
                    dislike: statistics.dislike + 1
                })
            }
        }else{
            if(val === true && statistics.status === 'changedFalse'){
                setStatistics({
                    status: 'changedTrue',
                    like: statistics.like + 1,
                    dislike: statistics.dislike - 1
                })
            }
            if(val === false && statistics.status === 'changedTrue'){
                setStatistics({
                    status: 'changedFalse',
                    like: statistics.like - 1,
                    dislike: statistics.dislike + 1
                })
            }
        }
        if(val === null){
            setStatistics({
                status: null,
                like: statistics.like,
                dislike: statistics.dislike
            })
        }
    }

    return (
        <div>
           <Card sx={{ maxWidth: 600, maxHeight: 900 }}
                className='card-container'
                style={{background: 'rgba(10,25,41,.7)'}}>
                <CardMedia
                    component="img"
                    image="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png"
                    alt="CHUCKNORRIS animation"
                />

                <CardContent>
                    <Container fixed>
                    <Typography variant="body" 
                        className='typography-text'>
                        {
                            Joke ? 
                                Joke.value
                            :
                                'Welcome to jokes related to Chucknorris'
                        }
                    </Typography>
                    </Container>
                </CardContent>


                <CardActions className='card-actions-btn'>
                    <Button onClick={ () => changeLikes(true)}>
                        {
                            likes === true ?
                                <ThumbUpAltIcon/>
                            : 
                                <ThumbUpOffAltIcon/>
                        }
                    </Button>
                    <Button variant="contained"
                        size="small"
                        onClick={obtainJoke}>
                        Next
                    </Button>
                    <Button onClick={ () => changeLikes(false)}>
                        {
                            likes === false ?
                                <ThumbDownAltIcon/>
                            : 
                                <ThumbDownOffAltIcon/>
                        }
                    </Button>
                </CardActions>
            </Card>
            <Card
                className='card-actions-lbl'
                style={{background: 'rgba(10,25,41,.7)'}}>
                <div className='span-lbl'>
                    <span className='span-lbl-bold'>
                        Total likes
                    </span>
                    <span>{statistics.like}</span>
                </div>
                <div className='span-lbl'>
                    <span className='span-lbl-bold'>
                        Total dislikes
                    </span>
                    <span>{statistics.dislike}</span>
                </div>
            </Card>
        </div>
    );
}

export default ChucknorrisJokes;
