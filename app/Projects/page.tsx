import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Home(){
  return (
    <>
    <main>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1300px]">

          <div className='project_hero flex items-center justify-center'>
            <h1>Projects</h1>
            <h1></h1>
          </div>

          <div className='flex flex-col gap-[3rem] pb-[10vh]'>

            <div className='project_project_section'>

                <ProjectCard
                  title='Peninsula Group Limited'
                  description='리브랜딩, 새로운 웹사이트'
                  imageSrc='./mockup/peninsula/3.png'
                  link='/Projects/Peninsula'
                />

            </div>
            <div className='project_project_section'>

              <ProjectCard
                title='Beinc'
                description='이제는 새로운 웹사이트가 필요할 때'
                imageSrc='./mockup/beinc/Mockup.png'
                link='/Projects/Beinc'
              />

            </div>
          </div>

        </div>


      </section>

    </main>
    </>
  )
}
