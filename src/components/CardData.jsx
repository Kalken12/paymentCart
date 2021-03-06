import React from "react";
import CardCreater from "./CardCreater";

//date, logo, heading, subheading, devices, and color as props
const data = [
  {
    date: "28/10/2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    heading: "Amazon Gift",
    subheading: "Pay",
    devices: "Desktop - Mobile",
    color: "orange"
  },
  {
    date: "17 Sep 2020",
    logo: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
    heading: "Apple Gift",
    subheading: "Payment",
    devices: "MacOS - Mobile",
    color: "whitesmoke"
  },
  {
    date: "28/10/2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    heading: "Amazon Gift",
    subheading: "Pay",
    devices: "Desktop - Mobile",
    color: "orange"
  },
  {
    date: "28/10/2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    heading: "Amazon Gift",
    subheading: "Pay",
    devices: "Desktop - Mobile",
    color: "orange"
  },
  {
    date: "17 Sep 2020",
    logo: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
    heading: "Apple Gift",
    subheading: "Payment",
    devices: "MacOS - Mobile",
    color: "whitesmoke"
  },
  {
    date: "28/10/2020",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    heading: "Amazon Gift",
    subheading: "Pay",
    devices: "Desktop - Mobile",
    color: "orange"
  },
  {
    date: "17 Sep 2020",
    logo: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
    heading: "Apple Gift",
    subheading: "Payment",
    devices: "MacOS - Mobile",
    color: "whitesmoke"
  }
];





export default function CardData() {
  return (
    <div>
      { data.map(function (el) {
          return <CardCreater {...el} />;
        })
      }
    </div>
  )
}

