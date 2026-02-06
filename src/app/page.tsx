import Hero from "@/components/landing-page/main-page/hero"
import Features from "@/components/landing-page/main-page/features"
import UseCases from "@/components/landing-page/main-page/usecases"
import Collab from "@/components/landing-page/main-page/collab"
import Testimonials from "@/components/landing-page/main-page/testimonials"
import Marketplace from "@/components/landing-page/main-page/marketplace"
import Footer from "@/components/common/footer"

export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <UseCases />
    <Marketplace />
    {/*
    <Collab />
    <Testimonials />
    */}
    <Footer hasCTA={true}/>
    </>
  )
}
