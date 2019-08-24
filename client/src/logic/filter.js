import React from 'react'

export default function filter(obj, e) {
  if (obj.filterKeywords.includes(e.target.id) !== true) {
    return { 
      filterKeywords: [...obj.filterKeywords, e.target.id] 
    }
  }
  else {
      return {
        filterKeywords: obj.filterKeywords.filter((i) => i !== e.target.id)
      }
  }

}
