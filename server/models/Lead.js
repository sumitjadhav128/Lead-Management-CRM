const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    phone: {
      type: String,
      required: true
    },

    company: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "qualified",
        "converted",
        "lost"
      ],
      default: "new"
    },

    notes: String,

    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Lead", leadSchema);