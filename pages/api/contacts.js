// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import contacts from "../../data/contacts";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(contacts);
      break;
  }
};

export default handler;
