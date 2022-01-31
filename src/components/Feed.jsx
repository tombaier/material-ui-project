import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Boehringer Ingelheim Posts Positive Business Development in 2020 despite COVID 19 Impact " img="https://upload.wikimedia.org/wikipedia/commons/3/3b/Ingelheim_site%2C_of_Boehringer_Ingelheim.jpg"/>
      <Post title="SpaceX Projects a Record 52 Flight Completion in 2022" img="https://t3n.de/news/wp-content/uploads/2020/11/nasa-spacex-crew1.jpg"/>
      <Post title="OpenAI is Making Coding as Easy as Talking to a Smart Speaker" img="https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg"/>
      <Post title="Increase Money with Crypto.com" img="https://images.mktw.net/im-429485?width=700&height=487"/>
      <Post title="Virtual Friends can Help with Anxiety Disorders" img="https://www.bbva.com/wp-content/uploads/en/2017/08/robot-enemy-friend-production-technology-bbva-e1502971353294-1024x494.jpg"/>
      <Post title="Meta is Building the World’s Fastest AI Supercomputer" img="https://www.ge.com/research/sites/default/files/styles/hero_banner/public/images/capabilities/2018-12/AI_0.jpg?itok=RZWm_hPh"/>
    </Container>
  );
};

export default Feed;