import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Resturant from "./components/Resturant";

const data = [
  {
    info: {
      id: "53120",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/b51485d0-7879-4fbe-9b88-47d3b4218267_53120.jpg",
      locality: "BEGUR",
      areaName: "Skywards Tech Park, Bangalore",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "17K+",
      promoted: true,
      adTrackingId:
        "cid=29737910~p=1~adgrpid=29737910#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=53120~plpr=COLLECTION~eid=47ad7f02-6a9f-4888-949e-4a5a234096f4~srvts=1749752238333~collid=115117",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-13 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f5165d77-8ae4-4349-a287-9262bdba9639",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-begur-skywards-tech-park-bangalore-rest53120",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12474",
      name: "FreshMenu",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/9c332fc1-6449-468f-9a2a-6941ed8b8564_12474.jpg",
      locality: "1st Phase",
      areaName: "Electronic City",
      costForTwo: "₹250 for two",
      cuisines: [
        "Continental",
        "Chinese",
        "Oriental",
        "Asian",
        "Healthy Food",
        "Fast Food",
        "Indian",
        "Desserts",
      ],
      avgRating: 3.8,
      parentId: "398",
      avgRatingString: "3.8",
      totalRatingsString: "42K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-12 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f5165d77-8ae4-4349-a287-9262bdba9639",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/freshmenu-1st-phase-electronic-city-rest12474",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "727285",
      name: "Litti Heist",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/581a1fc9-9a4b-4d0d-8099-471d93e839bc_727285.jpg",
      locality: "Basapura Village",
      areaName: "Electronic City",
      costForTwo: "₹200 for two",
      cuisines: ["Bihari"],
      avgRating: 4.3,
      parentId: "369080",
      avgRatingString: "4.3",
      totalRatingsString: "4.1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-13 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png",
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f5165d77-8ae4-4349-a287-9262bdba9639",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/litti-heist-basapura-village-electronic-city-rest727285",
      type: "WEBLINK",
    },
  },
];
const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating } = resData[0]?.info;
  console.log(resData);
  return (
    <>
      <div className="res-card">
        <img
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData[0].info.cloudinaryImageId
          }
          className="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{resData[0].info.sla.deliveryTime} mins</h4>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search"></div>
        <div className="res-container">
          {data.map((item) => (
            <ResturantCard resData={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
}
