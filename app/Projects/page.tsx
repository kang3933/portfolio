import Header from "@/components/header";
import Image from "next/image";

export default function Home(){
  return (
    <>
    <Header />
    <main>
      <div className='project_hero'>
        <h1>Projects</h1>
        <h1></h1>
      </div>
      <div className='flex flex-col gap-8 pb-[10vh]'>
        <div className='project_project_section'>
            <div className='project_design'>

            </div>
            <div className='project_development'>
            
            </div>
        </div>
        <div className='project_project_section'>
            <div className='project_design'>

            </div>
            <div className='project_development'>
            
            </div>
        </div>
        <div className='project_project_section'>
            <div className='project_design'>

            </div>
            <div className='project_development'>
            
            </div>
        </div>
      </div>

    </main>
    </>
  )
}
