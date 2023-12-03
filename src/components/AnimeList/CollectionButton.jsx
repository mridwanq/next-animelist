'use client';

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const handleCollection = async (event) => {
    const response = await event.preventDefault();
    alert('Nice response');
  };

  return (
    <button onClick={handleCollection} className='px-2 py-2 bg-color-accent'>
      Add To Collection
    </button>
  );
};

export default CollectionButton;
