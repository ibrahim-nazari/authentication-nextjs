
import connectDB from "../../middleware/db";
import Post from "../../model/post"

const handler = async (req, res) => {
    console.log("req **************", req.query);
    const { id } = req.query;
    const responseData = () => {
        if (id) {
            Post.findOne({ _id: id }, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        } else {
            Post.find({}, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    };
    if (req.method === "POST") {
        const postData = req.body;
        console.log("post data****", postData);
        try {
            let post = new Post(postData);
            var saved = await post.save();
            console.log("created successfully");
            return res.status(201).send(saved);
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message);
        }
    } else if (req.method == "PUT") {
        Post.findByIdAndUpdate(
            req.query.id,
            req.body,
            { new: true },

            (err, saved) => {
                if (err) return res.status(500).send(err);
                console.log("update success fully");
                return res.status(201).send(saved);
            }
        );
    } else if (req.method == "DELETE") {
        //if(req.query.image !=""){fs.unlinkSync("./public/"+req.query.image);}
        Post.remove({ _id: req.query.id }, function (err) {
            if (!err) {
                console.log("removed success");
                //responseData();
            } else {
                console.log(err);
                console.log("errors");
            }
        });
    } else {
        responseData();
    }
};

export default connectDB(handler);

