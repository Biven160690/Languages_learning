import { useStyles } from '@theme/style';

export const ErrorCardsDeck = ({ message }: Error) => {
  const { error } = useStyles();

  return (
    <div className={error}>
      <h1> Error </h1>
      <h2> {message} </h2>
    </div>
  );
};
