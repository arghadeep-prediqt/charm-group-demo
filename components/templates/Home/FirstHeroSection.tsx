import React from "react";
import Container from "@/components/shared/Container";
import { BlurImage } from "@/components/ui/BluerImage";
import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";

function FirstHeroSection() {
  const banner = ["/images/banner1.jpg", "/images/banner1.png"];

  return (
    <section className="relative h-[93vh] w-screen">
      <BlurImage
        src={banner[0]}
        alt="hero_banner"
        width={1400}
        height={1200}
        className="w-full h-full object-cover object-center bg-fixed"
      />
      <div className="pt-16 pb-2 absolute top-0 left-0 w-screen h-full bg-gradient-to-t from-black/80 to-black/30">
        <Container className="w-full h-full flex flex-col justify-center items-start gap-12">
          <h1 className={`text-[60px] font-medium text-white leading-snug`}>
            Embark on Your <br />
            Extraordinary Journey Today.
          </h1>
          <p className="text-[21px] text-white w-7/12 leading-relaxed">
            Discover breathtaking destinations, enjoy exclusive member benefits,
            and turn your vacation dreams into reality.
          </p>
        </Container>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center items-center hover:opacity-65">
        <Link href="#hero">
          <ArrowDownCircle className="text-amber-300 size-10 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}

export default FirstHeroSection;
