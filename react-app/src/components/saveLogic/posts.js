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
  await axios.post(`${baseUrl}${axiosLink}`, {
    data: coords,
  });

  await axios.post(`${baseUrl}${axiosLinkImage}`, {
    data: image,
  });
}
