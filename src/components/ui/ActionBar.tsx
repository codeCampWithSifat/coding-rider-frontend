type ActionBarProps = {
  title?: string;
  children?: React.ReactNode;
};
const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
