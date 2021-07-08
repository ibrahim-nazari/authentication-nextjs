
import { verifyIdToken } from "../../firebaseAdmin";
import connectDB from "../../middleware/db";
import User from "../../model/user"

const handler = async (req, res) => {
    console.log("req **************", req.query);
    const token=req.headers.authorization;
    
    const responseData = (id) => {
        if (id) {
            User.findOne({ _id: id }, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        } else {
            User.find({}, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    };
    if (req.method === "post") {
        
        
        try {
            const user= await verifyIdToken(token);
            User.findOne({ email: user.email }, function (err, result) {
                if (err) {
                    let user = new User(UserData);
            var saved = await user.save();
            console.log("created successfully");
            return res.status(201).send(saved);
                    res.send(err);
                } else {
                   res.status(200).send(result)
                }
            });
            
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message);
        }
    } else if (req.method == "PUT") {
        User.findByIdAndUpdate(
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
        User.remove({ _id: req.query.id }, function (err) {
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

