import logos from 'assets/logos';

export default Object.keys(logos).map((id) => {
  return {
    id,
    src: logos[id],
  };
});
