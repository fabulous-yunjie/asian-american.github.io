const DATA = [
  {
    year: '1790',
    title: '<h3>The Naturalization Act of 1790</h3> limited naturalization to immigrants who were "free white person" which excluded Native Americans, indentured servants, slaves, free blacks and later Asians.',
    image: 'https://historythings.com/wp-content/uploads/2017/01/usconstitution2-1024x586.png'
  },
  {
    year: '1850',
    title: '<h3>First Wave</h1>The first wave occurred to fill demands for labor primarily on the West Coast during the California Gold Rush.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/The_Chinese_Must_Go_-_Magic_Washer_-_1886_anti-Chinese_US_cartoon.jpg/440px-The_Chinese_Must_Go_-_Magic_Washer_-_1886_anti-Chinese_US_cartoon.jpg'
  },
  {
    year: '1917',
    title: '<h3>Exclusion era</h3> The prohibitions of Chinese and Japanese immigration were consolidated and the exclusion was expanded to Asia as a whole in the Asiatic Barred Zone Act The Immigration Act of 1924 introduced national origin quotas for the entire Eastern Hemisphere, and barred the immigration of "aliens ineligible for citizenship.',
    image: 'https://www.historybeyond.com/wp-content/uploads/2019/05/1917-image-700px.jpg'
  },
  {
    year: '1950s',
    title: '<h3>Phasing out of exclusionary</h3>The McCarran–Walter Act of 1952, which repealed the remnants of the "free white persons" restriction of the Naturalization Act of 1790, permitting Asian and other non-white immigrants to become naturalized citizens.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/TRUMANLUCECELLER.jpg/220px-TRUMANLUCECELLER.jpg'
  },
  {
    year: '1965',
    title: '<h3>New Waves of Asian Immigration</h3>Immigration and Nationality Act Amendments of 1965 eliminates racial/nationality-based discrimination in immigration quotas',
    image: 'https://i.ytimg.com/vi/4iWPLfTL7Z0/hqdefault.jpg'
  },
  {
    year: '1982',
    title: '<h3>Murder of Vincent Chin</h3>Vincent Chin, a Chinese American, was beaten to death in Highland Park, Michigan near Detroit. His murder became a rally point for Asian Americans. Vincent Chin\'s murder is often considered the beginning of a pan-ethnic Asian American movement. ',
    image: 'https://sampan.org/wp-content/uploads/2020/03/unnamed.jpg'
  },
  {
    year: '1992',
    title: '<h3>Asian Pacific American Heritage Month</h3>May was officially designated as Asian-Pacific American Heritage Month two years later',
    image: 'http://penguinrandomhouselibrary.com/wp-content/uploads/2018/05/Asian-Pacific-Heritage-Month.png'
  },
  {
    year: '2010-',
    title: '<h3>Immigration by Employment</h3>Immigration from Asia surpassed immigration from Latin America.<br> Many of these immigrants are recruited by American companies from college campuses in India, China, and South Korea.',
    image: 'https://shrm-res.cloudinary.com/image/upload/c_crop,h_1794,w_4183,x_0,y_1680/w_auto:100,w_2100,h_900,q_auto,f_auto/v1/Magazine/SHRM_Re-use_Immigration2_kspdep'
  },
];

if(document.getElementById('timeline')) {
  let timeline = new Timeline('timeline', DATA);
  timeline.init();
}
