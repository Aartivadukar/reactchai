const likeModel = require("../models/likeModel");
const postModel = require("../models/postModel");

const postLike = async (req, res) => {
  try {
    const { post, userName } = req.body;
    const like = new likeModel({ post, userName });
    const newLike = await like.save();
    const updatelike = await postModel
      .findByIdAndUpdate(post, { $push: { like: newLike._id } }, { new: true })
      .populate("like")
      .exec();

    res.status(200).json({
      success: true,
      data: updatelike,
      massage: "like from user in this post",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errors: error.massage,
      massage: "some server error",
    });
  }
};

const unLikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    const likeDeleted = await likeModel.findOneAndDelete({
      post: post,
      _id: like,
    });

    const updatePost = await postModel
      .findByIdAndUpdate(
        post,
        { $pull: { like: likeDeleted._id } },
        { new: true }
      )
      .exec();

    res.status(200).json({
      success: true,
      data: updatePost,
      massage: "unlike the post",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      errors: error.massage,
      massage: "some server error",
    });
  }
};

module.exports = { postLike, unLikePost };
