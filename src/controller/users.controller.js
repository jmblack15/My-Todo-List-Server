
const UserCrontroller = () => {

  const createUser = async (req, res) => {
    res.status(201).json({ message: "User created successfully" });
  }


  return {
    createUser
  };
}

export { UserCrontroller };