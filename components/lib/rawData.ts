import { MenuItemProps } from "../@types/common";
import {
  CurrentSectionProps,
  Experience,
  ResortsData,
  SelectedProps,
} from "../@types/pages";

export const resortImage: CurrentSectionProps[] = [
  {
    id: 0,
    name: "unexplored paradises",
    heading: "Discover Hidden Luxury Escapes",
    description:
      "Uncover serene retreats off the beaten path. These hidden gems offer unmatched tranquility and charm for a perfect getaway.",
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    name: "fresh horizons",
    heading: "Experience the Latest in Elegance",
    description:
      "Be among the first to stay at our newly launched premium properties. Discover modern luxury designed for your ultimate comfort.",
    image:
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "luxury for Less",
    heading: "Luxury That Fits Your Budget",
    description:
      "Take advantage of exclusive limited-time deals. Indulge in world-class experiences at incredible value.",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
  },
  {
    id: 3,
    name: "popular picks",
    heading: "Plan Your Stay at Trending Resorts",
    description:
      "Explore the most sought-after destinations of the season. These resorts are buzzing with excitement and unforgettable experiences.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "guest favorites",
    heading: "Stay at the Best-Rated Resorts",
    description:
      "Highly praised by travelers, these resorts deliver exceptional luxury. Enjoy a flawless escape with top-tier amenities and services.",
    image:
      "https://images.unsplash.com/photo-1515249347005-66ea7bc26847?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const navigationProfile = [
  {
    name: "My Profile",
    icon: "https://img.icons8.com/fluency-systems-filled/100/faa307/user.png",
    link: "/profile",
    content: [
      { name: "Basic Information", link: "#info" },
      { name: "Sign in method", link: "#signin" },
      { name: "Connected Accounts", link: "#connected" },
    ],
  },
  {
    name: "My Stays",
    icon: "https://img.icons8.com/fluency-systems-filled/100/faa307/beach-umbrella.png",
    link: "/my_bookings",
    content: [
      { name: "Upcoming", link: "#upcoming" },
      { name: "Ongoing", link: "#ongoing" },
      { name: "Completed", link: "#completed" },
      { name: "Cancelled", link: "#cancelled" },
    ],
  },
  {
    name: "Payment Details",
    icon: "https://img.icons8.com/fluency-systems-filled/100/faa307/card-in-use.png",
    link: "/profile/payment",
    content: [{ name: "Payment Details", link: "#payment" }],
  },
  {
    name: "Ownership Upgrade",
    icon: "https://img.icons8.com/fluency-systems-filled/100/faa307/membership-card.png",
    link: "/membership",
    content: [{ name: "Upgrade", link: "#upgrade" }],
  },
  {
    name: "Holiday Usage",
    icon: "https://img.icons8.com/fluency-systems-filled/100/faa307/overtime.png",
    link: "/profile/utilization",
    content: [
      { name: "Eligible Holidays", link: "#holidays" },
      { name: "Confirmed Stays", link: "#holidays" },
      { name: "Cancelled Reservations", link: "#holidays" },
      { name: "Expired Holidays", link: "#holidays" },
      { name: "Adjustments & Deductions", link: "#holidays" },
      { name: "Cancellation", link: "#cancellation" },
    ],
  },
  {
    name: "Ownership Transfer",
    icon: "https://img.icons8.com/fluency-systems-filled/100/faa307/membership-card.png",
    link: "/membership/transfer",
    content: [],
  },
];

export const privilegesSideNav = [
  {
    section: "Signature Experiences",
    check: [
      "weekend escapes",
      "holidays plans",
      "festive gateways",
      "global hotel network",
      "domestic hotel stays",
    ],
    children: [
      {
        title: "weekend escapes",
        path: "weekend%20escapes",
        heading: "Unwind with Relaxing",
      },
      {
        title: "holidays plans",
        path: "holidays%20plans",
        heading: "Indulge in Tailored",
      },
      {
        title: "festive gateways",
        path: "festive%20gateways",
        heading: "Celebrate the Festive Season with a",
      },
      {
        title: "global hotel network",
        path: "global%20hotel%20network",
        heading: "Experience the Comfort of",
      },
      {
        title: "domestic hotel stays",
        path: "domestic%20hotel%20stays",
        heading: "Relax with Comfort at",
      },
    ],
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
    title: "Northern Vietnam",
    local: "Bắc Bộ",
    data: [
      {
        district: "Đông Bắc",
        photo:
          "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2023-02/shutterstock_1900070254_1.jpg?itok=XkGlqHC7",
        resorts: [
          {
            name: "Charm Resort Hạ Long Bay",
            location: "Quảng Ninh , Đông Bắc",
          },
          { name: "Charm Resort Ba Bể Lake", location: "Bắc Kạn , Đông Bắc" },
          {
            name: "Charm Resort Lạng Sơn Hills",
            location: "Lạng Sơn , Đông Bắc",
          },
          {
            name: "Charm Resort Cao Bằng Riverside",
            location: "Cao Bằng , Đông Bắc",
          },
          { name: "Charm Resort Mẫu Sơn", location: "Lạng Sơn , Đông Bắc" },
        ],
      },
      {
        district: "Tây Bắc",
        photo:
          "https://cdn.kimkim.com/files/a/content_articles/featured_photos/538026be6c47504b374240cae3aaed096b42977b/big-0090bb4a9046bb1abb1f236b9ce588cf.jpg",
        resorts: [
          { name: "Charm Resort Sapa Valley", location: "Lào Cai , Tây Bắc" },
          {
            name: "Charm Resort Điện Biên Retreat",
            location: "Điện Biên , Tây Bắc",
          },
          {
            name: "Charm Resort Sơn La Serenity",
            location: "Sơn La , Tây Bắc",
          },
          {
            name: "Charm Resort Lai Châu Highlands",
            location: "Lai Châu , Tây Bắc",
          },
          { name: "Charm Resort Mộc Châu Bliss", location: "Sơn La , Tây Bắc" },
        ],
      },
      {
        district: "Đồng Bằng Sông Hồng",
        photo:
          "https://travelsense.asia/wp-content/uploads/2019/11/cao-bang-Trung-Khanh.jpg",
        resorts: [
          {
            name: "Charm Resort West Lake",
            location: "Hà Nội , Đồng Bằng Sông Hồng",
          },
          {
            name: "Charm Resort Ninh Bình Tranquility",
            location: "Ninh Bình , Đồng Bằng Sông Hồng",
          },
          {
            name: "Charm Resort Hải Phòng Harbor",
            location: "Hải Phòng , Đồng Bằng Sông Hồng",
          },
          {
            name: "Charm Resort Nam Định Heritage",
            location: "Nam Định , Đồng Bằng Sông Hồng",
          },
          {
            name: "Charm Resort Thái Bình Serenity",
            location: "Thái Bình , Đồng Bằng Sông Hồng",
          },
        ],
      },
    ],
  },
  {
    title: "Central Vietnam",
    local: "Trung Bộ",
    data: [
      {
        district: "Bắc Trung Bộ",
        photo:
          "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2019-02/Central%20Vietnam%20Travel%20Guide-2_0.jpg?itok=tkYt3Jqd",
        resorts: [
          {
            name: "Charm Resort Cửa Lò Beachfront",
            location: "Nghệ An , Bắc Trung Bộ",
          },
          {
            name: "Charm Resort Thanh Hóa Oasis",
            location: "Thanh Hóa , Bắc Trung Bộ",
          },
          {
            name: "Charm Resort Quảng Bình Caveside",
            location: "Quảng Bình , Bắc Trung Bộ",
          },
          {
            name: "Charm Resort Hà Tĩnh Seascape",
            location: "Hà Tĩnh , Bắc Trung Bộ",
          },
          {
            name: "Charm Resort Vinh City Luxe",
            location: "Nghệ An , Bắc Trung Bộ",
          },
        ],
      },
      {
        district: "Nam Trung Bộ",
        photo:
          "https://statics.vinwonders.com/Central-Vietnam-itinerary-01_1687860666.jpg",
        resorts: [
          {
            name: "Charm Resort Đà Nẵng Beachfront",
            location: "Đà Nẵng , Nam Trung Bộ",
          },
          {
            name: "Charm Resort Nha Trang Shores",
            location: "Khánh Hòa , Nam Trung Bộ",
          },
          {
            name: "Charm Resort Quy Nhơn Pearl",
            location: "Bình Định , Nam Trung Bộ",
          },
          {
            name: "Charm Resort Phan Thiết Retreat",
            location: "Bình Thuận , Nam Trung Bộ",
          },
          {
            name: "Charm Resort Lý Sơn Island",
            location: "Quảng Ngãi , Nam Trung Bộ",
          },
        ],
      },
      {
        district: "Tây Nguyên",
        photo:
          "https://media.worldnomads.com/Explore/vietnam/river-hoi-an-istock-gargolas.jpg",
        resorts: [
          {
            name: "Charm Resort Đà Lạt Heritage",
            location: "Lâm Đồng , Tây Nguyên",
          },
          {
            name: "Charm Resort Buôn Ma Thuột Coffee Retreat",
            location: "Đắk Lắk , Tây Nguyên",
          },
          {
            name: "Charm Resort Gia Lai Hills",
            location: "Gia Lai , Tây Nguyên",
          },
          {
            name: "Charm Resort Kon Tum Wilderness",
            location: "Kon Tum , Tây Nguyên",
          },
          {
            name: "Charm Resort Krông Năng Escape",
            location: "Đắk Lắk , Tây Nguyên",
          },
        ],
      },
    ],
  },
  {
    title: "Southern Vietnam",
    local: "Nam Bộ ",
    data: [
      {
        district: "Đông Nam Bộ",
        photo:
          "https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2017-07/southern-vietnam_1.jpg?itok=an6PzoKg",
        resorts: [
          {
            name: "Charm Resort Hồ Tràm Bliss",
            location: "Bà Rịa–Vũng Tàu , Đông Nam Bộ",
          },
          {
            name: "Charm Resort Long Hải Serenity",
            location: "Bà Rịa–Vũng Tàu , Đông Nam Bộ",
          },
          {
            name: "Charm Resort Biên Hòa Luxe",
            location: "Đồng Nai , Đông Nam Bộ",
          },
          {
            name: "Charm Resort Củ Chi Nature Retreat",
            location: "Hồ Chí Minh City , Đông Nam Bộ",
          },
          {
            name: "Charm Resort Vũng Tàu Cityscape",
            location: "Bà Rịa–Vũng Tàu , Đông Nam Bộ",
          },
        ],
      },
      {
        district: "Đồng Bằng Sông Cửu Long",
        photo:
          "https://pohcdn.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/live_banner/South-Vietnam.jpg",
        resorts: [
          {
            name: "Charm Resort Cần Thơ Riverside",
            location: "Cần Thơ , Đồng Bằng Sông Cửu Long",
          },
          {
            name: "Charm Resort Phú Quốc Haven",
            location: "Kiên Giang , Đồng Bằng Sông Cửu Long",
          },
          {
            name: "Charm Resort Mỹ Tho Serenity",
            location: "Tiền Giang , Đồng Bằng Sông Cửu Long",
          },
          {
            name: "Charm Resort Sóc Trăng Bliss",
            location: "Sóc Trăng , Đồng Bằng Sông Cửu Long",
          },
          {
            name: "Charm Resort Châu Đốc Retreat",
            location: "An Giang , Đồng Bằng Sông Cửu Long",
          },
        ],
      },
    ],
  },
  {
    title: "International",
    local: "",
    data: [
      {
        district: "Bali, Indonesia",
        photo:
          "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        resorts: [
          { name: "Charm Resort Uluwatu Bliss", location: "Bali, Indonesia" },
          {
            name: "Charm Resort Tegallalang Retreat",
            location: "Bali, Indonesia",
          },
          {
            name: "Charm Resort Seminyak Serenity",
            location: "Bali, Indonesia",
          },
          { name: "Charm Resort Nusa Dua Escape", location: "Bali, Indonesia" },
        ],
      },
      {
        district: "Maldives",
        photo:
          "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        resorts: [
          { name: "Charm Resort Maafushi Lagoon", location: "Maldives" },
          { name: "Charm Resort Baa Atoll Luxe", location: "Maldives" },
          { name: "Charm Resort Malé Serenity", location: "Maldives" },
          { name: "Charm Resort Ari Atoll Escape", location: "Maldives" },
        ],
      },
      {
        district: "Santorini, Greece",
        photo:
          "https://images.unsplash.com/photo-1662116432150-4394d39ced32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        resorts: [
          { name: "Charm Resort Oia Sunset", location: "Santorini, Greece" },
          { name: "Charm Resort Fira Heights", location: "Santorini, Greece" },
          { name: "Charm Resort Kamari Bliss", location: "Santorini, Greece" },
          {
            name: "Charm Resort Imerovigli Tranquility",
            location: "Santorini, Greece",
          },
        ],
      },
      {
        district: "Kyoto, Japan",
        photo:
          "https://images.unsplash.com/photo-1655222330870-1c2a0fc3fea7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        resorts: [
          { name: "Charm Resort Arashiyama Retreat", location: "Kyoto, Japan" },
          {
            name: "Charm Resort Higashiyama Heritage",
            location: "Kyoto, Japan",
          },
          {
            name: "Charm Resort Gion Luxe",
            location: "Kyoto, Japan",
          },
          {
            name: "Charm Resort Fushimi Escape",
            location: "Kyoto, Japan",
          },
        ],
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
  "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-11.jpg",
  "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-12.jpg",
  "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-3.jpg",
];

export const toDoResortData = [
  {
    title: "Sunset Viewpoint",
    photo:
      "https://images.unsplash.com/photo-1614877105424-a72d57d5e05c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
    description:
      "Witness the enchanting hues of the setting sun painting the sky, offering an unforgettable experience amidst nature's tranquility.",
  },
  {
    title: "Botanical Trails",
    photo:
      "https://images.unsplash.com/photo-1526754624448-267a526aea3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Explore lush trails lined with exotic flora and vibrant blooms, perfect for nature enthusiasts and peaceful strolls.",
  },
  {
    title: "Adventure Peak",
    photo:
      "https://images.unsplash.com/photo-1459231978203-b7d0c47a2cb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Scale new heights with thrilling treks, rock climbing, and unparalleled panoramic views of the surrounding landscapes.",
  },
  {
    title: "Cultural Heritage Hub",
    photo:
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Step back in time as you visit ancient temples, forts, and landmarks that echo the stories of a rich cultural past.",
  },
  {
    title: "Riverside Picnic Spot",
    photo:
      "https://images.unsplash.com/photo-1634707895252-65d3d6d90a80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Relax by the crystal-clear waters of a serene river, enjoying the beauty of the countryside with your loved ones.",
  },
  {
    title: "Wildlife Haven",
    photo:
      "https://images.unsplash.com/photo-1511715344286-1265e346ef52?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dive into an adventurous safari experience, encountering diverse fauna in their natural habitats, including rare species.",
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
    name: "Nguyễn Văn An",
    created: "2020",
    comment:
      "The experience was truly unforgettable! From the moment we arrived, the staff made us feel so welcome. The resort is nestled in a serene location with stunning views of the mountains. The rooms were spacious, clean, and beautifully designed to blend luxury with comfort. I especially loved the outdoor activities that allowed us to connect with nature, and the food was an absolute delight with a variety of options for all tastes. I can't wait to return!",
  },
  {
    name: "Lê Thị Hoa",
    created: "2019",
    comment:
      "This was one of the most rejuvenating trips I've ever had! The peaceful environment was just what I needed to escape from the city's hustle and bustle. The resort offers everything you could ask for, from a relaxing spa to adventurous treks nearby. The staff went out of their way to accommodate all our needs, and the attention to detail in every service was impeccable. Highly recommended for anyone looking for a serene getaway.",
  },
  {
    name: "Trần Minh Hoàng",
    created: "2021",
    comment:
      "An amazing experience! The location is perfect for nature lovers, with breathtaking views and plenty of greenery all around. I particularly enjoyed the guided tours that the resort organized—they were well-planned and informative. The rooms were cozy, the food was excellent, and the hospitality was top-notch. I can't thank the staff enough for making our stay so memorable. It’s a place I would visit again without a second thought.",
  },
  {
    name: "Phạm Thị Lan",
    created: "2022",
    comment:
      "Absolutely loved everything about this place! The resort is beautifully maintained and offers a perfect blend of luxury and tranquility. The staff was incredibly warm and attentive, ensuring that every aspect of our stay was comfortable. I spent hours just soaking in the views from our balcony—it was magical. The activities on offer kept us entertained throughout, and the food was to die for! Definitely a destination I would recommend to all my friends and family.",
  },
  {
    name: "Đặng Hữu Phước",
    created: "2020",
    comment:
      "The resort exceeded all my expectations! From the moment we checked in, everything was handled with utmost professionalism and care. The surroundings were breathtaking, offering a sense of calm and relaxation. The staff was always eager to assist, and their warmth added to the overall experience. The highlight for me was the local cuisine that was served—it was authentic and delicious. I would recommend this resort to anyone looking for a memorable holiday.",
  },
  {
    name: "Võ Ngọc Bích",
    created: "2021",
    comment:
      "This resort provided the perfect escape from our busy lives. The views of the surrounding hills were mesmerizing, and the fresh mountain air was invigorating. The rooms were spacious, with every amenity you could think of. What stood out the most was the incredible service—we were treated like royalty throughout our stay. The food was exceptional, with a wide range of options to choose from. It was an experience I would love to relive again and again.",
  },
  {
    name: "Hồ Quang Dũng",
    created: "2018",
    comment:
      "Everything about this resort was outstanding! The location is unbeatable, surrounded by lush greenery and offering spectacular views. The staff was extremely professional and courteous, always ready to help with a smile. The rooms were luxurious yet homely, and the dining options were simply fantastic. We enjoyed every moment of our stay, from relaxing by the pool to exploring the nearby attractions. A wonderful experience that I will cherish for a long time.",
  },
  {
    name: "Ngô Thị Hương",
    created: "2019",
    comment:
      "A truly memorable experience! The resort is a paradise for anyone looking to unwind and reconnect with nature. The rooms were tastefully done, with attention to every little detail. I was particularly impressed with the range of activities they offered, from yoga sessions to adventure sports. The staff made us feel special at every step, and the food was absolutely divine. It’s a place I would recommend to anyone looking for a peaceful retreat.",
  },
  {
    name: "Bùi Thanh Tùng",
    created: "2022",
    comment:
      "Loved every moment of our stay! The resort is set in a stunning location, with panoramic views that are truly awe-inspiring. The accommodations were comfortable and equipped with all modern amenities. What really made our trip special was the hospitality of the staff—they went above and beyond to ensure we had a great time. The food was a highlight for me, with delicious options that catered to all tastes. This place is a must-visit for anyone looking for a luxurious and peaceful holiday.",
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    title: "Hiking & Trekking",
    image:
      "https://images.unsplash.com/photo-1484264883846-eb04404af310?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "Snorkeling",
    image:
      "https://images.unsplash.com/photo-1708487864802-a85aa984c93a?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Safari",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Zip Lining",
    image:
      "https://images.unsplash.com/photo-1648853070657-6d58398bee93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Historical Tours ",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Heritage Villages",
    image:
      "https://images.unsplash.com/photo-1706612625425-3f14f487e548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Spa & Wellness Retreats",
    image:
      "https://images.unsplash.com/photo-1491510736257-3ad769ff47b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Yacht Cruises",
    image:
      "https://images.unsplash.com/photo-1598695643539-f47d01094dee?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Hot Air Ballooning",
    image:
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const faqData = [
  {
    heading: "What is Charm Group?",
    description: `Charm Group is one of Vietnam's leading vacation ownership companies, offering unforgettable holiday experiences across a range of resorts and destinations.`,
  },
  {
    heading: "How does Charm Group membership work?",
    description: `Charm Group membership allows you to book vacations at over 100 resorts in Vietnam and abroad. Members get annual vacation weeks for 25 years, which can be customised based on your preferences.`,
  },
  {
    heading: "Can I choose my holiday destination?",
    description: `Yes, Charm Group provides flexibility to choose from a variety of destinations in Vietnam and abroad. Availability depends on the type of membership plan and booking period.`,
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
    description: `Charm Group resorts offer luxurious accommodations, multi-cuisine restaurants, swimming pools, wellness spas, kids' activities, and more to ensure a memorable stay.`,
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
    description: `
      <p>This was our first experience as members of Charm Group’s timeshare program, and it truly set the bar high. Initially, we were unsure about room availability, but the Charm Group app made the booking process effortless. We chose to stay at Charm Resort Hồ Tràm, nestled in Hồ Tràm, Vietnam, a luxurious beachfront destination spanning 40 hectares. Upon arrival, we were welcomed warmly with a refreshing drink before settling into our accommodations.</p>
      <p>Our afternoon was spent soaking in the sun by the stunning pool. In the evening, my child and I enjoyed an exciting bicycle ride, followed by a serene visit to the waterfront – an unforgettable highlight. My spouse relished the rejuvenating spa treatments available at the resort. I was also impressed by Charm Group’s commitment to sustainability, with solar energy initiatives and the convenience of an EV charging station for our electric car.</p>
      <p>The fine dining experience was exceptional, and my child had a fantastic time exploring the kids’ play area. Later, I savored the gentle breeze by the waterfront, which perfectly captured the essence of relaxation. The resort’s proximity to Hồ Tràm's attractions added to our excitement, and we’re already planning a stay at Charm Resort Đà Lạt in Đà Lạt, Vietnam, to experience its cultural charm on our next visit.</p>
    `,
    resort: "Charm Resort Hồ Tràm",
    image:
      "https://images.unsplash.com/photo-1675310366607-18d20663943b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "Into the Heart of Nature at Charm Resort Hồ Tràm",
    subHeading: "Shared By Trần Thị Hồng Lũy on 29 August 2024",
    description: `
      <p>The breathtaking beauty of Hồ Tràm, Vietnam, feels like a scene straight out of a dream. Its pristine beaches, luxurious surroundings, and serene ambiance offer an unforgettable escape. Our trip to Charm Resort Hồ Tràm, nestled within this coastal haven, was nothing short of spectacular.</p>
      <p>From the moment we arrived, the resort’s warmth and hospitality stood out. Greeted by the friendly staff with a refreshing welcome drink, we felt at ease immediately. Spread across a sprawling 40 hectares, the resort offers a wealth of amenities – from a wellness center and spa to a sparkling swimming pool and a vibrant kids' play area.</p>
      <p>The resort’s travel desk made planning effortless, arranging activities tailored to our preferences. One of the highlights was a guided tour of Hồ Tràm’s lush landscapes, where we connected deeply with nature. The resort also catered to every member of our family, including preparing kid-friendly meals for our little one. The buffet spread, featuring breakfast, lunch, high tea, and dinner, was a culinary delight, showcasing perfection in every bite.</p>
      <p>Whether it was enjoying a sunset stroll along the beach, relaxing by the pool, or marveling at the beauty of the location, Charm Resort Hồ Tràm made our timeshare experience truly memorable. We’re eagerly looking forward to our next adventure at Charm Resort Phú Quốc for its unique blend of entertainment and authentic architecture.</p>
    `,
    resort: "Charm Resort Hồ Tràm",
    image:
      "https://images.unsplash.com/photo-1709710223973-bed31e23806d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    heading: "My Charm Resort Hồ Tràm Diary",
    subHeading: "Shared By Văn Thị Huỳnh Hiên on 04 July 2024",
    description: `
      <p>Creating a travel diary for Charm Resort Hồ Tràm is a delightful way to preserve cherished memories. Here’s how our 5-day escape unfolded:</p>
      <p><strong>Day 1: Arrival and First Impressions</strong><br>Morning: Arrived at Charm Resort Hồ Tràm, Hồ Tràm, Vietnam. The check-in was seamless, with the staff offering a warm welcome and a refreshing drink. First impressions were remarkable: modern yet tranquil architecture, breathtaking beachfront views, and the lush ambiance surrounding the resort.</p>
      <p><strong>Day 2: Discovering Hồ Tràm</strong><br>Started the day with an early breakfast featuring local delicacies like fresh Vietnamese spring rolls and tropical fruits. Embarked on a nature walk guided by the resort staff, where we discovered the serene beachfront and vibrant flora.</p>
      <p><strong>Day 3: Adventure and Relaxation</strong><br>After breakfast, ventured on an adventurous ATV ride along the coastal trails organized by the resort’s travel desk. The views and adrenaline were unforgettable! Unwound with a rejuvenating spa session, indulging in a traditional Vietnamese massage with herbal oils.</p>
      <p><strong>Day 4: Cultural Immersion</strong><br>Guided visit to a nearby craft village, interacting with artisans and exploring traditional pottery and textile-making. Returned to the resort for an enchanting musical evening featuring traditional instruments.</p>
      <p><strong>Day 5: Departure</strong><br>Enjoyed a leisurely breakfast before taking one last stroll around the resort to soak in its charm. The check-out process was smooth, and the staff sent us off with warm smiles and a thoughtful parting gift.</p>
      <p>Charm Resort Hồ Tràm turned our holiday into an extraordinary journey, and we can’t wait to plan our next stay at Charm Resort Đà Lạt for its unique cultural charm.</p>
    `,
    resort: "Charm Resort Hồ Tràm",
    image:
      "https://images.unsplash.com/photo-1685714628080-356a7cddcf66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const itineraryMenuItems: MenuItemProps[] = [
  {
    title: "When and Where",
    icon: "https://img.icons8.com/ios-filled/100/00509d/where.png",
    link: "/search",
  },
  {
    title: "Explore on Map",
    icon: "https://img.icons8.com/ios-filled/100/00509d/world.png",
    link: "/mapsearch",
  },
  {
    title: "Pathfinder",
    icon: "https://img.icons8.com/ios-filled/100/00509d/compass--v2.png",
    link: "/pathfinder",
  },
  {
    title: "Seasonal Calendar",
    icon: "https://img.icons8.com/ios-filled/100/00509d/wintertime.png",
    link: "/session_chart",
  },
];

export const ourResortMenuItems: MenuItemProps[] = [
  {
    title: "Bắc Bộ",
    icon: "https://img.icons8.com/ios-glyphs/100/00509d/mountain.png",
    link: "/our_resorts?filter=north",
  },
  {
    title: "Trung Bộ",
    icon: "https://img.icons8.com/ios-filled/100/00509d/city.png",
    link: "/our_resorts?filter=central",
  },
  {
    title: "Nam Bộ",
    icon: "https://img.icons8.com/ios-filled/100/00509d/island-on-water.png",
    link: "/our_resorts?filter=south",
  },
  {
    title: "International",
    icon: "https://img.icons8.com/ios-filled/100/00509d/world.png",
    link: "/our_resorts?filter=south",
  },
];

export const privilegesMenuItems: MenuItemProps[] = [
  {
    title: "Weekend Escapes",
    icon: "https://img.icons8.com/ios-filled/100/00509d/expedition-backpack.png",
    link: "/privilegs?section=weekend%20escapes",
  },
  {
    title: "Holidays Plans",
    icon: "https://img.icons8.com/fluency-systems-filled/100/00509d/sunbathe.png",
    link: "/privilegs?section=holidays%20plans",
  },
  {
    title: "Festive Gateways",
    icon: "https://img.icons8.com/ios-filled/100/00509d/festival.png",
    link: "/privilegs?section=festive%20gateways",
  },
  {
    title: "Global Hotel Network",
    icon: "https://img.icons8.com/fluency-systems-filled/100/00509d/worldwide-location.png",
    link: "/privilegs?section=global%20hotel%20network",
  },
  {
    title: "Domestic Hotel Stays",
    icon: "https://img.icons8.com/ios-filled/100/00509d/bed.png",
    link: "/privilegs?section=domestic%20hotel%20stays",
  },
];
