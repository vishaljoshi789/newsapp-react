import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Schoolgirl Set On Fire By Stalker Dies, Massive Protests In Jharkhand Town - NDTV",
            "description": "The case has turned political as the victim and the accused are from different communities. Opposition BJP has slammed the Chief Minister for \"neglecting\" women's safety.",
            "url": "https://www.ndtv.com/india-news/prohibitory-orders-in-tense-jharkhand-city-after-schoolgirl-set-on-fire-3296996",
            "urlToImage": "https://c.ndtvimg.com/2022-08/v2ng2na_jharkhand-dumka-accused-650_625x300_29_August_22.jpg",
            "publishedAt": "2022-08-29T14:32:00Z",
            "content": "Chief Minister Hemant Soren announced Rs 10 lakh as monetary compensation for the family of the victim.\r\nNew Delhi: On August 23, a 16-year-old schoolgirl in Jharkhand's Dumka told her father about a… [+3352 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Healio"
            },
            "author": null,
            "title": "Q&A: Recognizing monkeypox in a dermatology setting - Healio",
            "description": "Monkeypox has recently been declared a public health emergency of international concern by the WHO, and more than 15,000 cases have been reported in the United States during the ongoing outbreak.\nSome patients may seek care for the cutaneous manifestations of…",
            "url": "https://www.healio.com/news/dermatology/20220829/qa-recognizing-monkeypox-in-a-dermatology-setting",
            "urlToImage": "https://www.healio.com/~/media/slack-news/dermatology/misc/infographics/2022/08_august/derm0822dommasch_qa_graphic_01.jpg",
            "publishedAt": "2022-08-29T14:12:20Z",
            "content": "We were unable to process your request. Please try again later. If you continue to have this issue please contact customerservice@slackinc.com.Back to Healio\r\nMonkeypox has recently been declared a p… [+6818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Manoj Gupta",
            "title": "Exclusive | Trade with Pak Not Possible until It Stops Cross-border Terror: Indian Govt Sources - News18",
            "description": "Pakistan finance minister Miftah Ismail had said that his government could 'consider importing vegetables and other edible items from India' to facilitate people after recent floods destroyed crops across the country",
            "url": "https://www.news18.com/news/india/exclusive-trade-with-pak-not-possible-until-it-promotes-cross-border-terrorism-indian-govt-sources-5847919.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/08/ap-pakistan-floods-22236553329080-166150145816x9.png",
            "publishedAt": "2022-08-29T14:04:00Z",
            "content": "India is happy that Pakistan is thinking positively about its economy but trade between the two countries is not possible while Islamabad keeps promoting cross-border terrorism, top government source… [+1030 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Child Stolen On Camera At UP Railway Station Found At BJP Leader's Home - NDTV",
            "description": "7-month-old boy stolen from next to sleeping parents at Mathura station found at BJP corporator's house in Firozabad, cracking larger racket, say cops",
            "url": "https://www.ndtv.com/india-news/child-stolen-from-mathura-found-at-bjp-leaders-home-8-of-racket-arrested-wanted-a-son-so-bought-one-3297120",
            "urlToImage": "https://c.ndtvimg.com/2022-08/l43j6s4o_mathura-child-stolen_625x300_27_August_22.jpg",
            "publishedAt": "2022-08-29T13:40:00Z",
            "content": "Video grab from CCTV footage showing the child being taken away.\r\nLucknow: A seven-month-old boy stolen from next to his sleeping parents at the Mathura railway station last week has been found 100 k… [+1636 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Rates of Childhood Liver Disease Are Rapidly Rising – Scientists May Have Discovered Why - SciTechDaily",
            "description": "Prenatal exposure to chemicals in consumer and industrial items is linked to rising liver disease in children. Researchers from Mount Sinai University have discovered a link between prenatal exposure to various endocrine-disrupting chemicals and the rising pr…",
            "url": "https://scitechdaily.com/rates-of-childhood-liver-disease-are-rapidly-rising-scientists-may-have-discovered-why/",
            "urlToImage": "https://scitechdaily.com/images/Liver-Disease-Concept-Illustration.jpg",
            "publishedAt": "2022-08-29T12:31:15Z",
            "content": "About 6 to 10 percent of the pediatric population (birth to 16 years) are affected by non-alcoholic fatty liver disease.\r\nPrenatal exposure to chemicals in consumer and industrial items is linked to … [+5808 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zoom"
            },
            "author": "GT Correspondent",
            "title": "Poco M5 launch date in India set for September 5: Know expected price and specifications here - Times Now",
            "description": "The company also teased the launched the launch of its M-series phone which was tipped to be called the Poco M5.",
            "url": "https://www.timesnownews.com/gadgets/poco-m5-launch-date-in-india-set-for-september-5-know-expected-price-and-specifications-here-article-93857970",
            "urlToImage": "https://static.tnn.in/thumb/msid-93857970,imgsize-100,width-1280,height-720,resizemode-75/93857970.jpg",
            "publishedAt": "2022-08-29T12:29:14Z",
            "content": "SCCL Junior Assistant Admit Card 2022 released on scclmines.com, direct link for Grade II admit card here"
        },
        {
            "source": {
                "id": null,
                "name": "Pragativadi.com"
            },
            "author": "Pragativadi News Service",
            "title": "OnePlus Nord Wired Earphones Debuts In India At Rs 799: Check Details - Pragativadi",
            "description": "New Delhi: OnePlus Nord wired earphones have been launched in India. the latest wired earphones feature 3.5mm wired connectivity for compatibility with devices with a headphone jack. Read on to know more about the latest launched earphone.OnePlus Nor",
            "url": "https://pragativadi.com/oneplus-nord-wired-earphones-debuts-in-india-at-rs-799-check-details/",
            "urlToImage": "https://pragativadi.com/wp-content/uploads/2022/08/FbJiapLUEAARIUC.jpg",
            "publishedAt": "2022-08-29T12:08:44Z",
            "content": "New Delhi: OnePlus Nord wired earphones have been launched in India. the latest wired earphones feature 3.5mm wired connectivity for compatibility with devices with a headphone jack. Read on to know … [+1565 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Pallavi Ghosh",
            "title": "Exclusive | 'Whoever Becomes Cong Chief Will Have to be Rahul Gandhi's Slave, Carry Files': Ghulam Nabi Aza - News18",
            "description": "The Congress has hit back at the veteran leader, saying he revolted only because he wanted a Rajya Sabha seat and wanted to retain the bungalow in South Avenue, in the heart of the national capital",
            "url": "https://www.news18.com/news/politics/now-azad-ghulam-nabis-explosion-shows-rot-within-cong-rattles-party-ahead-of-prez-polls-5844301.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/08/ghulam-nabi-azad-new-166157260316x9.jpg",
            "publishedAt": "2022-08-29T11:59:00Z",
            "content": "Ghulam Nabi Azads explosion, on a day when it finalized the schedule for the partys presidential polls, has rattled the Congress. After much delay, the polls will now be held on October 17.\r\nThe Cong… [+4359 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Reliance Industries AGM 2022: From 5G launch to JioAirFiber, 5 top announcements at Reliance AGM - Hindustan Times",
            "description": "Reliance AGM 2022: Besides announcing the launch of 5G services, Jio AirFiber and ₹75,000 crore investment to expand petrochemical capacity, the annual general meeting witnessed Mukesh Ambani detailing his succession plan.",
            "url": "https://www.hindustantimes.com/business/reliance-agm-2022-mukesh-ambani-5g-launch-date-jioairfiber-qualcomm-101661768666329.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/08/29/1600x900/Mukesh_Ambani_1661768812225_1661768812526_1661768812526.JPG",
            "publishedAt": "2022-08-29T11:38:50Z",
            "content": "Reliance Industries chairman Mukesh Ambani addressed the business giant's annual general meeting. In his third consecutive digital address, the tycoon made several key announcements before the invest… [+2563 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": null,
            "title": "Protests erupt in Karnataka as rape-accused Lingayat seer returns to mutt, says no need to fear - India Today",
            "description": "Shivamurthy Murugha Sharanaru, a Lingayat seer, was detained on Monday after he was booked in a sexual assault case.",
            "url": "https://www.indiatoday.in/india/story/protests-erupt-karnataka-rape-accused-lingayat-seer-returns-to-mutt-1994008-2022-08-29",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Collage_Maker-29-Aug-2022-05.0-647x363.jpeg?ZGsF2PbnftmWnGI4Xlr661qRJTjxtE8w",
            "publishedAt": "2022-08-29T11:27:52Z",
            "content": "Protests have erupted in Karnataka's Chitradurga demanding strict action against a Lingayat seer accused of raping minor girls. Prominent Lingayat mutt seer Shivamurthy Murugha Sharanaru was detained… [+2307 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Newstracklive.com"
            },
            "author": "Yukta Dawe",
            "title": "5 Ways to Keep your Heart healthy - News Track English",
            "description": "These days heart related problems are increasing due to changes in lifestyles, eating patterns and various other reasons. Your heart’s  health is central to overall good health. It’s responsible for pumping nutrient-rich blood throughout your body, it supplie…",
            "url": "https://english.newstracklive.com/news/5-ways-to-keep-your-heart-healthy-sc53-nu352-ta352-1247219-1.html",
            "urlToImage": "https://media.newstrack.in/uploads/lifestyle-health/health-tips/Aug/29/big_thumb/hearthealth_630ca0edd21f8.JPG",
            "publishedAt": "2022-08-29T11:22:24Z",
            "content": "News Track is a leading provider of news, information and entertainment across broadcast television, mobile platforms, digital media and Print media serving consumers and advertisers in strong local … [+273 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "PTI",
            "title": "Opposition leaders slam Jay Shah over 'tricolour video' - The Indian Express",
            "description": "Several Congress leaders slammed Jay Shah, who is Union Home Minister Amit Shah's son.",
            "url": "https://indianexpress.com/article/political-pulse/opposition-leaders-jay-shah-tricolour-video-8119022/",
            "urlToImage": "https://images.indianexpress.com/2022/08/jay.jpg",
            "publishedAt": "2022-08-29T11:17:59Z",
            "content": "Video footage of BCCI secretary Jay Shah appearing to turn down an offer to wave the national flag after India beat Pakistan in a thrilling cricket match at the Asia Cup in Dubai on Sunday has sparke… [+2291 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Xiaomi 13 Ultra could debut globally, hints Lei Jun: What to expect | Mint - Mint",
            "description": "The Chief Executive Officer at Xiaomi, Lei Jun has recently taken to Twitter to share that the next Ultra handset by Xiaomi would be launched globally. This smartphone is expected to be the Xiaomi 13 Ultra.",
            "url": "https://www.livemint.com/technology/gadgets/xiaomi-13-ultra-could-debut-globally-hints-lei-jun-what-to-expect-11661770241417.html",
            "urlToImage": "https://images.livemint.com/img/2022/08/29/600x338/2021-05-12T074358Z_2_LYNXMPEH4B0C8_RTROPTP_3_USA-CHINA-XIAOMI_1624255874031_1661771641713_1661771641713.JPG",
            "publishedAt": "2022-08-29T11:14:33Z",
            "content": "Xiaomi, a Chinese smartphone giant, is all set to launch the next generation Ultra smartphone in the global markets, tweeted a company executive. However, Xiaomi is yet to announce the handset, it is… [+2170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Can We Have 5 Capitals Of India?\": Why Assam Chief Minister Proposed This - NDTV",
            "description": "Assam Chief Minister Himanta Biswa Sarma on Monday proposed five national capitals, one for each zone, to end regional disparity in the country.",
            "url": "https://www.ndtv.com/india-news/5-capitals-of-india-assam-chief-ministers-proposal-to-end-regional-disparity-3296781",
            "urlToImage": "https://c.ndtvimg.com/2022-08/1346v45g_himanta-biswa-sarma-pti_625x300_11_August_22.jpg",
            "publishedAt": "2022-08-29T11:08:12Z",
            "content": "Himanta Biswa Sarma and Arvind Kejriwal have been involved in a Twitter exchange since last week. (File)\r\nGuwahati: Assam Chief Minister Himanta Biswa Sarma on Monday proposed five national capitals,… [+3092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Vivo Y35 launched; this smartphone under 20000 packs 50MP camera, 44W charging support - HT Tech",
            "description": "The Vivo Y35 launched in India with some notable specs such as 50MP camera, 44W charging and much more. Check out this smartphone under 20000 that packs 50MP camera, 44W charging support.",
            "url": "https://tech.hindustantimes.com/mobile/news/vivo-y35-launched-this-smartphone-under-20000-packs-50mp-camera-44w-charging-support-71661769983515.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/08/29/1600x900/Vivo_Y35_1661770130266_1661770147712_1661770147712.PNG",
            "publishedAt": "2022-08-29T10:50:19Z",
            "content": "Vivo has launched a new Y-series smartphone in the Indian market. This smartphone under 20000 offers a number of benefits. The newly launched smartphone is powered by the Qualcomm Snapdragon 680 chip… [+1820 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Artemis 1 launch live: Launch could be delayed due to multiple issues - The Indian Express",
            "description": "Artemis-1 Launch Live, NASA News: NASA's Artemis-1 Moon Rocket countdown has begun for the first mission of the program.",
            "url": "https://indianexpress.com/article/technology/science/artemis-1-launch-live-live-updates-of-nasas-moon-mission-8118210/",
            "urlToImage": "https://images.indianexpress.com/2022/08/Artemis-I-mission-launch-SLS-orion-17082022.jpg",
            "publishedAt": "2022-08-29T10:36:22Z",
            "content": "The Artemis I mission will also carry a host of secondary payloads to Earth orbit, lunar orbit and beyond. Here are the various secondary payloads that will be hitching a ride on the SLS rocket. \r\nEQ… [+1657 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": null,
            "title": "India vs Pakistan Asia Cup match: Natasa Stankovic praises husband Hardik Pandya's impressive performance - Times of India",
            "description": "Actress Natasa Stankovic is all praise for husband Hardik Pandya after India beat Pakistan on Sunday in Asia Cup 2022 in Dubai. Natasa shared a series of pictures and video on her Insta stories. In one she wrote, You are my star', while in another she just wr…",
            "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/india-vs-pakistan-match-in-asia-cup-natasa-stankovic-praises-husband-hardik-pandyas-impressive-performance/videoshow/93854286.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/93854286/size-64622/93854286.jpg",
            "publishedAt": "2022-08-29T10:04:31Z",
            "content": "Actress Natasa Stankovic\r\n is all praise for husband Hardik Pandya\r\n after India beat Pakistan on Sunday in Asia Cup\r\n 2022 in Dubai. Natasa shared a series of pictures and video on her Insta stories… [+460 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Kareena Kapoor And Saif Ali Khan's Monday Began With Badminton At The Pataudi Palace. Watch - NDTV Movies",
            "description": "\"Some Monday sport with the husband... not bad,\" wrote Kareena Kapoor",
            "url": "https://www.ndtv.com/entertainment/kareena-kapoor-and-saif-ali-khans-monday-began-with-badminton-at-the-pataudi-palace-watch-3296495",
            "urlToImage": "https://c.ndtvimg.com/2022-08/ftbgpiko_karena_625x300_29_August_22.jpg",
            "publishedAt": "2022-08-29T09:57:56Z",
            "content": "Saif and Kareena in a still from the video. (courtesy kareenakapoorkhan)\r\nNew Delhi: Kareena Kapoor, who flew out of Mumbai along with husband Saif Ali Khan and their kids Jeh and Taimur over the wee… [+1595 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "Shine Jacob",
            "title": "Kerala tomato flu cases same as HFMD, severity unlikely: Expert - Business Standard",
            "description": "State had reported 82 cases of tomato flu among young children till July 26",
            "url": "https://www.business-standard.com/article/current-affairs/kerala-tomato-flu-cases-same-as-hfmd-severity-unlikely-expert-122082900513_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-08/22/full/1661177690-242.jpg",
            "publishedAt": "2022-08-29T09:07:00Z",
            "content": "Kollam district in southern Kerala has this year reported 1,300 cases of hand foot and mouth disease, prompting at experts to say tomato flu or fever is \"same as\" HFMD.\r\nKollam recorded its first cas… [+2137 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": null,
            "title": "Sonam Kapoor makes 1st appearance after birth of baby boy, attends Kunal Rawal's wedding but with a twist - India Today",
            "description": "Sonam Kapoor welcomed her baby boy on August 20. On August 28, she attended Kunal Rawal and Arpita Mehta's wedding, but there is a twist!",
            "url": "https://www.indiatoday.in/movies/celebrities/story/sonam-kapoor-makes-1st-appearance-after-birth-of-baby-boy-attends-kunal-rawal-s-wedding-but-with-a-twist-1993919-2022-08-29",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/sonam__21_-647x363.png?OWY4_Y8PgPZxfN2vDzICBRe1hCbd5Vjj",
            "publishedAt": "2022-08-29T08:58:03Z",
            "content": "Sonam Kapoor and Anand Ahuja have just welcomed their baby boy and the new parents are spending ample time with their newborn baby. Sonam made her first appearance after the birth of her child on a v… [+1444 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}><NewsItem title={element.title.slice(0, 50)} description={element.description.slice(0, 100)} imageUrl={element.urlToImage} newsUrl={element.url} /></div>
                    })}

                </div>
            </div>
        )
    }
}

export default News