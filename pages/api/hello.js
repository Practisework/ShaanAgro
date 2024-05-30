// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // res.status(200).json({ name: req.method });
  if (req.method == "POST") {
    res.status(200).json({ post: "Poosted" });
  }
}
