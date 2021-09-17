const Images = [
  "./assets/ImgTrump/trump1.png",
  "./assets/ImgTrump/trump2.png",
  "./assets/ImgTrump/trump3.png",
  "./assets/ImgTrump/trump4.png",
  "./assets/ImgTrump/trump5.png",
  "./assets/ImgTrump/trump6.png",
  "./assets/ImgTrump/trump7.png",
  "./assets/ImgTrump/trump8.png",
  "./assets/ImgTrump/trump9.png",
];

const random = Math.floor(Math.random() * 9);

const getImg = () => Images[random];

export default getImg;
