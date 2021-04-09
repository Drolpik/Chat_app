import classes from './Backdrop.module.scss';

const Backdrop = (props) => {
  const { show, clicked } = props;

  return (
    show ? <div className={classes.Backdrop} onClick={clicked} role="button" /> : null
  );
};

export default Backdrop;
