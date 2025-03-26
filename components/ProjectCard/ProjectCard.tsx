import Link from "next/link";

interface ProjectCardProps {
  title: string;
  imageSrc?: string;
  link?: string;
}

export default function ProjectCard({ title, imageSrc, link }: ProjectCardProps) {
  return (
    <div className="project_project_section">
      <Link href={link || "#"} className="project_design">
        {imageSrc && <img src={imageSrc} alt={title} />}
        <div className="project_text">{title}</div>
      </Link>
      <div className="project_development"></div>
    </div>
  );
}
