
export default function Home(){
  return (
    <>
    <main>
      <section className="w-full flex flex-row justify-center items-center">
        
        <div className="w-full max-w-[1300px] pt-[10rem] flex flex-row justify-between">

          <div className="w-full flex flex-col justify-between">

            <div className='w-full  text-4xl font-bold font-[pretendard]'>
              <h1>경험의 소중함을 아는 <br/> 디자이너 강현진입니다.</h1>
            </div>

            <div className='w-full  text-2xl font-bold font-[pretendard]'>

              <p>
                anjrk
              </p>

            </div>

          </div>


          <div>
            <img className="w-[50rem] h-[50vh] object-contain" src="/mockup/me.png"/>
          </div>
        
        </div>

      </section>

    </main>
    </>
  )
}
