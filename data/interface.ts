interface Profile {
  name: string
  mode: 'include' | 'exclude'
  filters: Filter[]
}

interface Filter {
  name: string
  rules: Rule[]
}

interface Rule {
  name: string
}

interface KeywordsRule extends Rule {
  keywords: string[]
}
