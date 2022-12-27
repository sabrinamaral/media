import Button from "./Button";
import { removeUser } from "../store";
import { GoTrashcan } from "react-icons/go";
import useThunk from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UserListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-3 border-none"
        loading={isLoading}
        onClick={handleClick}
      >
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting a user...</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UserListItem;
