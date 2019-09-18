export const searchGifs = jest.fn(() =>
  Promise.resolve([
    {
      images: {
        fixed_height_downsampled: {
          url: 'downsampledUrl'
        },
        original: {
          url: 'originalUrl'
        }
      },
      title: 'First gif',
      id: 'abc123'
    },
    {
      images: {
        fixed_height_downsampled: {
          url: 'downsampledUrl'
        },
        original: {
          url: 'originalUrl'
        }
      },
      title: 'Second gif',
      id: '321cba'
    }
  ])
);
