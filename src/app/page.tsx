import Hero from "@/components/landing-page/main-page/hero"
import Features from "@/components/landing-page/main-page/features"
import UseCases from "@/components/landing-page/main-page/usecases"
import Collab from "@/components/landing-page/main-page/collab"
import Testimonials from "@/components/landing-page/main-page/testimonials"
import Footer from "@/components/common/footer"

export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <UseCases />
    {/*
    <Collab />
    <Testimonials />
    */}
    <Footer hasCTA={true}/>
    </>
  )
}
