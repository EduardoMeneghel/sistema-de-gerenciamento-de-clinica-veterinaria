import React, { useState, useEffect } from 'react';

const NotFound = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const urlImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    urlImage();
  }, []);

  return (
    <>
      <main className="mx-auto w-full max-w-2xl">
        <h1 className="text-4xl font-black text-white text-center mt-16">Not Found</h1>
        <form className="mt-4 text-center">
          <div className="relative z-0 w-full mb-6 group">
            <p className="text-6xl text-white">404</p>
            <img className='mx-auto mt-16 h-64' src={imageUrl} alt="Dog" />
          </div>
        </form>
      </main>
    </>
  );
}

export default NotFound;
