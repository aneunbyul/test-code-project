import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
  header: {
    backgroundColor: '#EEE',
  },
  pricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: '16px',
  },
  descriptions: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  label: {
    color: 'var(--light01)',
    '&.Mui-focused': {
      color: 'var(--light01)',
    },
  },
});
