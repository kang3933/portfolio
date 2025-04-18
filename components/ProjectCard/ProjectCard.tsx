import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  link?: string;
}

export default function ProjectCard({ title, description, imageSrc, link }: ProjectCardProps) {
  return (
    <div className="project_project_section">
      <Link href={link || "#"} className="project_design">

        <div className="flex flex-col justify-center items-center gap-y-5">

        <div className="text-2xl font-bold font-[pretendard]">{title}</div>
        <div className="project_text">{description}</div>

        </div>
        {imageSrc && <img src={imageSrc} alt={title} />}
      </Link>
    </div>
  );
}
