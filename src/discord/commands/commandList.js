const commandList = [
  {
    name: 'ping',
    description: 'Hello World',
  },
  {
    name: 'embed',
    description: 'embeded',
    options: [
      {
        name: 'user',
        description: 'Your name',
        required: true,
        type: 3,
      },
      {
        name: 'age',
        description: 'Your age',
        required: false,
        type: 4,
      },
    ],
  },
  {
    name: 'postvideo',
    description: 'Add Guide Video',
    options: [
      {
        name: 'title',
        description: 'Title of guide',
        required: true,
        type: 3,
      },
      {
        name: 'url',
        description: 'Video url',
        required: true,
        type: 3,
      },
    ],
  },
  { name: 'getvideos', description: 'Show all videos' },
];

export default commandList;
