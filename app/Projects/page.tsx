import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Home(){
  return (
    <>
    <main>
      <div className='project_hero'>
        <h1>Projects</h1>
        <h1></h1>
      </div>
      <div className='flex flex-row gap-8 pb-[10vh]'>

        <div className='project_project_section'>

            <ProjectCard
              title='Peninsula Group Limited'
              imageSrc='./mockup/peninsula/1.png'
              link='/Projects/Peninsula'
            />

        </div>
        <div className='project_project_section'>

          <ProjectCard
            title='Beinc'
            imageSrc='./mockup/peninsula/1.png'
            link='/Projects/Peninsula'
          />

        </div>
      </div>

    </main>
    </>
  )
}
