import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  }));
  
  const Post = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Here could be your advertising. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" href="https://github.com/tombaier">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Post;