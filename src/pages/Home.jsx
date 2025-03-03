import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { HomeSection } from '../data/HomeSection'
import { CoursesSection } from '../data/CourseSection'
import { Ptsections,Partnerlist } from '../data/Ptsections'

import Parners from '../components/Partners'
import parse from 'html-react-parser'
import '../styles/Home.css'
import Partners from '../components/Partners'
function Home() {
  return (
    <>
    {/* Home */}
    <Navbar />
    <div className='wrapper'> 
        <section id="home">
            <img src={HomeSection.image}/>
            <div className="kolom">
                {parse(HomeSection.content)}
            </div>
        </section>
        </div>
    {/* course */}
    <section id="courses">
            <div className="kolom">
               {parse(CoursesSection.content)}
            </div>
            <img src= {CoursesSection.Image}/>
        </section>
    {/* partner */}
    <section id="Partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(Ptsections.content)}
                </div>
                <Partners Partnerlist={Partnerlist}/>
            </div>
        </section>

    <div />
        <Footer />
    </>
  ) 
}

export default Home
