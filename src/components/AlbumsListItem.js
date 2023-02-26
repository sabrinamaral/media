import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <div className="flex flex-row items-center">
      <Button
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
        className="border-none mr-2"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album.
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
