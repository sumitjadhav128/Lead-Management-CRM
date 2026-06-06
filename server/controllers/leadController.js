const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
  try {
    console.log("router hit");
    console.log(req.user.id);

    const lead = await Lead.create({ ...req.body, userId: req.user.id});

    res.status(201).json(lead);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getLeads = async (req, res) => {
  try {
    console.log("router hit");
    console.log(req.user.id);
    const { search, status } = req.query;

    let query = {};

    if (status) {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } }
      ];
    }

    console.log("search query");
    
    const sortField = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;

    console.log("after sorting");

    const leads = await Lead.find({
  ...query,
  userId: req.user.id
}).sort({
  [sortField]: order,
});

    console.log("respond send");
    res.json(leads);
  
  } catch (error) {
    console.error("GET LEADS ERROR:", error);
    res.status(500).json(error);
  }
};

exports.updateLead = async (req, res) => {
  try {
   const lead = await Lead.findOneAndUpdate(
  {
    _id: req.params.id,
    userId: req.user.id
  },
  req.body,
  {
    new: true
  }
);

    res.json(lead);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteLead = async (req, res) => {
  try {
   await Lead.findOneAndDelete({
  _id: req.params.id,
  userId: req.user.id
});

    res.json({
      message: "Lead deleted"
    });
  } catch (error) {
    res.status(500).json(error);
  }
};