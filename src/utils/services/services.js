//get method
export default async function getMethodCall(url) {
  try {
    const response = await fetch(url, { redirect: "follow", method: "GET" });
    return response;
  } catch (error) {
    return error;
  }
}
