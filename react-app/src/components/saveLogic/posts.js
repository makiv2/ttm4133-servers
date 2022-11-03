import axios from "axios";

const baseUrlFull = window.location.href;
const tempArray = baseUrlFull.split(":");
const baseIpArray = tempArray[1].split("/");
const baseUrl = `http://${baseIpArray[2]}:3002`;

export default async function postData(
  coords,
  image,
  axiosLink,
  axiosLinkImage
) {

 // console.log('image: ', image);


  const responseCoords = await axios
    .post(`${baseUrl}${axiosLink}`, {
      data: coords,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {;
      return error.message;
    });
;

  const responseImage = await axios
    .post(`${baseUrl}${axiosLinkImage}`, {
      data: image,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.message;
    });

  return [responseCoords, responseImage];
}
