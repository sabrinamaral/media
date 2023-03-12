function PhotosListItem({ photo }) {
  return (
    <div>
      <img className="h-20 w-20" src={photo.url} alt="randon pic"></img>
    </div>
  );
}

export default PhotosListItem;
