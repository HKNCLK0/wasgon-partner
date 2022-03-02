const Container = (props) => {
  return (
    <div
      className={`${props.className} w-full flex flex-col items-center py-4`}
    >
      {props.children}
    </div>
  );
};

export default Container;
