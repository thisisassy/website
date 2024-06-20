type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-1200 mx-auto">{children}</div>;
};

export default Container;
