const {Schema, Types} = require('mongoose');
const getFormatDate = require('../utils/getFormattedDate');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: getFormatDate,
      },
    },
    {
      toJSON: {
        getters: true,
      },
      _id: false,
    },
);

reactionSchema.path('reactionId');

module.exports = reactionSchema;
