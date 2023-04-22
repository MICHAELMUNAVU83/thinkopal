import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./Carousel.css";

const slider = [
  {
    title: "Chronic Drugs Medical Scheme(CDMS}",
    description:
      "CDMS is a social enterprise that aims to provide affordable high-quality patient experience to low-income populations through strategic partnerships and interventions in the health delivery value chain. Think Opal supported CDMS in streamlining their go-to-market strategy, partnership and collaboration strategy, and the tactics of deploying their pilot phase.",
    url: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    title: "ICT for Development ",
    description:
      "Think Opal trained and coached the team at ICT for Development, which teaches rural youth how to use technology to create jobs through mobile IT labs, in digital marketing strategies and tools.",
    url: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    title: "Einstein Rising",
    description:
      "Think Opal provided training and mentorship to social entrepreneurs and companies at Einstein Rising business accelerator in Africa covering various topics such as business model canvas, branding and digital marketing.",
    url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },

  {
    title: "Athari Group",
    description:
      "Athari Group offers a unique accelerator program for idea-stage nonprofits, providing a curriculum of courses and the opportunity to win $5,000 seed funding. Think Opal offers consulting and capacity building to participants in areas such as market linkages, partnership & collaboration, and crowdfunding strategies.",
    url: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Flame Lily",
    description:
      "Flame Lily provides reusable sanitary pads to women in marginalized communities. Think Opal supported them with business model development, product-market fit, and marketing and partnership strategies. ",
    url: "https://images.unsplash.com/photo-1589395937921-fddc324ccdd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80",
  },
  {
    title: "The Goblis Foundation",
    description:
      "The Goblis Foundation helps social entrepreneurs by providing them with support, opportunities, and networks. They aim to empower marginalized communities through education, advocacy, capacity building, entrepreneurial training, and creating opportunities for good livelihoods. Think Opal provided training to Goblis Foundation employees in social accountability, leadership, communication skills, networking, and marketing.",
    url: "https://images.unsplash.com/photo-1529688530647-93a6e1916f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    title: "Centre for Science & Technology Innovations",
    description:
      "The Centre for Science & Technology Innovations is a Kenyan-based UNESCO research & development hub that promotes the application of science, technology, & innovation for sustainable development in Kenya & beyond. Think Opal has supported CSTI in digital marketing services to engage with target audiences and leverage digital channels for brand awareness and lead generation.",
    url: "https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
  {
    title: "StartNow",
    description:
      "Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
    url: "https://images.unsplash.com/photo-1527515380735-1ef990fffdc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    title: "Afrikapu ",
    description:
      "Afrikapu empowers disadvantaged artisan entrepreneurs in Africa by connecting them with a worldwide market to make a real contribution in vulnerable areas. Think Opal provided technical assistance in digital marketing, business development, and marketing to support this mission.",
    url: "https://images.unsplash.com/photo-1573496358488-51c188554a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
  {
    title: "AWIEF ",
    description:
      "AWIEF is a pan-African organization that empowers women economically and has a special consultative status with the United Nations. They work to close the gender gap by promoting women's business leadership and entrepreneurship in Africa. Think Opal served as the January 2022 Sales & Marketing expert for the AWIEF Community and continues to support various women-led businesses in the community.",
    url: "https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    title: "AESU ",
    description:
      "The Accelerating Entrepreneurship Support in Universities (AESU) is an educational project partnership between The Open University (UK), Riara University (Kenya), and Ashoka East Africa, funded by the British Council. Think Opal is one of the mentors for the program, providing coaching and mentoring in scaling, marketing, growth strategy and tactics, and execution to three student-led businesses.",
    url: "https://images.unsplash.com/photo-1505243542579-da5adfe8338f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Ashoka ",
    description:
      "Ashoka East Africa creates a community of Change Leaders who transform institutions and cultures to support changemaking for the good of society. Think Opal partnered with Ashoka East Africa to provide consultancy and mentorship support to their fellows in East Africa.",
    url: "https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "We Make Change",
    description:
      "We Make Change connects individuals and employees with social enterprises making change across the world. Think Opal has worked with We Make Change to mentor Kwanale, a gender-based organization based in South Africa.",
    url: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
];

const Carousel = () => {
  return (
    <div className="carousel">
      <div>
        <div className="carousel-content">
          <div className="flex flex-col gap-1">
            <h1 className="text-5xl font-bold">Our Clients</h1>
            <p>Over the years, we've had the pleasure of working </p>
            <p>with some amazing people and organizations,</p>
            <p>
              who have inspired us with their passion, dedication, and
              innovative ideas
            </p>
            <p>Our clients come from a range of sectors, including</p>
            <p>
              agriculture, renewable energy, health, and education, and we're
            </p>
            <p>proud to have played a part in their success</p>
            <p>
              We're committed to continuing to support entrepreneurs in East
            </p>
            <p>Africa and helping them to achieve their goals.</p>
            <button className="bg-white uppercase rounded-md shadow-md shadow-gray-300 mt-4 w-[40%] px-2 py-4 uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Swiper
        className="myswiper"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 4,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map((data) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${data.url})` }}
            className="myswiper-slider"
          >
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <a href={`${data.url}`} target="_blank" className="slider-btn">
                explore
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
