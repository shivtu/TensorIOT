import Stack from '@mui/material/Stack/Stack';
import Grid from '@mui/material/Grid/Grid';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import FacebookIcon from '../../assests/FacebookIcon';
import TwitterIcon from '../../assests/TwitterIcon';
import MailIcon from '../../assests/MainIcon';
import FooterGradient from '../../components/FooterGradient';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    background: '#093545',
    color: '#FFFFFF',
  },
  headerLabel: {
    fontFamily: 'Lexend Deca',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '64px',
    lineHeight: '80px',
    letterSpacing: '0px',
    textAlign: 'center',
  },
  subHeaderLabel: {
    marginBottom: '16px',
  },
  textField: {
    height: '45px',
    width: '300px',
    left: '490px',
    top: '281px',
    borderRadius: '10px',
    backgroundColor: '#224957',
    color: 'whitesmoke',
    borderStyle: 'none',
    paddingLeft: '8px',
  },
  checkBox: {
    height: '17px',
    width: '18px',
    left: '493px',
    top: '426px',
    borderRadius: '5px',
    backgroundColor: '#224957',
  },
  btn: {
    background: '#20DF7F',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '10px',
    height: '45px',
    width: '300px',
  },
  iconSpace: {
    marginLeft: '32px',
    marginRight: '32px',
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      className={classes.root}
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <div></div>
        <p className={classes.headerLabel}>Sign in</p>
        <div className={classes.subHeaderLabel}>
          <p className={classes.subHeaderLabel}>
            Sign in to access the application
          </p>
        </div>
        <input placeholder='Login' className={classes.textField} type='text' />
        <input
          placeholder='Password'
          className={classes.textField}
          type='password'
        />
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <input type='checkbox' className={classes.checkBox} />
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '17px',
              letterSpacing: '0px',
              textAlign: 'center',
              height: '17px',
              width: '108px',
              left: '518px',
              top: '426px',
              borderRadius: 'nullpx',
            }}
          >
            Remember me
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '17px',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#20DF7F',
            }}
          >
            Forgot password?
          </Typography>
        </Grid>
        <button className={classes.btn}>Login</button>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <div className={classes.iconSpace}>
            <FacebookIcon />
          </div>
          <div className={classes.iconSpace}>
            <TwitterIcon />
          </div>
          <div className={classes.iconSpace}>
            <MailIcon />
          </div>
        </Grid>
      </Stack>
      <FooterGradient />
    </Grid>
  );
};

export default LoginPage;
