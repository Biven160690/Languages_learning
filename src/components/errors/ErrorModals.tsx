import { useStyles } from '@theme/style';

export const ErrorModals = () => {
  const { error } = useStyles();

  return (
    <div className={error}>
      <h2> Oops, something went wrong! Please repeat again </h2>
    </div>
  );
};
