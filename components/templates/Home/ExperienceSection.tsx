import { BlurImage } from "@/components/ui/BluerImage";
import { MoveRight } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

type Experience = {
  id: number;
  title: string;
  image: string;
};

const experiences: Experience[] = [
  {
    id: 0,
    title: "Pool Party",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/experience/12D 2.jpg",
  },
  {
    id: 1,
    title: "Pot Painting",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/experience/Dance-Workshop.jpg",
  },
  {
    id: 2,
    title: "T-Shirt Painting",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/experience/Fun-Science.jpg",
  },
  {
    id: 3,
    title: "Beach Cycling",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/experience/Puppet-Show.jpg",
  },
  {
    id: 4,
    title: "DJ Sessions",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/experience/Village-Tour.jpg",
  },
  {
    id: 5,
    title: "Hand Casting",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/experience/Karol-Ka-Tibba-Trekking.jpg",
  },
  {
    id: 6,
    title: "Karaoke Sessions",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/experience/Pine-cone-painting-1.jpg?q=75",
  },
];

const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0] // Default to first experience
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedExperience((prev) => {
        const nextIndex = (prev.id + 1) % experiences.length;
        return experiences[nextIndex];
      });
    }, 5000); // Change experience every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <React.Fragment>
      {/* Header */}
      <Container className="py-2 mt-3">
        <h1 className="text-[40px] leading-relaxed">Experiences</h1>
      </Container>

      <div className="relative mt-3 h-[85vh]">
        <BlurImage
          src={selectedExperience.image}
          alt={selectedExperience.title}
          width={1500}
          height={500}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/60 flex justify-between items-center gap-x-6">
          <div className="w-6/12">
            <h1 className="text-white text-end font-medium text-[40px]">
              I want to experience
            </h1>
          </div>
          <div className="w-6/12 ps-4 flex flex-col justify-between items-start gap-10">
            {experiences?.map((item, id) =>
              id === selectedExperience.id ? (
                <div
                  key={id}
                  className="min-w-[350px] bg-white ps-8 pe-3 py-3 flex justify-between items-center gap-x-4 rounded-full"
                >
                  <h2 className="text-gray-700 font-medium">{item.title}</h2>
                  <button className="bg-sky-400 p-2 rounded-full">
                    <MoveRight className="size-6 text-white" />
                  </button>
                </div>
              ) : (
                <button
                  key={id}
                  className="ps-8 text-h2-semi-bold text-gray-300 font-medium"
                  onClick={() => setSelectedExperience(experiences[id])}
                >
                  {item.title}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExperienceSection;
