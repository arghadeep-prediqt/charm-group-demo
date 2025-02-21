import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function ExploreMembership() {
  return (
    <NavContainer>
      <TopBanner
        title="Exclusive Membership Plans"
        photo="https://charm.vn/wp-content/uploads/2021/09/Charm-Diamond-39.jpg"
        subTitle="Discover exclusive timeshare benefits in Vietnam with luxury stays, flexible options, and premium privileges from Charm Group."
      />
      <Container className="px-4">
        <h2 className="mt-10 leading-relaxed">
          Discover Charm Group’s Timeshare Plans
        </h2>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          With access to four iconic destinations in Vietnam, Charm Group offers
          you the opportunity to own your dream vacation for up to 20 years.
          Whether you choose the serene beaches of Phú Quốc or the cultural
          elegance of Đà Lạt, your membership guarantees an unparalleled holiday
          experience tailored to your preferences. Enjoy luxurious stays,
          exclusive amenities, and a host of additional benefits that make every
          vacation memorable.
        </p>
        <h2 className="mt-10 leading-relaxed">
          All You Need to Know About Our Memberships
        </h2>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          Charm Group memberships are designed to cater to every lifestyle,
          offering flexibility, exclusivity, and value. From beachfront escapes
          to highland retreats, members can enjoy a diverse range of
          experiences. Choose from several membership tiers and durations, each
          designed to maximize your enjoyment and provide exceptional value.
        </p>
        <BlurImage
          src={
            "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="image1"
          width={1980}
          height={400}
          className="mt-10 w-full h-[400px] object-cover rounded-md"
        />
        <h2 className="mt-10 leading-relaxed">
          Long-Term Luxury with Our 20-Year Plan
        </h2>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          Our flagship 20-year membership is crafted for those who wish to
          secure luxurious vacations for decades. With this membership, you can
          enjoy weeklong stays in our signature resorts: Charm Resort Hồ Tràm,
          Charm Resort Long Hải, Charm Resort Phú Quốc, and Charm Resort Đà Lạt.
          Each property features unique amenities, including wellness centers,
          gourmet dining, and entertainment hubs. Membership highlights include:
        </p>
        <ul className="md:ps-8 ps-3 list-disc mt-5">
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            Access to premium 1BR, 2BR, 3BR, and villa options.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            Flexible packages with Silver, Gold, and Diamond tiers.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            Exclusive discounts, maintenance fee waivers, and complimentary
            services.
          </li>
        </ul>

        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          Secure your membership today and step into a world of luxury and
          relaxation.
        </p>

        <div className="mt-8 w-full flex justify-center items-center">
          <Link
            href={"/membership"}
            className="text-p1-b bg-amber-500 px-4 py-2 rounded-md capitalize"
          >
            become a member
          </Link>
        </div>

        <BlurImage
          src={
            "https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="image1"
          width={1980}
          height={400}
          className="mt-10 w-full h-[400px] object-cover rounded-md"
        />

        <h2 className="mt-10 leading-relaxed">Charm Group Membership Tiers</h2>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          Charm Group’s timeshare offerings are designed around three flexible
          and tailored tiers to meet the needs of every type of traveler.
          Whether you seek occasional family getaways or premium, all-inclusive
          experiences, our Silver, Gold, and Diamond memberships provide a
          comprehensive selection of options to elevate your holidays.
        </p>

        <h2 className="mt-10 leading-relaxed">Silver Membership</h2>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          The Silver Membership is perfect for individuals and families looking
          for a balance of affordability and luxury. Enjoy access to the
          following:
        </p>
        <ul className="md:ps-8 ps-3 list-disc mt-5">
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Accommodations: </span>
            1-bedroom apartments and select 2-bedroom suites.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Benefits: </span>
            Complimentary 2-year RCI membership, basic dining & resort
            discounts, and a 3-year maintenance fee waiver.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Access to Weeks: </span>
            Ideal for off-peak stays, offering flexibility at an affordable
            value.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Duration: </span>
            Available for up to 20 years with flexible payment options.
          </li>
        </ul>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          This tier provides an excellent opportunity for those new to timeshare
          vacations to experience the beauty and luxury of Charm Group resorts.
        </p>

        <div className="mt-8 w-full flex justify-center items-center">
          <Link
            href={"/membership"}
            className="text-p1-b bg-amber-500 px-4 py-2 rounded-md capitalize"
          >
            become a member
          </Link>
        </div>

        <h2 className="mt-10 leading-relaxed">Gold Membership</h2>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          For those seeking greater flexibility and additional benefits, the
          Gold Membership offers:
        </p>
        <ul className="md:ps-8 ps-3 list-disc mt-5">
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Accommodations: </span>
            Access to premium 2-bedroom suites and select 3-bedroom presidential
            suites.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Benefits: </span>
            Complimentary extended RCI membership, entertainment benefits, and a
            5-year maintenance fee waiver.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Access to Weeks: </span>
            Mid-demand week allocation, balancing availability and exclusivity.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Duration: </span>
            Available for up to 20 years with flexible payment options.
          </li>
        </ul>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          The Gold tier is ideal for families and couples looking to elevate
          their vacations with premium benefits and enhanced resort access.
        </p>

        <div className="mt-8 w-full flex justify-center items-center">
          <Link
            href={"/membership"}
            className="text-p1-b bg-amber-500 px-4 py-2 rounded-md capitalize"
          >
            become a member
          </Link>
        </div>

        <h2 className="mt-10 leading-relaxed">Diamond Membership</h2>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          The Diamond Membership is our premier tier, tailored for travelers who
          desire nothing but the best. This membership includes:
        </p>
        <ul className="md:ps-8 ps-3 list-disc mt-5">
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Accommodations: </span>
            Full access to villas, 3-bedroom presidential suites, and the
            highest level of comfort and luxury.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Benefits: </span>
            Complimentary extended RCI membership, VIP resort access, golf club
            privileges, premium dining and spa vouchers, and a 6-year
            maintenance fee waiver.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Access to Weeks: </span>
            High-demand and peak-season flexibility for ultimate convenience.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Duration: </span>
            Available for up to 20 years with premium payment options.
          </li>
        </ul>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          This tier offers unmatched luxury, exclusivity, and convenience,
          ensuring a truly extraordinary vacation experience at every Charm
          Group resort.
        </p>

        <div className="mt-8 w-full flex justify-center items-center">
          <Link
            href={"/membership"}
            className="text-p1-b bg-amber-500 px-4 py-2 rounded-md capitalize"
          >
            become a member
          </Link>
        </div>

        <h2 className="mt-10 leading-relaxed">
          Why Choose Charm Group Memberships?
        </h2>
        <ul className="md:ps-8 ps-3 list-disc mt-5">
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Flexibility: </span>
            Customize your holiday plans with durations ranging from 1 to 20
            years.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Exclusivity: </span>
            Access a range of luxurious accommodations and resort amenities.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Savings: </span>
            Enjoy maintenance fee waivers, dining vouchers, and complimentary
            memberships.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Payment Options: </span>
            Installment plans available with 0% interest in partnership with
            select banks.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Upgrade Possibilities: </span>
            Start with one membership and upgrade to a higher tier anytime.
          </li>
        </ul>

        <BlurImage
          src={
            "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="image1"
          width={1980}
          height={400}
          className="mt-10 w-full h-[400px] object-cover rounded-md object-bottom"
        />

        <h2 className="mt-10 leading-relaxed">
          Stay in Style: Our Accommodation Options
        </h2>

        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          At Charm Group resorts, our accommodations are designed to provide you
          with unparalleled comfort. Choose from:
        </p>

        <ul className="md:ps-8 ps-3 list-disc mt-5">
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">1-Bedroom Apartments: </span>
            Ideal for couples or small families, featuring a cozy bedroom and
            modern living amenities.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">2-Bedroom Suites: </span>
            Perfect for medium-sized families, offering additional space with
            luxury finishes.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">3-Bedroom President Suites: </span>
            Tailored for larger groups, these accommodations offer premium
            facilities for an opulent stay.
          </li>
          <li className="md:text-p1-r text-p2-r leading-relaxed">
            <span className="font-medium">Villas: </span>
            For those who desire complete privacy and luxury, our villas come
            equipped with private pools, gardens, and concierge services.
          </li>
        </ul>

        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          Each accommodation guarantees modern amenities and stunning views,
          ensuring a delightful experience for every member.
        </p>

        <h2 className="mt-10 leading-relaxed">Pricing & Customization</h2>

        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          Charm Group offers personalized pricing based on the chosen membership
          tier and duration. To ensure the best value for our members, we
          provide custom vacation solutions instead of fixed pricing.
        </p>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          For a personalized quote and more details on our membership options,
          contact our team today!
        </p>
        <p className="mt-2 md:text-p1-r text-p2-r leading-relaxed">
          Start your journey with Charm Group and unlock a lifetime of cherished
          vacation memories. Contact our membership team to learn more and
          choose the tier that’s right for you!
        </p>

        <div className="my-8 w-full flex justify-center items-center">
          <Link
            href={"/membership"}
            className="text-p1-b bg-amber-500 px-4 py-2 rounded-md capitalize"
          >
            become a member
          </Link>
        </div>
      </Container>
    </NavContainer>
  );
}

export default ExploreMembership;
