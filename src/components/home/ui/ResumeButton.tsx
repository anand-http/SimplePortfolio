import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href={"https://drive.google.com/file/d/1-WfoYLIExTSzqTrAioMCLqA6CDncSQVU/view"}
      target="_blank"
    >
      View Resume
    </Link>
  );
};

export default ResumeButton;
