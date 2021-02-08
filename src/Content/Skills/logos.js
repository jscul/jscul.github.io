import logos from 'assets/skills';

export default Object.keys(logos).map((id) => {
  return {
    id,
    src: logos[id],
  };
});
