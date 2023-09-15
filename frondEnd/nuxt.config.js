module.exports = {
  /*
  ** Headers of the page
  */
   // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
   // SSR: https://nuxtjs.org/docs/features/rendering-modes
  ssr: false,
  head: {
    title: 'FinSight',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.ico' },

    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/assetsAdmin/backend/assets/js/app.js",
        type: "text/javascript"
      },
      // {
      //   src:
      //     "/assetsAdmin/backend/bootstrap/js/bootstrap.min.js",
      //   type: "text/javascript"
      // },
      // {
      //   src:
      //     "/assetsAdmin/backend/bootstrap/js/bootstrap.js",
      //   type: "text/javascript"
      // },
      // {
      //   src:
      //     "/assetsAdmin/backend/bootstrap/js/popper.min.js",
      //   type: "text/javascript"
      // },
      // {
      //   src:
      //     "/assetsAdmin/backend/assets/js/apps/contact.js",
      //   type: "text/javascript"
      // },
    ]
  },
  generate: {
    fallback: true //or true
  },

  /*
  ** Customize the progress bar color
  */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: false, // true causes duplicate css
    splitChunks: {
      layouts: true
    },
    postcss: null,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      
    },
 
  },

  modules: ['@nuxtjs/color-mode','@nuxtjs/dayjs'],
  dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    defaultTimeZone: 'Asia/Tokyo',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },
  buildModules: ["@nuxtjs/svg",'@nuxtjs/moment'],
  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
    },
    fileLoader: {
        // file-loader options
    }
  },
  recaptcha: {
    siteKey: '6Lf4oewaAAAAAL1stYH3kUHgz3KbzgW3r1ZrB4pp',
      size: 'invisible',
      hideBadge: false,
      version: 3 ,  
      action: 'contact'
  },
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    'vue-sweetalert2/nuxt', 
    '@nuxtjs/recaptcha',
    ['nuxt-vuex-localstorage', { mode: 'debug', localStorage: ['localStorage']}],
    'cookie-universal-nuxt',    
  ],
  plugins: [
    { src: '~plugins/myplugin', ssr: false },
    // { src : '~/plugins/vue-apexchart.js', ssr : false },
    { src: '~/plugins/setLanguage.js', ssr : false },
    
   
  ],

  i18n: {
    locales: ['en', 'vn'],
    defaultLocale: 'vn',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {"language": "EN",
          "header": {
            "home": "home",
            "news": "news",
            "playground": "playground",
            "KeywordAnalytics": "Keyword Analytics",
            "contacts": "contacts",
            "overallAnalytics":"Overall Analytics"
      
          },
          "sidebar": {
            "home": "HOME",
            "news": "NEWS",
            "playground": "PLAYGROUND",
          
            "KeywordAnalytics": "KEYWORD ANALYTICS",
            "overallAnalytics":"OVERALL ANALYTICS",
            "Documents": "Documents",
            "Information": "Information",
            "Additionaldocs": "Additional docs",
            "Pricing": "Pricing",
            "Downloads": "Downloads",
            "Email": "Email",
            "Phonenumbers": "Phone numbers",
            "Language": "Language",
            "contacts": "contacts"
          },
          "body": {
            "home": {
              "firstdesHeader" :"Vietnamese Financial News Analysis",
              "desHeader": "Finance at your fingertips with FINSIGHT.",
              "new": "NEWS",
              "featured": "Featured",
              "News": "News",
              "map": "MAP",
              "information": "Information",
              "Area": "Area",
              "service": "SERVICE",
              "Other": "Other",
              "Services": "Services",
              "viewAll": "View All",
              "services1": "WATER CYCLE MONITORING",
              "desServices1": "A dashboard allow you to monitoring water information and see data analytics.",
              "services2": "LIVE CAMERA MONITORING",
              "desServices2": "Browsing live cameras installed in various places around the world.",
              "services3": "SURFACE WATER FLOW SIMULATION",
              "desServices3": "You can run surface water flow simulation with TeTTo application any where.",
              "launch": "Launch",
              "desServices1":"Ease to Track",
              "desServices2":"Analytics Financial News",
              "desServices3":"You can see overall analysis and key word analysis.",
              "bigData": "Big Data",
              "sentiment" :"Sentiment Analysis",
              "keywordExtract":"Keyword Extract",
                  },
            "news": {
              "Categories": "Categories",
              "Archive": "Archive",
              "Tags": "Tags",
              "Tagais": "AI Tags",
              "Relatednews": "Related news",
              "SourceLink": "Source Link",
              "desContact1": "How we can help you!",
              "desContact2": "Apply AI foi Financial news",
              "Contactus": "Contact Us",
              "Back": "Back",
              "Next": "Next",
              "Positive" :"Positive",
              "Neutral" :"Neutral",
              "Negative" :"Negative",
              "page": "Source Page",
                  },
            "playground": {},
            "keyword": {
              "keywordAnalytics": "Keyword Analytics",
              "ResultSearch": "Google Search",
              "Search": "Search...",
              "KeywordSearch":" Keyword Search",
              "news":"Related News",
              "OverallAnalytics":"Overall Analytics",
              "wordCloud":"WORD CLOUD",
              "topKeyword":"TOP 25 KEYWORDS",
              "overviewKeyword": "OVERVIEW KEYWORD",
              "KeywordByCategory": "KEYWORD BY CATEGORY",
              "keyword":"Keyword",
              "totalKeyword":"TOTAL KEYWORD",
              "loading":"Loading",
              "keywordTreeMap":"KEYWORD TREEMAP",
              "keywordOverTime":"KEYWORD OVER TIME",
              "percentKeyword":"Percent Keyword",
              "messeage":"Sorry, we couldn't find any articles that match your selection",
              "messeageSearch" :"Sorry, we couldn't find any keyword that match your input",
              "lineChart":"Statistics By TimeLine",
              "donutChart": "Sentiment Rate",
              "barChart" : "Statistics By Source",
                  },
            "contact": {
              "contact":"Contact",
              "title":"Get in touch !",
              "officeTokyo":"Office Tokyo",
              "sendMessage":"Send Message",
              "yourName":"Your Name",
              "yourEmail":"Your Email",
              "yourPhone":"Your Phone",
              "yourQuestion":"Your Question",
              "yourComment":"Your Comment",
              "subject":"Subject",
              "text":"Open: 9:00 AM - 6:00 PM",
              "viewon": "View on Google map"
                  }
          },
          "footer": {
            "location": "Location",
            "phone": "Phone",
            "email": "Email",
            "openningHours": "Openning hours",
            "mainMenu": "Main menu",
            "aboutUs": "About us",
            "pricingplan": "Pricing plan",
            "Elements": "Elements",
            "Team": "Team",
            "Warehouse": "Warehouse",
            
            "Careers": "Careers",
            "Calculator": "Calculator",
            "Sitemap": "Site map",
            "Services": "Services",
            "Contact": "Contact",
            "FAQ": "FAQ",
            "Newslatter": "News latter",
            "StayTunedForOurLatestNews": "Stay tuned for our latest news",
            "Allrightsreserved": "Copyright OYO Corporation",
            "Termsandconditions": "Terms and conditions",
            "privacyPolicy": "Privacy policy",
            "cookies": "Cookies",
            "Emailaddress": "Email address"
          }
  }, 
        vn:  {
          "language": "VN",
          "header": {
            "home": "Trang chủ",
            "news": "Tin tức",
            "playground": "PlayGround",
            "KeywordAnalytics": "Phân tích từ khóa",
            "contacts": "Liên hệ",
            "overallAnalytics":"Phân tích chung"
          },
          "sidebar": {
            "home": "Trang chủ",
            "news": "Tin tức",
            "playground": "playground",
            "KeywordAnalytics": "Phân tích từ khóa",
            "overallAnalytics":"Phân tích chung",
            "Documents":"Tài liệu",
            "Information":"Thông tin",
            "Additionaldocs":"Bài viết thêm",
            "Pricing":"Pricing",
            "Downloads":"Tải xuống",
            "Email": "Email",
            "Phonenumbers": "Số điện thoại",
            "Language":"Ngôn ngữ",
            "contacts": "Liên hệ"
          },
          "body": {
            "home": {
              "firstdesHeader" :'Phân tích tin tức tài chính',
              "desHeader":"Tài chính trong tầm tay với FINSIGHT",
              "new": "new",
              "featured": "featured",
              "News": "News",
              "map": "map",
              "information": "information",
              "Area": "Area",
              "service": "service",
              "Other": "Other",
              "Services": "Services",
              "viewAll": "Xem Thêm",
              "services1": "services1",
              "desServices1":"Dễ Dàng Theo Dõi",
              "desServices2":"Phân tích tin tức tài chính",
              "desServices3":"Bạn có thể xem phân tích chung về thị trường và cho tên công ty, tên người",
              "bigData": "Dữ liệu lớn",
              "sentiment" :"Phân tích cảm xúc",
              "keywordExtract":"Trích xuất từ khóa", 
              "services2": "services2",

              "services3": "services3",
   
              "launch": "launch",
              
            },
            "news": {
              "Categories": "Nhóm Ngành",
              "Archive": "Tháng năm",
              "Tags": "Từ Khóa",
              "Relatednews": "Tin tức liên quan",
              "SourceLink": "Nguồn Link",
              "desContact1": "Tôi có thể giúp gì cho bạn!",
              "desContact2": "Ứng dụng AI trong tài chính",
              "Contactus": "Liên hệ",
              "Back": "Quay lại",
              "Next": "Tiếp theo",
              "Positive" :"Tích cực",
              "Neutral" :"Trung tính",
              "Negative" :"Tiêu cực",
              "page": "Nguồn trang",
            },
            "playground":{
        
            },
            "keyword": {
              "keywordAnalytics": "Phân tích từ khóa",
              "ResultSearch": "Google Search",
              "Search": "Tìm kiếm ...",
              "KeywordSearch":"Tìm kiếm từ khóa",
              "new":"Tin tức liên quan",
              "OverallAnalytics":"Phân tích chung",
              "wordCloud":"WORD CLOUD",
              "topKeyword":"TOP 25 Từ Khóa",
              "overviewKeyword": "OVERVIEW KEYWORD",
              "KeywordByCategory": "Từ Khóa theo Nhóm Ngành",
              "keyword":"Từ Khóa",
              "totalKeyword":"Tổng số Từ Khóa",
              "loading":"Loading",
              "keywordTreeMap":"KEYWORD TREEMAP",
              "keywordOverTime":"Từ Khóa theo thời gian",
              "percentKeyword":"Tỉ lệ Từ khóa",
              "messeage":"Xin lỗi, Chúng tôi không tìm thấy bài bài nào",
              "messeageSearch" :"Xin lỗi, Chúng tôi không tìm thấy từ khóa đó",
              "lineChart":"Thống kê theo thời gian",
              "donutChart": "Tỉ lệ cảm xúc",
              "barChart" : "Thống kê theo nguồn",
                  },
            "contact": {
              "contact":"Liên hệ",
              "title":"Liên hệ",
              "officeTokyo":"Office Tokyo",
              "sendMessage":"Gửi tin nhắn",
              "yourName":"Tên",
              "yourEmail":"Email",
              "yourPhone":"Điện thoại",
              "yourQuestion":"Câu hỏi",
              "yourComment":"Nhận xét",
              "subject":"Subject",
              "text":"Giờ mở cửa: 9:00 AM - 6:00 PM",
              "viewon": "Xem trên Google map"
                  }
          },
          "footer": {
            "location": "Địa chỉ",
            "phone": "Số điện thoại",
            "email": "Email",
            "openningHours": "Giờ mở cửa",
            "mainMenu": "Trang chính",
            "aboutUs": "AboutUs",
            "pricingplan": "Kế hoạch",
            "Elements": "Elements",
            "Team": "Team",
            "Warehouse": "Warehouse",
            "Contact": "Liên hệ",
            "Careers": "Thành công",
            "Calculator": "Calculator",
            "Sitemap": "Sitemap",
            "Services": "Dịch vụ",
            "FAQ": "FAQ",
            "Newslatter": "Newslatter",
            "StayTunedForOurLatestNews": "StayTunedForOurLatestNews",
            "Allrightsreserved": "Copyright finsight Corporation",
            "Termsandconditions": "Termsandconditions",
            "privacyPolicy": "privacyPolicy",
            "cookies": "cookies",
            "Emailaddress": "Emailaddress"
          }
        }
      }
    }
  }
}

