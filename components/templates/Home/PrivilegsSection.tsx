import {
  PrivilegsCard,
  PrivilegsCardCarousel,
} from "@/components/layouts/Privilegs/PrivilegsCard";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

const tabCategories = [
  {
    title: "weekend escapes",
    path: "weekend%20escapes",
    heading: "Unwind with Relaxing",
    photo:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "holidays plans",
    path: "holidays%20plans",
    heading: "Indulge in Tailored",
    photo:
      "https://images.unsplash.com/photo-1522034477175-d97f456a4873?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "festive gateways",
    path: "festive%20gateways",
    heading: "Celebrate the Festive Season with a",
    photo:
      "https://images.unsplash.com/photo-1526139334526-f591a54b477c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "global hotel network",
    path: "global%20hotel%20network",
    heading: "Experience the Comfort of",
    photo:
      "https://images.unsplash.com/photo-1630809718582-2bc0a1b7b296?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "domestic hotel stays",
    path: "domestic%20hotel%20stays",
    heading: "Relax with Comfort at",
    photo:
      "https://images.unsplash.com/photo-1601972888880-3ad2df3ee0a0?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function PrivilegsSection() {
  const cards = tabCategories.map((category, index) => {
    const item = {
      src: category?.photo || "",
      title: category?.title || "",
      path: category?.path || "",
      category: `${category?.heading || ""} ${category?.title || ""}`,
    };
    return <PrivilegsCard key={index} card={item} />;
  });

  return (
    <section id="privilegs" className="bg-orange-100 mt-[5%] mb-[2%] pb-[3%]">
      <Container className="py-2">
        <div className="mt-[3%]">
          <h1 className="text-[46px] leading-relaxed">Privileges</h1>
          <p className="text-p1-m text-gray-500 leading-relaxed">
            Enjoy exclusive membership benefits curated just for you
          </p>
        </div>

        <PrivilegsCardCarousel items={cards} />
      </Container>
    </section>
  );
}

export default PrivilegsSection;
