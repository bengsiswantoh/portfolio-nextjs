// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import educations from "../../data/educations";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(educations);
      break;
  }
};

export default handler;
