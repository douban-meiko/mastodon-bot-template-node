const Masto = require("mastodon");

// main logic goes here
const samplePost = () => {
  return "post content";
}

module.exports = async (req, res) => {
  console.log('processing request');
  const post = samplePost();

  var M = new Masto({
    access_token: process.env["MASTODON_API_KEY"],
    timeout_ms: process.env["MASTODON_TIMEOUT"] || 60 * 1000, // optional HTTP request timeout to apply to all requests.
    api_url: process.env["MASTODON_API_URL"], // optional, defaults to https://mastodon.social/api/v1/
  });
  try {
    M.post("statuses", { status: post, visibility: "direct" });
  } catch (e) {
    console.log(e)
  }
  console.log('request processed');
  res.end();
};