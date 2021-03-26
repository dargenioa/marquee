function BackgroundImage(props) {
  return (
      <div
      className="Slide-one"
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundImage: props.image
      }}
      >
      </div>
  );
}

export default BackgroundImage;
