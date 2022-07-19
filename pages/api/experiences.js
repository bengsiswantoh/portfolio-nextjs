// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import experiences from "../../data/experiences";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(experiences);
      break;
  }
};

export default handler;
