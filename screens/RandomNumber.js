import listKhodam from './listKhodam';
const getRandomKhodamIndex = () => {
    const randomIndex = Math.floor(Math.random() * listKhodam.length);
    return randomIndex;
  };

  export default getRandomKhodamIndex;