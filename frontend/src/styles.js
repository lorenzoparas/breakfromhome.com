import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        margin: '10px 0',
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        float: 'right',
        marginLeft: '15px',
      },
}));