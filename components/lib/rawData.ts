import { ResortsData, SelectedProps } from "../@types/pages";

export const resortImage = [
  {
    name: "hidden game",
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
    name: "top related resorts",
    image:
      "https://common-booking-engine.gumlet.io/cmsimages/offer-card/offer%205.jpg",
  },
];

export const mockCarouselData = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
