export const file = {
  'name': 'Storage/file schema',
  'description': 'Describe book file path',
  'type': 'object',
  version: 0,
  'properties': {
    'book_title': {
      'type': 'string',
      'primary': true
    },
    'filePath': {
      type: 'string',
      unique: true
    },
    lastTimeOpen: {
      type: 'date'
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
      primary: true
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
    },
    publicationDate: {
      type: 'date'
    }
  }
}
