import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
     [theme.breakpoints.down('sm')]: {
        background: 'linear-gradient(45deg, #5FD068 30%, #F5DF99 90%)',
      },
     border: 0,
     borderRadius: 3,
     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     color: 'white',
     height: 48,
     padding: '0 30px',
    },
}));

export default useStyles