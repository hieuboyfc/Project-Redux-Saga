const styles = theme => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 800,
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  header: {
    fontFamily: theme.typography.fontFamily,
    color: theme.color.textColor,
    padding: theme.spacing(2),
    borderBottom: '1px solid #e8e8e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: 430,
    // textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  icon: {
    cursor: 'pointer',
  },
  content: {
    padding: theme.spacing(1, 2, 3, 2),
  },
});

export default styles;
