import Link from "next/link";

const ResumeButton = ({ url, text }: { url: string; text: string }) => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href={url}
      target="_blank"
    >
      {text}
    </Link>
  );
};

export default ResumeButton;
