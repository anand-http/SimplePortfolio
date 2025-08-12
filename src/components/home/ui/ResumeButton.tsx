import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href={"https://drive.google.com/file/d/1w8gpzpGrfp1ws-jV1wJWBvgv1jz7rBwJ/view?usp=sharing"}
      target="_blank"
    >
      View Resume
    </Link>
  );
};

export default ResumeButton;
