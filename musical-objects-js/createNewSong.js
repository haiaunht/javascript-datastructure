let createNewSong = (title, characters = [], length) => {
  let songObject = {
    title,
    characters,
    length,
  };
  return songObject;
};

export default createNewSong