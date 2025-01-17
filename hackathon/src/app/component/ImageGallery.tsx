// import styles from "../styles/ImageGallery.module.css";

const ImageGallery = () => {
  const images = [
    "/img1.png",
    "/images/sofa2.jpg",
    "/images/sofa3.jpg",
    "/images/sofa4.jpg",
  ];

  return (
    <div className='gallery'>
      <div className='thumbnails'>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Thumbnail ${index}`} />
        ))}
      </div>
      <div className='mainImage'>
        <img src="/images/sofa1.jpg" alt="Asgaard Sofa" />
      </div>
    </div>
  );
};

export default ImageGallery;
