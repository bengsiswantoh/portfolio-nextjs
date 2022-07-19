// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import personalProjects from "../../data/personalProjects";

const handler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(personalProjects);
      break;
  }
};

export default handler;
