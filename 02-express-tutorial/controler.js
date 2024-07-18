import data from "./data.js";
const { people } = data;
const userController = {
  getallusers: async (req, res) => {
    res.status(200).json({ success: true, data: people });
  },

  postuser: async (req, res) => {
    const { name } = req.body;
    if (name) {
      res.status(201).json({ success: true, person: name });
    } else {
      res.status(400).json({ success: false, msg: "Please provide name" });
    }
  },

  updateuser: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
      res.status(400).json({ success: false, msg: "there is no person with this id " });
    }
    const newPerson = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPerson });
  },

  deleteuser: async (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
      res.status(400).json({ success: false, msg: "Please provide id" });
    }
    const newPerson = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: newPerson });
  },
};

export default userController;
