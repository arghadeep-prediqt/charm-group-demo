import { ResortsData, SelectedProps } from "../@types/pages";

export const resortImage = [
  {
    name: "hidden gems",
    image:
      "https://images.unsplash.com/photo-1568229988520-4bc288da81f7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "new resorts",
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "hot offers",
    image:
      "https://images.unsplash.com/photo-1671783181352-1bb9e06fef1a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "trending this season",
    image:
      "https://images.unsplash.com/photo-1584954490709-3c000d2ec110?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "top rated resorts",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/offer-card/offer%205.jpg",
  },
];

export const mockCarouselData = [
  {
    category: "Thuan Phuoc commune",
    title: "Charm Resort Hồ Tràm",
    src: "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-1.jpg",
  },
  {
    category: "Long Dien District",
    title: "Charm Resort Long Hải ",
    src: "https://charm.vn/wp-content/uploads/2022/12/tien-ich-Charm-Resort-Long-Hai-4-1.jpg",
  },
  {
    category: "Thuan Phuoc commune",
    title: "Charm Diamond",
    src: "https://charm.vn/wp-content/uploads/2021/09/Charm-Diamond-2.jpg",
  },
  {
    category: "Thuan Phuoc commune",
    title: "Charm Heritage Village Dalat",
    src: "https://charm.vn/wp-content/uploads/2022/07/Charm-Heritage-Village-Dalat-2-1536x864.jpg",
  },
  {
    category: "Thuan Phuoc commune",
    title: "Charm Resort Ho Tram",
    src: "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-11.jpg",
  },
  {
    category: "Long Dien District",
    title: "Charm Resort Long Hai",
    src: "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Long-Hai-5-1.jpeg",
  },
];

export const firstFilter: SelectedProps[] = [
  { id: 0, name: "Region" },
  { id: 1, name: "International" },
  { id: 2, name: "North" },
  { id: 3, name: "South" },
  { id: 4, name: "East" },
  { id: 5, name: "West" },
];

export const regionData: SelectedProps[] = [
  { id: 0, name: "Region" },
  { id: 1, name: "North" },
  { id: 2, name: "South" },
  { id: 3, name: "East" },
  { id: 4, name: "West" },
];

export const domesticData: SelectedProps[] = [
  { id: 0, name: "Domestic" },
  { id: 1, name: "International" },
];

export const secondFilter: SelectedProps[] = [
  { id: 0, name: "Terrain" },
  { id: 1, name: "Hill station" },
  { id: 2, name: "Beach" },
  { id: 3, name: "City" },
  { id: 4, name: "Waterfront" },
  { id: 5, name: "Jungle" },
  { id: 6, name: "Desert" },
  { id: 7, name: "Himalayan" },
];

export const thirdFilter: SelectedProps[] = [
  { id: 0, name: "Experience" },
  { id: 1, name: "Heritage" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Wildlife" },
  { id: 4, name: "Romantic" },
  { id: 5, name: "Relaxed" },
  { id: 6, name: "Active" },
];

export const allResortsData: ResortsData[] = [
  {
    title: "North",
    data: [
      {
        district: "Himachal Pradesh",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671451672-himachal%20pradesh.jpg",
        resorts: [
          { name: "Club Mahindra Dharamshala Resort", location: "Dharamshala" },
          { name: "Club Mahindra Kandaghat Resort", location: "Kandaghat" },
          {
            name: "Club Mahindra Pristine Peaks, Naldehra",
            location: "Naldehra",
          },
        ],
      },
      {
        district: "Uttarakhand",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671452507-Uttarakhand.jpg",
        resorts: [
          { name: "Club Mahindra Mussoorie Resort", location: "Mussoorie" },
          { name: "Club Mahindra Kanatal Resort", location: "Kanatal" },
          { name: "Club Mahindra Corbett Resort", location: "Corbett" },
        ],
      },
      {
        district: "Rajasthan",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671452720-Kashmie.jpg",
        resorts: [
          { name: "Club Mahindra Jaipur Resort", location: "Jaipur" },
          { name: "Club Mahindra Udaipur Resort", location: "Udaipur" },
          { name: "Club Mahindra Jaisalmer Resort", location: "Jaisalmer" },
        ],
      },
      {
        district: "Delhi NCR",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671452975-Uttar%20Pradesh.jpg",
        resorts: [
          { name: "Club Mahindra Gurgaon Resort", location: "Gurgaon" },
          {
            name: "Club Mahindra Greater Noida Resort",
            location: "Greater Noida",
          },
        ],
      },
      {
        district: "Punjab",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671451672-himachal%20pradesh.jpg",
        resorts: [
          { name: "Club Mahindra Kasauli Resort", location: "Kasauli" },
        ],
      },
      {
        district: "Jammu and Kashmir",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671453152-Ladakh.jpg",
        resorts: [
          { name: "Club Mahindra Srinagar Resort", location: "Srinagar" },
        ],
      },
    ],
  },
  {
    title: "South",
    data: [
      {
        district: "Kerala",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041779-Kerala.jpg",
        resorts: [
          { name: "Club Mahindra Munnar Resort", location: "Munnar" },
          { name: "Club Mahindra Thekkady Resort", location: "Thekkady" },
          { name: "Club Mahindra Ashtamudi Resort", location: "Ashtamudi" },
        ],
      },
      {
        district: "Karnataka",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041742-Karnataka.jpg",
        resorts: [
          { name: "Club Mahindra Madikeri Resort", location: "Madikeri" },
          { name: "Club Mahindra Virajpet Resort", location: "Virajpet" },
          { name: "Club Mahindra Mysore Resort", location: "Mysore" },
        ],
      },
      {
        district: "Tamil Nadu",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677042087-Tamil%20Nadu.jpg",
        resorts: [
          { name: "Club Mahindra Ooty Resort", location: "Ooty" },
          { name: "Club Mahindra Kodaikanal Resort", location: "Kodaikanal" },
          { name: "Club Mahindra Yercaud Resort", location: "Yercaud" },
        ],
      },
      {
        district: "Andhra Pradesh",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041483-Andaman.jpg",
        resorts: [
          {
            name: "Starlit Suites",
            location: "Vishakhapatnam",
          },
        ],
      },
      {
        district: "Andaman and Nicobar",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041483-Andaman.jpg",
        resorts: [
          { name: "Symphony Palms, Havelock Island", location: "Port Blair" },
          {
            name: "Symphony Summer Sands, Neil Island",
            location: "Port Blair",
          },
          { name: "Symphony Samudra Port Blair", location: "Port Blair" },
        ],
      },
      {
        district: "Pondicherry",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041925-Puducherry.jpg",
        resorts: [
          { name: "Club Mahindra Pondicherry Resort", location: "Pondicherry" },
        ],
      },
    ],
  },
  {
    title: "East",
    data: [
      {
        district: "West Bengal",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677042126-West%20Bengal.jpg",
        resorts: [
          { name: "Club Mahindra Darjeeling Resort", location: "Darjeeling" },
          { name: "Club Mahindra Kalimpong Resort", location: "Kalimpong" },
        ],
      },
      {
        district: "Assam",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671451672-himachal%20pradesh.jpg",
        resorts: [
          { name: "Club Mahindra Kaziranga Resort", location: "Kaziranga" },
        ],
      },
      {
        district: "Sikkim",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677042043-Sikkim.jpg",
        resorts: [
          { name: "Club Mahindra Gangtok Resort", location: "Gangtok" },
          { name: "Club Mahindra Namchi Resort", location: "Namchi" },
        ],
      },
      {
        district: "Odisha",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671451672-himachal%20pradesh.jpg",
        resorts: [{ name: "Club Mahindra Puri Resort", location: "Puri" }],
      },
      {
        district: "Jharkhand",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671451672-himachal%20pradesh.jpg",
        resorts: [{ name: "Club Mahindra Ranchi Resort", location: "Ranchi" }],
      },
      {
        district: "Bihar",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1671451672-himachal%20pradesh.jpg",
        resorts: [
          { name: "Club Mahindra Bodh Gaya Resort", location: "Bodh Gaya" },
        ],
      },
    ],
  },
  {
    title: "West",
    data: [
      {
        district: "Rajasthan",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041994-Rajasthan.jpg",
        resorts: [
          { name: "Club Mahindra Jaipur Resort", location: "Jaipur" },
          { name: "Club Mahindra Udaipur Resort", location: "Udaipur" },
          { name: "Club Mahindra Jaisalmer Resort", location: "Jaisalmer" },
        ],
      },
      {
        district: "Gujarat",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041662-Gujarat.jpg",
        resorts: [
          { name: "Club Mahindra Gir Resort", location: "Gir" },
          { name: "Club Mahindra Dwarka Resort", location: "Dwarka" },
        ],
      },
      {
        district: "Maharashtra",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041857-Maharashtra.jpg",
        resorts: [
          {
            name: "Club Mahindra Mahabaleshwar Resort",
            location: "Mahabaleshwar",
          },
          { name: "Club Mahindra Lonavala Resort", location: "Lonavala" },
          { name: "Club Mahindra Sherwood Resort", location: "Sherwood" },
        ],
      },
      {
        district: "Goa",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041632-Goa.jpg",
        resorts: [
          { name: "Club Mahindra Varca Beach Resort", location: "Varca Beach" },
          {
            name: "Club Mahindra Emerald Palms Resort",
            location: "Emerald Palms",
          },
        ],
      },
      {
        district: "Madhya Pradesh",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041822-Madhya%20Pradesh.jpg",
        resorts: [
          { name: "Club Mahindra Kanha Resort", location: "Kanha" },
          { name: "Club Mahindra Bandhavgarh Resort", location: "Bandhavgarh" },
        ],
      },
      {
        district: "Daman and Diu",
        photo:
          "https://common-booking-engine.gumlet.io/cmsimages/state/1677041599-Daman%20and%20Diu.jpg",
        resorts: [{ name: "Club Mahindra Diu Resort", location: "Diu" }],
      },
    ],
  },
];

export const monthsData: SelectedProps[] = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

export const yearData: SelectedProps[] = [
  { id: 0, name: "2025" },
  { id: 1, name: "2026" },
];

export const offerCardData = [
  {
    offerid: "s1CRPv",
    valid: "04 Dec, 2025",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Club-Mahindra-Snow-Peaks-Manali-Resized.jpg",
  },
  {
    offerid: "ClzKI7",
    valid: "04 Dec, 2025",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/360%20videos/DJI_0090.jpg",
  },
  {
    offerid: "7AHxPS",
    valid: "04 Dec, 2025",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Club-Mahindra-Thekkady.jpg",
  },
  {
    offerid: "ZxYYgt",
    valid: "04 Dec, 2025",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/ResotBanner_Mob/Club%20Mahindra%20Netrang.webp",
  },
  {
    offerid: "c9jMgX",
    valid: "04 Dec, 2025",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/All%20Compressed%20banners/Club%20Mahindra%20Pristine%20Peaks%20Naldehra.jpg",
  },
];

export const singleResortData = [
  "https://static-clubmahindra.gumlet.io/storage/app/media/Aasonora%20Resort/Emerald%20palm/Kanatal/bar.jpg",
  "https://static-clubmahindra.gumlet.io/storage/app/media/Mussoorie/MUSSOORIE-exterior-1.jpg",
  "https://static-clubmahindra.gumlet.io/storage/app/media/Mussoorie/MUSS_1BR_03.jpg",
  "https://static-clubmahindra.gumlet.io/storage/app/media/Mussoorie/MUSS_1BR_10.jpg",
];

export const toDoResortData = [
  {
    title: "Vinog Mountain Quail Sanctuary",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/resort-things-to-do/Mussoorie/Vinog%20Mountain%20Quail%20Sanctuary.jpg",
    description:
      "Explore the serene Vinog Mountain Quail Sanctuary, a haven for nature enthusiasts and bird watchers. This sanctuary, nestled in Mussoorie, offers picturesque views and a chance to encounter rare Himalayan wildlife.",
  },
  {
    title: "Mussoorie Exterior View",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Mussoorie/MUSSOORIE-exterior-1.jpg",
    description:
      "A breathtaking view of Mussoorie's scenic landscape, capturing the essence of this enchanting hill station in Uttarakhand.",
  },
  {
    title: "1-Bedroom Suite Interior 1",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Mussoorie/MUSS_1BR_03.jpg",
    description:
      "Step inside a luxurious 1-bedroom suite in Mussoorie, designed to offer comfort and a touch of elegance amidst the mountains.",
  },
  {
    title: "1-Bedroom Suite Interior 2",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Mussoorie/MUSS_1BR_10.jpg",
    description:
      "Experience the cozy ambiance of a well-furnished 1-bedroom suite, perfect for a relaxing getaway in Mussoorie.",
  },
  {
    title: "Gun Hill",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/resort-things-to-do/Mussoorie/Gun%20Hill.jpg",
    description:
      "Visit Gun Hill, Mussoorie's second-highest peak, and enjoy panoramic views of the surrounding Himalayan ranges and the Doon Valley.",
  },
  {
    title: "Kempty Falls",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/resort-things-to-do/Mussoorie/Kempty%20Falls.jpg",
    description:
      "Witness the cascading beauty of Kempty Falls, a must-visit attraction in Mussoorie, perfect for picnics and nature lovers.",
  },
];

export const aminitiesData = [
  {
    name: "Gymnasium",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_30-Gymnasium.png",
  },
  {
    name: "Laundry Service",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_32-Laundry.png",
  },
  {
    name: "Swiming Pool",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/New%20folder/CM_Icons_03-Pool.png",
  },
  {
    name: "Travel Desk",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_34-Travel%20Desk.png",
  },
  {
    name: "Parking Facility",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_29-Parking%20Facility.png",
  },
  {
    name: "Conference Hall/ Banquet Hall",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_37-Conference%20Hall.png",
  },
  {
    name: "Indoor and Outdoor Games",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_31-Indoor%20and%20Outdoor%20Games.png",
  },
  {
    name: "Souvenir Shop",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_33-Souvenir%20Shop.png",
  },
  {
    name: "Travel Desk",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_34-Travel%20Desk.png",
  },
  {
    name: "Children's Play Area",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_36-Childrens%20Play.png",
  },
  {
    name: "Wi-Fi in Common Areas",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_35-WiFi.png",
  },
  {
    name: "Doctor on Call",
    photo:
      "https://static-clubmahindra.gumlet.io/storage/app/media/Amenities/amenities_latest/CM_Icons_38-Doctor%20on%20Call.png",
  },
];

export const membersReviewData = [
  {
    name: "Arjun Sharma",
    created: "2020",
    comment:
      "The experience was truly unforgettable! From the moment we arrived, the staff made us feel so welcome. The resort is nestled in a serene location with stunning views of the mountains. The rooms were spacious, clean, and beautifully designed to blend luxury with comfort. I especially loved the outdoor activities that allowed us to connect with nature, and the food was an absolute delight with a variety of options for all tastes. I can't wait to return!",
  },
  {
    name: "Priya Mehta",
    created: "2019",
    comment:
      "This was one of the most rejuvenating trips I've ever had! The peaceful environment was just what I needed to escape from the city's hustle and bustle. The resort offers everything you could ask for, from a relaxing spa to adventurous treks nearby. The staff went out of their way to accommodate all our needs, and the attention to detail in every service was impeccable. Highly recommended for anyone looking for a serene getaway.",
  },
  {
    name: "Rohan Gupta",
    created: "2021",
    comment:
      "An amazing experience! The location is perfect for nature lovers, with breathtaking views and plenty of greenery all around. I particularly enjoyed the guided tours that the resort organized—they were well-planned and informative. The rooms were cozy, the food was excellent, and the hospitality was top-notch. I can't thank the staff enough for making our stay so memorable. It’s a place I would visit again without a second thought.",
  },
  {
    name: "Sneha Kapoor",
    created: "2022",
    comment:
      "Absolutely loved everything about this place! The resort is beautifully maintained and offers a perfect blend of luxury and tranquility. The staff was incredibly warm and attentive, ensuring that every aspect of our stay was comfortable. I spent hours just soaking in the views from our balcony—it was magical. The activities on offer kept us entertained throughout, and the food was to die for! Definitely a destination I would recommend to all my friends and family.",
  },
  {
    name: "Vikram Patel",
    created: "2020",
    comment:
      "The resort exceeded all my expectations! From the moment we checked in, everything was handled with utmost professionalism and care. The surroundings were breathtaking, offering a sense of calm and relaxation. The staff was always eager to assist, and their warmth added to the overall experience. The highlight for me was the local cuisine that was served—it was authentic and delicious. I would recommend this resort to anyone looking for a memorable holiday.",
  },
  {
    name: "Anjali Nair",
    created: "2021",
    comment:
      "This resort provided the perfect escape from our busy lives. The views of the surrounding hills were mesmerizing, and the fresh mountain air was invigorating. The rooms were spacious, with every amenity you could think of. What stood out the most was the incredible service—we were treated like royalty throughout our stay. The food was exceptional, with a wide range of options to choose from. It was an experience I would love to relive again and again.",
  },
  {
    name: "Manish Reddy",
    created: "2018",
    comment:
      "Everything about this resort was outstanding! The location is unbeatable, surrounded by lush greenery and offering spectacular views. The staff was extremely professional and courteous, always ready to help with a smile. The rooms were luxurious yet homely, and the dining options were simply fantastic. We enjoyed every moment of our stay, from relaxing by the pool to exploring the nearby attractions. A wonderful experience that I will cherish for a long time.",
  },
  {
    name: "Isha Desai",
    created: "2019",
    comment:
      "A truly memorable experience! The resort is a paradise for anyone looking to unwind and reconnect with nature. The rooms were tastefully done, with attention to every little detail. I was particularly impressed with the range of activities they offered, from yoga sessions to adventure sports. The staff made us feel special at every step, and the food was absolutely divine. It’s a place I would recommend to anyone looking for a peaceful retreat.",
  },
  {
    name: "Aditya Verma",
    created: "2022",
    comment:
      "Loved every moment of our stay! The resort is set in a stunning location, with panoramic views that are truly awe-inspiring. The accommodations were comfortable and equipped with all modern amenities. What really made our trip special was the hospitality of the staff—they went above and beyond to ensure we had a great time. The food was a highlight for me, with delicious options that catered to all tastes. This place is a must-visit for anyone looking for a luxurious and peaceful holiday.",
  },
];

export const faqData = [
  {
    heading: "What is Charm Group?",
    description: `Charm Group is one of India's leading vacation ownership companies, offering unforgettable holiday experiences across a range of resorts and destinations.`,
  },
  {
    heading: "How does Charm Group membership work?",
    description: `Charm Group membership allows you to book vacations at over 100 resorts in India and abroad. Members get annual vacation weeks for 25 years, which can be customised based on your preferences.`,
  },
  {
    heading: "Can I choose my holiday destination?",
    description: `Yes, Charm Group provides flexibility to choose from a variety of destinations in India and abroad. Availability depends on the type of membership plan and booking period.`,
  },
  {
    heading: "What are the benefits of a Charm Group membership?",
    description: `Members enjoy access to premium resorts, curated holiday experiences, and the ability to save on vacation costs over time. Additional perks include member-only discounts and exclusive experiences.`,
  },
  {
    heading: "Can I book multiple vacations in a year?",
    description: `Yes, members can book additional vacations apart from their annual vacation weeks, subject to availability and additional charges.`,
  },
  {
    heading: "What is the cancellation policy?",
    description: `Cancellations are allowed as per the Charm Group cancellation policy. Fees or penalties may apply depending on the timing of your cancellation.`,
  },
  {
    heading: "Can non-members book a stay at Charm Group resorts?",
    description: `Yes, non-members can book stays at select Charm Group resorts, but priority is given to members, and pricing may differ.`,
  },
  {
    heading: "How can I become a member of Charm Group?",
    description: `To become a member, visit the official website, select your preferred plan, and follow the guided registration process. You can also reach out to their customer support team for assistance.`,
  },
  {
    heading: "What facilities are available at Charm Group resorts?",
    description: `Charm Group resorts offer luxurious accommodations, multi-cuisine restaurants, swimming pools, wellness spas, kids’ activities, and more to ensure a memorable stay.`,
  },
  {
    heading: "Is Charm Group membership transferable?",
    description: `Yes, Charm Group membership can be transferred to a family member or a third party, subject to specific terms and conditions.`,
  },
];

export const paymentDetails = [
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_001",
    UnadjustedAmt: 0,
    emiNumber: "001",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-02-07",
    InvoiceDate: "Feb 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_002",
    UnadjustedAmt: 0,
    emiNumber: "002",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-03-07",
    InvoiceDate: "Mar 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_003",
    UnadjustedAmt: 0,
    emiNumber: "003",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-04-07",
    InvoiceDate: "Apr 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_004",
    UnadjustedAmt: 0,
    emiNumber: "004",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-05-07",
    InvoiceDate: "May 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_005",
    UnadjustedAmt: 0,
    emiNumber: "005",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-06-07",
    InvoiceDate: "Jun 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_006",
    UnadjustedAmt: 0,
    emiNumber: "006",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-07-07",
    InvoiceDate: "Jul 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_007",
    UnadjustedAmt: 0,
    emiNumber: "007",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-08-07",
    InvoiceDate: "Aug 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_008",
    UnadjustedAmt: 0,
    emiNumber: "008",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-09-07",
    InvoiceDate: "Sep 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_009",
    UnadjustedAmt: 0,
    emiNumber: "009",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-10-07",
    InvoiceDate: "Oct 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_010",
    UnadjustedAmt: 0,
    emiNumber: "010",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-11-07",
    InvoiceDate: "Nov 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_011",
    UnadjustedAmt: 0,
    emiNumber: "011",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2025-12-07",
    InvoiceDate: "Dec 2025",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
  {
    emiStatusName: "Advance",
    emi_status: "Advance",
    arrearAmount: 0,
    minArrearsToPay: 0,
    InvoiceNumber: "3060451_603172_0101470904_012",
    UnadjustedAmt: 0,
    emiNumber: "012",
    netAmount: 23888,
    diffSTaxPaid: 0,
    InvoiceDuedate: "2026-01-07",
    InvoiceDate: "Jan 2026",
    PaymentType: "EMI",
    Proportionate_Interest: 0,
    monthlyInterest: 0,
    foreCloser_Amount: 0,
    sel: true,
    redeemHfrpPoints: 0,
    deductPoints: 0,
    InvoiceAmount: 0,
  },
];

export const travelDiaries = [
  {
    heading: "Trip to Hồ Tràm, Vietnam",
    subHeading: "Shared By Vương Minh Tuân on 20 September 2024",
    description:
      "This was our first experience as members of Charm Group’s timeshare program, and it truly set the bar high. Initially, we were unsure about room availability, but the Charm Group app made the booking process effortless. We chose to stay at Charm Resort Hồ Tràm, nestled in Hồ Tràm, Vietnam, a luxurious beachfront destination spanning 40 hectares. Upon arrival, we were welcomed warmly with a refreshing drink before settling into our accommodations.\n\nOur afternoon was spent soaking in the sun by the stunning pool. In the evening, my child and I enjoyed an exciting bicycle ride, followed by a serene visit to the waterfront – an unforgettable highlight. My spouse relished the rejuvenating spa treatments available at the resort. I was also impressed by Charm Group’s commitment to sustainability, with solar energy initiatives and the convenience of an EV charging station for our electric car.\n\nThe fine dining experience was exceptional, and my child had a fantastic time exploring the kids’ play area. Later, I savored the gentle breeze by the waterfront, which perfectly captured the essence of relaxation. The resort’s proximity to Hồ Tràm's attractions added to our excitement, and we’re already planning a stay at Charm Resort Đà Lạt in Đà Lạt, Vietnam, to experience its cultural charm on our next visit.",
    resort: "Charm Resort Hồ Tràm",
    image:
      "https://images.unsplash.com/photo-1675310366607-18d20663943b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "Into the Heart of Nature at Charm Resort Hồ Tràm",
    subHeading: "Shared By Trần Thị Hồng Lũy on 29 August 2024",
    description:
      "The breathtaking beauty of Hồ Tràm, Vietnam, feels like a scene straight out of a dream. Its pristine beaches, luxurious surroundings, and serene ambiance offer an unforgettable escape. Our trip to Charm Resort Hồ Tràm, nestled within this coastal haven, was nothing short of spectacular.\n\nFrom the moment we arrived, the resort’s warmth and hospitality stood out. Greeted by the friendly staff with a refreshing welcome drink, we felt at ease immediately. Spread across a sprawling 40 hectares, the resort offers a wealth of amenities – from a wellness center and spa to a sparkling swimming pool and a vibrant kids' play area.\n\nThe resort’s travel desk made planning effortless, arranging activities tailored to our preferences. One of the highlights was a guided tour of Hồ Tràm’s lush landscapes, where we connected deeply with nature. The resort also catered to every member of our family, including preparing kid-friendly meals for our little one. The buffet spread, featuring breakfast, lunch, high tea, and dinner, was a culinary delight, showcasing perfection in every bite.\n\nWhether it was enjoying a sunset stroll along the beach, relaxing by the pool, or marveling at the beauty of the location, Charm Resort Hồ Tràm made our timeshare experience truly memorable. We’re eagerly looking forward to our next adventure at Charm Resort Phú Quốc for its unique blend of entertainment and authentic architecture.",
    resort: "Charm Resort Hồ Tràm",
    image:
      "https://images.unsplash.com/photo-1709710223973-bed31e23806d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "My Charm Resort Hồ Tràm Diary",
    subHeading: "Shared By Văn Thị Huỳnh Hiên on 04 July 2024",
    description:
      "Creating a travel diary for Charm Resort Hồ Tràm is a delightful way to preserve cherished memories. Here’s how our 5-day escape unfolded:\n\n**Day 1: Arrival and First Impressions**\nMorning: Arrived at Charm Resort Hồ Tràm, Hồ Tràm, Vietnam. The check-in was seamless, with the staff offering a warm welcome and a refreshing drink. First impressions were remarkable: modern yet tranquil architecture, breathtaking beachfront views, and the lush ambiance surrounding the resort.\n\n**Day 2: Discovering Hồ Tràm**\nStarted the day with an early breakfast featuring local delicacies like fresh Vietnamese spring rolls and tropical fruits. Embarked on a nature walk guided by the resort staff, where we discovered the serene beachfront and vibrant flora.\n\n**Day 3: Adventure and Relaxation**\nAfter breakfast, ventured on an adventurous ATV ride along the coastal trails organized by the resort’s travel desk. The views and adrenaline were unforgettable! Unwound with a rejuvenating spa session, indulging in a traditional Vietnamese massage with herbal oils.\n\n**Day 4: Cultural Immersion**\nGuided visit to a nearby craft village, interacting with artisans and exploring traditional pottery and textile-making. Returned to the resort for an enchanting musical evening featuring traditional instruments.\n\n**Day 5: Departure**\nEnjoyed a leisurely breakfast before taking one last stroll around the resort to soak in its charm. The check-out process was smooth, and the staff sent us off with warm smiles and a thoughtful parting gift.\n\nCharm Resort Hồ Tràm turned our holiday into an extraordinary journey, and we can’t wait to plan our next stay at Charm Resort Đà Lạt for its unique cultural charm.",
    resort: "Charm Resort Hồ Tràm",
    image:
      "https://images.unsplash.com/photo-1685714628080-356a7cddcf66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
