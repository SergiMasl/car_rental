import clientsReviewsArr from "../../fake-back-end/reviews_from_clients.json";

const getClientReviews = () => {
  let num1 = 0;
  let num2 = 0;
  let randomClient1 = {};
  let randomClient2 = {};
  const max = clientsReviewsArr.length;

  function getRandomNumber(max, min) {
    num1 = Math.floor(Math.random() * (max - min)) + min;
    num2 = Math.floor(Math.random() * (max - min)) + min;
    checkNumbrs(num1, num2);
  }

  function checkNumbrs(num1, num2) {
    if (num1 === num2) {
      getRandomNumber(1, 9);
    } else {
      randomClient1 = clientsReviewsArr.find((i) => i.id == num1);
      randomClient2 = clientsReviewsArr.find((i) => i.id == num2);
    }
  }

  getRandomNumber(max, 1);
  return [randomClient1, randomClient2];
};

export default getClientReviews;
