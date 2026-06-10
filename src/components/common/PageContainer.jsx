const PageContainer = ({
  children,
  backgroundImage = "",
}) => {
  return (
    <div
      className="
        min-h-screen
        w-full
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Pink Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;