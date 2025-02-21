import { travelDiaries } from "@/components/lib/rawData";
import Container from "@/components/shared/Container";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function BlogStoryPage() {
  const router = useRouter();
  const params = router.query;
  const { heading, subHeading, description, image, id } =
    travelDiaries[Number(params?.index) || 0];

  return (
    <NavContainer>
      <Container className="py-5">
        <div className="px-20">
          <BlurImage
            src={image}
            alt={heading}
            width={1200}
            height={400}
            className="mb-12 w-full h-[80vh] object-cover rounded-2xl"
          />

          <h1 className="leading-relaxed">{heading}</h1>
          <div className="text-gray-700 leading-relaxed">
            <span className="text-p1-b">{subHeading?.split("on")[0]}</span> |{" "}
            <span>{subHeading?.split("on")[1]}</span>
          </div>

          <div className="my-12 prose-2xl text-gray-700 prose-p:text-[20px] prose-li:text-p1-r prose-p:leading-relaxed prose-ul:list-disc w-full">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>

          <div className="mb-12 flex justify-center items-center">
            <button
              onClick={() => router.push(`/our_resorts/${id}`)}
              className="w-5/12 bg-sky-500 text-p1-b text-white py-2.5 rounded-full"
            >
              Explore Resort
            </button>
          </div>
        </div>
      </Container>
    </NavContainer>
  );
}

export default BlogStoryPage;
