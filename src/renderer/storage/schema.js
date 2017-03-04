export const storage = {
  'title': 'Storage schema',
  'description': 'Describe book file path',
  'type': 'object',
  'properties': {
    'name': {
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
  'title': 'Book schema',
  description: 'Describe specific book',
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
