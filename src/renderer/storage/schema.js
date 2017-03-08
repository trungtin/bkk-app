export const file = {
  'name': 'Storage/file schema',
  'description': 'Describe book file path',
  'type': 'object',
  version: 0,
  'properties': {
    'book_title': {
      'type': 'string',
      ref: 'book'
    },
    'filePath': {
      type: 'string',
      'primary': true
    },
    'fileExt': {
      type: 'string'
    },
    lastTimeOpen: {
      type: 'date'
    },
    publicationDate: {
      type: 'date'
    },
    isbn: {
      type: 'string',
      unique: true
    }
  },
  'required': []
}

export const book = {
  'name': 'Book schema',
  description: 'Describe specific book',
  'type': 'object',
  version: 0,
  properties: {
    'title': {
      type: 'string',
      index: true
    },
    author: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        }
      }
    },
    tags: {
      type: 'array',
      uniqueItems: true,
      item: {
        type: 'string'
      }
    },
    description: {
      type: 'string'
    }
  }
}
