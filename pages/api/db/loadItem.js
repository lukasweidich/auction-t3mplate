import connectDB from "../../../db/connection";
import LoadItem from "../../../db/schemas/loadItemSchema";
connectDB();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    // case "GET":
    //   try {
    //     const loadItemRequests = await LoadItem.find({});
    //     res.statusCode = 200;
    //     res.json({ requests: loadItemRequests });
    //   } catch (error) {
    //     res.statusCode = 404;
    //     res.json({
    //       error: `Could not find any requests. MongoDB: ${error}`,
    //     });
    //   }
    //   break;
    case "POST":
      const { loadItemRequest } = req.body;
      try {
        await LoadItem.create({
          ...loadItemRequest,
        });
        res.statusCode = 204;
        res.end();
      } catch (error) {
        res.statusCode = 409;
        res.json({
          error: `Could not create order. MongoDB: ${error}`,
        });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).send(`Method ${method} not allowed`);
      break;
  }
};
