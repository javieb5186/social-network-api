const {model, Schema} = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(e) {
            const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            const result = regex.test(e);
            return result;
          },
          message: 'You must provide a valid email.',
        },
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    },
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
