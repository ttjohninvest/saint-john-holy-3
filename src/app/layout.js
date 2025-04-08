"use client";

import "./globals.css";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useMedia } from "react-use";

// Menu
const menuItems = [
  {
    menu: "Saint John's Page",
    //link: "/",
  },
  {
    menu: "About",
    //link: "/about",
  },
  // {
  //   menu: "Product",
  //   link: "/product",
  // },
  // {
  //   menu: "Services",
  //   link: "/services",
  // },
  {
    menu: "You May Contact Me",
    //link: "/contact",
  },
];

export default function RootLayout({ children }) {
  const displayMenu = () => {
    return menuItems.map((item, i) => (
      <div key={i} className="mr-4">
        {item.menu}
      </div>
    ));
  };

  const isDesktop = useMedia("(min-width: 768px)", true);
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <html>
      <body className="mb-16">
        <Head>
          <title>For Jesus Christ</title>
          <meta name="description" content="for church" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <div className="flex flex-col justify-center flex-wrap">
            <div className="opacity-75- sticky top-0 w-full h-16 bg-blue-500 flex flex-row justify-end items-center pr-4">
              by Saint John (circa 2025)
            </div>
            <div className="h-96 lg:h-48">
              <div className="flex flex-row flex-wrap justify-between">
                <div>
                  <Image
                    width="50"
                    height="50"
                    className="m-4 w-48 h-48 rounded-full"
                    src="/mary-with-jesus-2.avif"
                    alt="jesus"
                  ></Image>
                </div>

                <div>
                  <Image
                    width="50"
                    height="50"
                    className="m-4 w-48 h-48 rounded-full"
                    src="/jesus-christ-3.webp"
                    alt="jesus"
                  ></Image>
                </div>
                <div>
                  <Image
                    width="50"
                    height="50"
                    className="m-4 w-48 h-48- rounded-full"
                    src="/jesus-christ-1.webp"
                    alt="cross"
                  ></Image>
                </div>
                <div>
                  <Image
                    width="50"
                    height="50"
                    className="m-4 w-48 h-48 rounded-full"
                    src="/angel2sm.avif"
                    alt="angel"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4- p-4-">
              <div className="h-[100vh]- p-1">{children}</div>

              <div id="section1" className="lg:block lg:h-[100vh] p-4 mt-8">
                <div className="border-b-2">
                  <Link href="/kjv" title="">
                    Holy Bible, KJV
                  </Link>
                </div>
               
                <div className=" bg-orange-500 rounded-md p-2 mb-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.rgj.com/obituaries/rgj051008"
                    title=""
                  >
                    My beloved teacher, Dr. Wishart. Someone worth remembering.
                  </a>
                </div>

                <div className=" bg-orange-500 rounded-md p-2 mb-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.legacy.com/us/obituaries/rgj/name/robert-langsner-obituary?id=22522568"
                    title=""
                  >
                    My beloved teacher, Robert Langsner. My Friend and someone worth remembering.
                  </a>
                </div>
                
                <div className=" bg-orange-500 rounded-md p-2 mb-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.findagrave.com/memorial/172723537/robert-george-langsner"
                    title=""
                  >
                    My beloved teacher, Robert Langsner. My Friend and someone worth remembering.
                  </a>
                </div>

                <div className=" bg-orange-500 rounded-md p-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.hawthorne-dominicans.org/rose-hawthorne"
                    title="A brief biography of Rose Hawthorne, Precious Mother Alphonsa who cared for dying cancer patients free of charge."
                  >
                    Brief Biography of Rose Hawthorne, Precious Mother Alphonsa
                    who cared for dying cancer patients free of charge.
                  </a>
                </div>
                
                <div className=" bg-orange-500 rounded-md p-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.graham-windham.org/"
                    title="The orphanage started by Eliza Hamiltion."
                  >
                    Orphange Started by Eliza Hamiltion, now called the Graham Windham
                  </a>
                </div>
              

                <div className="">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://www.mercyships.org/"
                    title="The mercy ships website"
                  >
                    The mercy ships website
                  </a>
                </div>

                <div className="">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://www.stjude.org/"
                    title="The Saint Jude website"
                  >
                    The Saint Jude website
                  </a>
                </div>

                <div className="">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://missionariesofcharity.org/"
                    title="Mother Teresa of Calcutta missionaries of charity order website"
                  >
                    Mother Teresa of Calcutta missionaries of charity order
                    website
                  </a>
                </div>

                <div className="">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://www.catholiccharitiesusa.org/"
                    title="Catholic Charities, USA website"
                  >
                    Catholic Charities, USA website
                  </a>
                </div>

                <div className="border-b-2">
                  <Link
                    href="https://www.usccb.org/resources/2024cal.pdf"
                    title=""
                  >
                    Liturgical Calendar
                  </Link>
                </div>
                <div className="border-b-2  bg-orange-500 rounded-md p-2  -">
                  <a
                    className="flex flex-wrap"
                    href="https://cmswr.org/"
                    title="Nuns, Council of Major Superiors of Women Religious Website"
                  >
                    Nuns, Council of Major Superiors of Women Religious Website
                  </a>
                </div>
                <div className="">
                  <a
                    className="flex flex-wrap text-blue-500"
                    //href="https://willowy-beijinho-1d8105.netlify.app/"
                    href="https://willowy-strudel-5367d0.netlify.app/"
                    title=""
                  >
                    Precious Nuns and Convents Index
                  </a>
                </div>
                <div className="border-b-2- mb-6- border-b-2- border-gray-500">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://saint-john-holy-3-cs.netlify.app/"
                    title="2025 Catholic Church Services Index"
                  >
                    2025 Catholic Church Services Index
                  </a>
                </div>
                <div className="border-b-2- border-b-2- border-gray-500">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://colleges-index-site.netlify.app/"
                    title="Colleges Index"
                  >
                    Colleges Index
                  </a>
                </div>
                <div className="border-b-2- border-b-2- border-gray-500">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://tools-list-airports-4.netlify.app/"
                    title="tools-list-airports-2"
                  >
                    Compassion on the road
                  </a>
                </div>
                <div className="border-b-2 mb-6-">
                  <Link
                    href="/7-signs-precious-dear-almighty-god-is-helping-you"
                    className="text-blue-500"
                  >
                    7 signs Precious Dear Almighty is helping you
                  </Link>
                </div>
                <div className="border-b-2 mb-6-">
                  <Link href="/seed-how-one-grows" className="text-blue-500">
                    Seed, how one grows
                  </Link>
                </div>
                <div className="mt-4 mb-4 font-bold italic underline">
                  <h1>
                    Catholic Christian Church Saints, Magazines, Websites,
                    Reviews and Movies
                  </h1>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://adoremus.org/"
                    title=""
                  >
                    Adoremus
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.americamagazine.org/"
                    title=""
                  >
                    America Magazine, The Jesuit Review
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://angeluspress.org/products/the-angelus-magazine-international-1-year-subscription"
                    title=""
                  >
                    Angelus Press
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.archphila.org"
                    title=""
                  >
                    Archdiocese of Philadelphia
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://writersdepart.com/uploads/rule-of-st-benedict.pdf"
                    title=""
                  >
                    Monastery. Benedictine Rule for Service
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/saint-bernadette-movie">
                    Bernadette, Saint, Movie
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.biblegateway.com"
                    title=""
                  >
                    Bible Gateway
                  </a>
                </div>

                <div className="border-b-2">
                  <Link href="/cloisteredlife1">
                    Carmelites of the Carmel of Mary
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.gettyimages.com/search/2/image?page=5&phrase=largest%20cathedrals%20in%20the%20world&sort=mostpopular&license=rf%2Crm"
                    title=""
                  >
                    Cathedrals, Beautiful
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/cathedrals-largest">Cathedrals, Largest</Link>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.catholic.org"
                    title=""
                  >
                    Catholic
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.aboutcatholics.com"
                    title=""
                  >
                    Catholics, About
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.usccb.org"
                    title=""
                  >
                    Catholic Bishops, Conference of USA
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://en.wikipedia.org/wiki/List_of_current_cardinals"
                    title=""
                  >
                    Catholic, Cardinals, List of Current, Wikipedia.com
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.catholiccity.com"
                    title=""
                  >
                    Catholic City
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.ncronline.org/news/demographic-forces-beyond-hierarchical-control-are-changing-us-church"
                    title=""
                  >
                    Catholic, Demographic Forces, National Catholic Register
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.catholic.org/encyclopedia"
                    title=""
                  >
                    Catholic Encyclopedia
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.catholicworldreport.com/2025/02/17/diocesan-priestly-vocations-in-the-u-s-a-look-at-the-numbers/"
                    title=""
                  >
                    Catholic, Diocesan Priestly Vocations, a look at the
                    numbers, Catholic World Report
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.ewtn.com"
                    title=""
                  >
                    Catholic EWTN
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.youtube.com/watch?v=bBDjnjP_XK0"
                    title=""
                  >
                    Catholic, Gaza, The Catholic Church there
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://beajesuit.org/"
                    title=""
                  >
                    Catholic, Jesuit, School to become
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://subscribe-renew.com/us-catholic-magazine"
                    title=""
                  >
                    Catholic Magazine USA
                  </a>
                </div>

                <div className="border-b-2">
                  <Link href="/mass-march-15th-2025-father-pio-mentioned">
                    Catholic, Mass March 15th 2025 father Pio mentioned
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.catholic-mass-time.com"
                    title=""
                  >
                    Catholic Mass Time
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.lighthousecatholicmedia.org"
                    title=""
                  >
                    Catholic Media, Light House
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.mycatholic.com"
                    title=""
                  >
                    Catholic, My
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.catholicnews.com"
                    title=""
                  >
                    Catholic News
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.srol.org/assets/Adult-Faith-Formation/Prominent-Catholic-Periodicals.pdf"
                    title=""
                  >
                    Catholic Periodicals, Prominent
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.google.com/search?q=pope+francis+birth+name&oq=Pope+Francis+birth+name&gs_lcrp=EgZjaHJvbWUqDAgAEAAYRhj7ARiABDIMCAAQABhGGPsBGIAEMggIARAAGBYYHjIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMg0IBxAAGIYDGIAEGIoFMg0ICBAAGIYDGIAEGIoFMg0ICRAAGIYDGIAEGIoF0gEJODk3OWowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#vhid=gvd07n-j9Vt94M&vssid=l"
                    title=""
                  >
                    Catholic, Pope Francis, birth name
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://simple.wikipedia.org/wiki/Pope_Francis"
                    title=""
                  >
                    Catholic, Pope Francis, wikipedia.com
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.liguori.org"
                    title=""
                  >
                    Catholic Publication
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.ncregister.com/topic/pope-francis"
                    title=""
                  >
                    Catholic Register, National
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.stmichaelreno.org/"
                    title=""
                  >
                    Catholic, Saint Michael Catholic Church, Stead Nevada
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/ourladyofpeaceinhonolulu">
                    Catholic Shrine Basilica of Our Lady of Peace in Honolulu
                    Hawaii
                  </Link>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.thecatholictelegraph.com/RK=2/RS=ypciuBU4YN77MVuYEMJNf0MVl.c-"
                    title=""
                  >
                    Catholic Telegraph
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.liguori.org/catholic-update"
                    title=""
                  >
                    Catholic Update
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.USCatholic.org"
                    title=""
                  >
                    Catholic, USA
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.catholicworldreport.com"
                    title=""
                  >
                    Catholic World Report
                  </a>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <Link href="/chants-gregorian">Chants, Gregorian</Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.christlife.org"
                    title=""
                  >
                    Christ Life
                  </a>
                </div>

                <div className="border-b-2">
                  <Link href="/christmas-angels">Christmas Angels</Link>
                </div>
                <div className="border-b-2">
                  <Link href="/cloisteredlife-directory">Cloistered Life</Link>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.chnetwork.org"
                    title=""
                  >
                    Coming Home Network
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.usccb.org"
                    title=""
                  >
                    Conference of Catholic Bishops USA
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/saint-marianne-cope">Cope, Marianne, Saint</Link>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.crisismagazine.com"
                    title=""
                  >
                    Crisis Magazine
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.franciscanmedia.org/franciscan-spirit-blog/top-catholic-magazines/"
                    title=""
                  >
                    Franciscan Media
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/gospel-of-john-movie">
                    {" "}
                    Gospel of John, Movie
                  </Link>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <a
                    className="flex flex-wrap"
                    href=" https://www.ourladyofthedesert.org/guesthouse/"
                    title=""
                  >
                    Guest House, Convent in Gobernador New Mexico
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.blueletterbible.org"
                    title=""
                  >
                    Holy Bible, Blue Letter
                  </a>
                </div>
                <div className="border-b-2">
                  <a href="https://www.hprweb.com/" title="">
                    Homiletic Pastoral Review
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://insidethevatican.com/"
                    title=""
                  >
                    Inside The Vatican
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://beajesuit.org"
                    title=""
                  >
                    Jesuits, A place to become a jesuit
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.youtube.com/@SocietyofJesus"
                    title=""
                  >
                    Jesuits, The Society of precious Holy, Blessed Jesus Christ
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://keepthefaith.org/latin-mass/"
                    title=""
                  >
                    Keep the Faith Latin Mass
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.loamagazine.org"
                    title=""
                  >
                    Loa Magazine
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.magnificat.net"
                    title=""
                  >
                    Magnificat
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/saint-mary-mazzarello">
                    Mazzarello, Mary, Saint, Movie
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://writersdepart.com/uploads/rule-of-st-benedict.pdf"
                    title=""
                  >
                    Monastery, benedictine Rule for Service
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/monastery-contemplative-life-today">
                    Monastery, a look at comtemplative life today
                  </Link>
                </div>

                <div className="border-b-2">
                  <Link href="/music-olivera-my-heavenly-father-loves-me">
                    Music, Reese Olivera, I know my Heavenly Father loves me
                  </Link>
                </div>

                <div className="border-b-2">
                  <Link href="/music-jesus-christ-is-holy-forever">
                    Music, Jesus Christ is Holy Forever
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.newadvent.org"
                    title=""
                  >
                    New Advent
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.newoxfordreview.org"
                    title=""
                  >
                    New Oxford Review
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.youtube.com/watch?v=fRtBKz-48NI"
                    title="Nun, day in the life, Video Documentary"
                  >
                    Nun, day in the life, Video Documentary
                  </a>
                </div>
                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <Link href="/nun-interview-with-a-precious-cloistered-nun">
                    Nun, interview with a precious cloistered nun
                  </Link>
                </div>
                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <Link href="/mother-mary-alphonsa-documentary">
                    Nun, Mother Mary Alphonsa Documentary
                  </Link>
                </div>
                <div className="border-b-2">
                  <Link href="/nun-vocation-testimony-of-sister-therese-marie">
                    Nun, Vocation Testimony of Sister Therese Marie
                  </Link>
                </div>
                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <Link href="/nuns-a-glimpse-into-the-beauty-of-a-cloistered-nun">
                    Nuns, a glimpse into the beauty of a cloistered nun,
                    carmelite monastery, indiana
                  </Link>
                </div>
                <div className="border-b-2">
                  <Link href="/nuns-a-life-all-for-God">
                    Nuns, A life all for God Documentary
                  </Link>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <a
                    className="flex flex-wrap"
                    href="https://rosaryhillhome.org/"
                    title="Nuns freely caring for the sick, poor and dying at Rosary hill"
                  >
                    Nuns freely caring for the sick, poor and dying at Rosary
                    Hill
                  </a>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <a
                    className="flex flex-wrap"
                    href="https://heartsawake.org/"
                    title=""
                  >
                    Nuns, Carmelite, Terre Haute Indiana website, please see
                    nuns a glimpse ... above too
                  </a>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <a
                    className="flex flex-wrap"
                    href="https://carmelitesholyface.com/"
                    title=""
                  >
                    Nuns, Carmelites of the Holy Face of Christ website
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://cloisteredlife.com/directory/salt-lake-city"
                    title=""
                  >
                    Nuns, Carmelite, Utah
                  </a>
                </div>

                <div className="border-b-2">
                  <Link href="/nuns-carmelite-slc-utah">
                    Nuns, Carmelite, Utah
                  </Link>
                </div>
                <div className="border-b-2">
                  <a className="flex flex-wrap" href="" title="">
                    Nuns, Carmelite, Cloistered Life, Utah
                  </a>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <a
                    className="flex flex-wrap"
                    href="https://disciplesofthelordjesuschrist.org/"
                    title=""
                  >
                    Nuns, Disciples of the Lord Jesus Christ Website
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/nuns-dominican-sisters-of-saint-cecilia">
                    Nuns, Dominican Sisters of Saint Cecilia Documentary
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.hawthorne-dominicans.org/"
                    title=""
                  >
                    Nuns, Dominican Sisters of Hawthorne caring for poor human
                    doctor incurable cancer patients
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://nashvilledominican.org"
                    title=""
                  >
                    Nuns, Dominican Sisters of Saint Cecilia Website
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://nazareth.org"
                    title=""
                  >
                    Nuns, Sisters of Charity of Nazareth, Website
                  </a>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <Link href="/nuns-passionate">
                    Nuns, Passionists, Cloistered life
                  </Link>
                </div>
                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <Link href="/monks-passionists">
                    Monks, Passionists, Cloistered life
                  </Link>
                </div>
                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <Link href="/nuns-passionate-day-in-the-life">
                    Nuns, Passionists, Day in the Life
                  </Link>
                </div>

                <div className="border-b-2 bg-orange-500 rounded-md p-2">
                  <a
                    className="flex flex-wrap"
                    href="https://passionistnuns.org"
                    title=""
                  >
                    Nuns, Passionists, website
                  </a>
                </div>

                <div className="border-b-2">
                  <Link href="/saint-dominic-monastery">
                    Nuns, Saint Dominic's Monastery Documentary
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap text-blue-500"
                    href="https://www.lindenopnuns.org/"
                    title=""
                  >
                    Nuns, Saint Dominic's Monastery Website (Please submit a
                    financial donation for incomplete projects)
                  </a>
                </div>

                <div className="border-b-2">
                  <Link href="/vocation-to-the-religious-life">
                    Nuns, Vocation to the Religious Life
                  </Link>
                </div>

                <div className="border-b-2">
                  <Link href="/nuns-vocation-testimonies-of-the-franciscan-sisters">
                    Nuns, Vocation Testimonies of the Franciscan Sisters
                  </Link>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.osv.com/"
                    title=""
                  >
                    Our Sunday Visitor
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://fineartamerica.com/shop/canvas+prints/padre+pio?utm_source=bing&utm_medium=cpc&utm_campaign=DSA%20-%20Shop%20Pages&utm_content=Shop%20Pages&msclkid=6979599a49881ff3f6873e2ec5d1a0e7&utm_term=%2Fshop%2F"
                    title=""
                  >
                    Pio, Padre
                  </a>
                </div>

                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://passionist.org/wp-content/uploads/2020/12/Diary_StudyGuide_cp.pdf"
                    title=""
                  >
                    Prayer Guide, Saint Paul of the Cross, 1720
                  </a>
                </div>

                <div className="border-b-2  bg-orange-500 rounded-md p-2  ">
                  <a
                    className="flex flex-wrap"
                    href="https://youtube.com/shorts/CEvWxY-gpbs?feature=shared"
                    title=""
                  >
                    Prison Ministry, A precious person joyfully being baptized,
                    wow
                  </a>
                </div>

                <div className="border-b-2">
                  <Link href="/queens-funeral">
                    Queen of England Funeral Procession
                  </Link>
                </div>

                <div className="border-b-2">
                  <Link href="/saint-rita-of-cascia">
                    Rita, Saint of Cascia
                  </Link>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.stmarysmessenger.com"
                    title=""
                  >
                    Saint Marys Messenger
                  </a>
                </div>
                <div className="border-b-2">
                  <Link href="/sister-servants-of-the-holy-spirit">
                    Sister Servants of the Holy Spirit of Perpetual Adoration
                  </Link>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.spiritdaily.com"
                    title=""
                  >
                    Spirit Daily
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://upfaithandfamily.com/"
                    title=""
                  >
                    Up Faith And Family
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.vaticannews.va/en.html"
                    title=""
                  >
                    Vatican News
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://thewandererpress.com/"
                    title=""
                  >
                    Wanderer Press
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.wau.org"
                    title=""
                  >
                    Word Amoung Us
                  </a>
                </div>
                <div className="border-b-2">
                  <a
                    className="flex flex-wrap"
                    href="https://www.wordonfire.org"
                    title=""
                  >
                    Word On Fire
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* grid */}
          </div>
        </div>
      </body>
    </html>
  );
}
