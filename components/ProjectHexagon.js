function ProjectHexagon(props) {
  const { fill = "#87BBA2" } = props;
  return (
    <svg
      width="127"
      height="113"
      viewBox="0 0 127 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      <path
        d="M101.117 7.15231C98.5442 2.69568 93.7675 -0.0260373 88.6212 0.0325855L39.5904 0.591109C34.6153 0.647782 30.0292 3.29608 27.4926 7.57726L2.4936 49.7687C-0.130286 54.1971 -0.162093 59.6957 2.41041 64.1523L26.1239 105.234C28.6964 109.69 33.473 112.412 38.6192 112.354L87.6505 111.796C92.6259 111.739 97.2121 109.091 99.7488 104.81L124.747 62.6172C127.371 58.1889 127.403 52.6904 124.83 48.2339L101.117 7.15231Z"
        fill={fill}
      />
    </svg>
  );
}

export default ProjectHexagon;
