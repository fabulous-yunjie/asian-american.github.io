const DATA = [
  {
    year: '1790',
    title: 'The Naturalization Act of 1790 limited naturalization to immigrants who were "free white person" which excluded Native Americans, indentured servants, slaves, free blacks and later Asians.',
    image: 'https://historythings.com/wp-content/uploads/2017/01/usconstitution2-1024x586.png'
  },
  {
    year: '1850',
    title: 'First Wave',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/The_Chinese_Must_Go_-_Magic_Washer_-_1886_anti-Chinese_US_cartoon.jpg/440px-The_Chinese_Must_Go_-_Magic_Washer_-_1886_anti-Chinese_US_cartoon.jpg'
  },
  {
    year: '1917',
    title: 'Exclusion era',
    image: 'https://www.historybeyond.com/wp-content/uploads/2019/05/1917-image-700px.jpg'
  },
  {
    year: '1950s',
    title: 'Phasing out of exclusionary ',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/TRUMANLUCECELLER.jpg/220px-TRUMANLUCECELLER.jpg'
  },
  {
    year: '1965',
    title: 'New Waves of Asian Immigration',
    image: 'https://i.ytimg.com/vi/4iWPLfTL7Z0/hqdefault.jpg'
  },
  {
    year: '1982',
    title: 'Murder of Vincent Chin',
    image: 'https://sampan.org/wp-content/uploads/2020/03/unnamed.jpg'
  },
  {
    year: '1992',
    title: 'Asian Pacific American Heritage Month',
    image: 'http://penguinrandomhouselibrary.com/wp-content/uploads/2018/05/Asian-Pacific-Heritage-Month.png'
  },
  {
    year: '2010-',
    title: 'Immigration by Employment',
    image: 'https://shrm-res.cloudinary.com/image/upload/c_crop,h_1794,w_4183,x_0,y_1680/w_auto:100,w_2100,h_900,q_auto,f_auto/v1/Magazine/SHRM_Re-use_Immigration2_kspdep'
  },
];

if(document.getElementById('timeline')) {
  let timeline = new Timeline('timeline', DATA);
  timeline.init();
}
