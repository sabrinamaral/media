import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line
  }, []);

  return <div>UsersList</div>;
};

export default UsersList;
