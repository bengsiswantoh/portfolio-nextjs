// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import certifications from "../../data/certifications";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(certifications);
      break;
  }
};

export default handler;
