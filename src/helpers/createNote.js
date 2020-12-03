function createNote(id, body, title) {
  return {
    [id]: {
      title: title,
      body: body,
      date: Date.now(),
    },
  };
}

export default createNote;
