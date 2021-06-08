let createNewMusical = (title, composer, numberOfTonys) => {
  let musicalObject = {
    title,
    composer,
    numberOfTonys,
    songs: [],
    addSong(song) {
      this.songs.push(song);
    },
  };
  return musicalObject;
};

export default createNewMusical