"use client"
import React from 'react'
import { GiStarShuriken } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { checkBaseUrl } from '@/lib/server';

const page = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const navTl = gsap.timeline();
    navTl.from(".navbar >*, nav>*", {
      y: -30,
      duration: .3,
      opacity: 0,
      stagger: .15
    })
    navTl.from(".hero-anim > *,.hero-img", {
      x: -30,
      duration: .3,
      opacity: 0,
      stagger: .25
    })
    navTl.from(".big-co>*", {
      y: 30,
      duration: .3,
      opacity: 0,
      stagger: .15
    })

    const serviceTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.service-section',
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 3,
      }
    })
    let fromLeftAni = { x: -300, opacity: 0 }
    let fromRightAni = { x: 300, opacity: 0 }
    serviceTl.from("#card-1", fromLeftAni, 'first-sec')
    serviceTl.from("#card-2", fromRightAni, 'first-sec')
    serviceTl.from("#card-3", fromLeftAni, 'sec-sec')
    serviceTl.from("#card-4", fromRightAni, 'sec-sec')
  })

  const baseUrl = checkBaseUrl();
  console.log(baseUrl)

  return (
    <>
      <header className='navbar flex justify-between items-center'>
        <div className='font-bold flex items-center gap-1'><GiStarShuriken className='rotate-45' />WizardZ</div>
        <nav className='flex justify-evenly items-center text-[1.5vw]  w-2/3 '>
          {["About Us", "Services", "Use cases", "Pricing", "Blog"].map((txt, index) => {
            return <p className='nav-list' key={index}>{txt}</p>
          })}
          <button className='nav-list border-[var(--text-color)] border-2'>Request & Quote</button>
        </nav>
      </header>
      <main >
        {/* hero section */}
        <section className='flex justify-between items-center h-[65vh]'>
          <article className='hero-anim w-[45%] flex flex-col gap-2'>
            <p className='text-[4vw] font-bold'>Navigating the digital landscape for success</p>
            <p className='text-[1.5vw] font-medium'>Our digital marketing agency helps business grow and succed online through a range of service including SEO ,PPC, social media marketing and content creation.</p>
            <button className='bg-[--text-color] text-[--bg-color] btn-hover'>Book a consulation</button>
          </article>
          <img src='\hero.jpg' className='hero-img w-1/2' />
        </section>

        {/* big company section */}
        <section className='big-co'>
          <img src='\co-logo-img\amazone.jpg' />
          <img src='\co-logo-img\dribble.jpg' />
          <img src='\co-logo-img\hubsopt.jpg' />
          <img src='\co-logo-img\notion.jpg' />
          <img src='\co-logo-img\netflix.jpg' />
          <img src='\co-logo-img\Azoom.jpg.png' />
        </section>

        {/* services section  */}
        <section>
          <header className='flex justify-between w-2/3'>
            <p className='bg-[var(--highlight-color)] font-bold px-1 text-[3vw]'>Services</p><p className='text-[1.3vw] text-right text-balance'>At out digital marketing agency.we offer a range of service to help business grow and succed online .these service include:</p>
          </header>
          <article className='service-section'>

            <div id='card-1'>
              <div>
                <p className='super-text-1'><span>Search engine</span><span> optimizaton</span></p>
                <button><FaArrowUp className='arrow-1' />Learn more</button>
              </div>
              <img src='/service-img/service1.jpg' />
            </div>

            <div id='card-2' className='bg-[var(--text-color)] text-[var(--bg-color)]'>
              <div>
                <p className='super-text-2'><span>Pay per click</span><span>advertising</span></p>
                <button><FaArrowUp className='arrow-2' />Learn more</button>
              </div>
              <img src='/service-img/service2.jpg' className='h-2/3 my-auto' />
            </div>

            <div id='card-3' className='bg-[var(--text-color)] text-[var(--bg-color)]'>
              <div>
                <p className='super-text-2'><span>Social media</span><span>marketing</span></p>
                <button><FaArrowUp className='arrow-2' />Learn more</button>
              </div>
              <img src='/service-img/service3.jpg' />
            </div>

            <div id='card-4'>
              <div>
                <p className='super-text-1'><span >E-mail</span><span> Marketing</span></p>
                <button><FaArrowUp className='arrow-1' />Learn more</button>
              </div>
              <img src='/service-img/service4.jpg' />
            </div>

          </article>
        </section>

        {/* CTA section  */}
        <section className='cta-section'>
          <article className='w-1/2'>
            <p className='font-semibold'>Let's make things happen</p>
            <p className='text-[1.3vw]'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <button className='bg-[var(--text-color)] text-[var(--bg-color)] my-4 btn-hover'>Get your free proposal</button>
          </article>
          <img src='/footer.jpg' className='w-[40%]' />
        </section>

        {/* case study section  */}
        <section>
          <article className='flex w-[70%] gap-2'>
            <div className='bg-[var(--highlight-color)] font-bold px-1 text-[2vw] w-1/4'>Case study</div>
            <p className='text-[1.2vw] text-balance'>Explore real life examples of Our Proven Digital Marketing Success through Our Case Studies</p>
          </article>
          <article className='case-section text-balance'>

            <div>
              <p>For a local restaurant ,we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
              <a>Learn more<FaArrowUp className='arrow-1' /></a>
            </div>

            <div className='border-l-2 border-r-2'>
              <p>For a  B2B sofware company ,we developed an SEO strategy that  resulted in a first page ranking for key keyword and a 200% increase in organic traffic.</p>
              <a>Learn more<FaArrowUp className='arrow-1' /></a>
            </div>

            <div>
              <p>For a national retail chain ,we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales..</p>
              <a>Learn more<FaArrowUp className='arrow-1' /></a>
            </div>

          </article>
        </section>

      </main>
    </>
  )
}

export default page