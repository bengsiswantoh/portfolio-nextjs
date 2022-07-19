// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import about from "../../data/about";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(about);
      break;
  }
};

export default handler;
