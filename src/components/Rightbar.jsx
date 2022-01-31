import {
    Link,
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    makeStyles,
    Typography,
    Divider,
  } from "@material-ui/core";
  import { AvatarGroup } from "@material-ui/lab";
  
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: "#555",
    },
    link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
    },
  }));
  
  const Rightbar = () => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup max={6} style={{ marginBottom: 20 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>
          Gallery
        </Typography>
        <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
          <ImageListItem>
            <img
              src="https://pizzapalaceburwell.com/wp-content/uploads/2021/11/Food.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://image.essen-und-trinken.de/11943256/t/4d/v10/w960/r1/-/beef-burger-fuer-thermomix-jpg--60340-.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2019/06/12201311/10-reasons-to-love-New-York_568x464.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.swr.de/wissen/1000-antworten/1595973766859,newyork-100~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1080x624/dam/pnr/2021/Products/911-gts/Gallery-Driving/P21_0175_a3_rgb.jpeg/jcr:content/P21_0175_a3_rgb.jpeg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://im-efahrer.chip.de/files/6010177a93872-p19-0577-a3-rgb.jpg?imPolicy=IfOrientation&width=720&height=405&color=%23000000&hash=88848e717b5169c094a813b7084fa4a47578d67d4ce542e55e0642c91dd91d6c"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
        <Link href="https://www.google.com/search?q=sport&source=hp&ei=jgP0YfaaFoKykwWYi7GYDQ&iflsig=AHkkrS4AAAAAYfQRnjRc1FAkqJI5r1X28kNwK5cW9X1J&ved=0ahUKEwj2mYza2dT1AhUC2aQKHZhFDNMQ4dUDCAk&uact=5&oq=sport&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgsILhCABBDHARDRAzIFCAAQgAQyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQowIyCwguEIAEEMcBEKMCMgUIABCABDIICAAQgAQQyQMyBQgAEIAEOgoILhDHARCjAhBDOgQIABBDOgsILhDHARDRAxCRAjoFCAAQkQI6BAguEENQAFj2EWCGGWgAcAB4AIABdYgBxwOSAQMzLjKYAQCgAQE&sclient=gws-wiz" className={classes.link} variant="body2">
          Sport
        </Link>
        <Link href="https://www.google.com/search?q=food&ei=lAP0YdWuIozykwXtyJ7wCg&ved=0ahUKEwjVyIbd2dT1AhUM-aQKHW2kB64Q4dUDCA4&uact=5&oq=food&gs_lcp=Cgdnd3Mtd2l6EAMyBAguEEMyBwgAEMkDEEMyBQgAEJIDMgQIABBDMgUIABCABDIFCAAQgAQyCwguEIAEEMcBENEDMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgwILhDIAxCwAxBDGAA6EgguEMcBENEDEMgDELADEEMYADoKCC4QxwEQ0QMQQzoFCC4QgAQ6CwguEIAEEMcBEKMCOgoILhDHARCjAhBDSgUIlU4YAUoECEEYAEoECEYYAFDqDFiQEWDZE2gBcAJ4AIABaogB6gKSAQMzLjGYAQCgAQHIAQrAAQHaAQQIABgI&sclient=gws-wiz" className={classes.link} variant="body2">
          Food
        </Link>
        <Link href="https://www.google.com/search?q=politics&ei=FAT0YYz5C4uTkwWfu7-gDg&ved=0ahUKEwiM0_SZ2tT1AhWLyaQKHZ_dD-QQ4dUDCA4&uact=5&oq=politics&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQ0QM6CgguEMcBEKMCEEM6CwguEIAEEMcBEK8BOgsILhCABBDHARCjAjoFCC4QgAQ6BAguEEM6CgguEMcBENEDEEM6BwgAEMkDEENKBAhBGABKBAhGGABQlRhYnyRgiidoAXACeACAAYUCiAGmBpIBBTYuMS4xmAEAoAEBwAEB&sclient=gws-wiz" className={classes.link} variant="body2">
          Politics
        </Link>
        <Divider flexItem style={{marginBottom:5}}/>
        <Link href="https://www.google.com/search?q=news&ei=bQT0YejcD436kgWJkqKYDA&ved=0ahUKEwiox7DE2tT1AhUNvaQKHQmJCMMQ4dUDCA4&uact=5&oq=news&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsILhCABBDHARDRAzoLCC4QgAQQxwEQowI6BQguEIAEOgQILhBDOgoILhDHARCjAhBDOgoILhDHARDRAxBDSgQIQRgASgQIRhgAUABYhwRg1gZoAHACeACAAWqIAccCkgEDMy4xmAEAoAEBwAEB&sclient=gws-wiz" className={classes.link} variant="body2">
          News
        </Link>
        <Link href="https://www.google.com/search?q=science&ei=gAT0YZ2MINGTsAes1az4Bg&ved=0ahUKEwidzMjN2tT1AhXRCewKHawqC28Q4dUDCA4&uact=5&oq=science&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyCgguEMcBENEDEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEOgUIABCRAjoLCC4QgAQQxwEQ0QM6BAguEEM6CgguEMcBEKMCEENKBAhBGABKBAhGGABQAFjKB2CLC2gAcAJ4AIABbYgB9ASSAQM1LjKYAQCgAQHAAQE&sclient=gws-wiz" className={classes.link} variant="body2">
          Science
        </Link>
        <Link href="https://www.google.com/search?q=life&ei=tAT0YYLuLoPXkgXt4r3IAg&ved=0ahUKEwiCmL3m2tT1AhWDq6QKHW1xDykQ4dUDCA4&uact=5&oq=life&gs_lcp=Cgdnd3Mtd2l6EAMyBAguEEMyBAguEEMyBAguEEMyBAgAEEMyBAgAEEMyBAguEEMyBAgAEEMyBAgAEAoyBAgAEEMyBAgAEEM6BwgAEEcQsANKBQiVThgBSgQIQRgASgQIRhgAUIMSWIMSYLQWaAFwAngAgAFhiAFhkgEBMZgBAKABAcgBCMABAQ&sclient=gws-wiz" className={classes.link} variant="body2">
          Life
        </Link>
      </Container>
    );
  };
  
  export default Rightbar;