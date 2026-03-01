export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type SparkleType = {
  id: string,
  createdAt: number,
  color: string,
  size: number,
  style: any
}

export type TagType = {
  label: string,
  color?: 'primary' | 'secondary'
}

export type SocialLink = {

}

export type Link = {

}

export type Project = {
  name: string,
  description: string,
  image: string,
  tags: TagType[],
  year: number,
  type: string,
  webpage?: string,
  github?: string,
  playStore?: string,
  appStore?: string,
  pubDev?: string,
}

export type WorkExperience = {
  companySlug: string,
  company: string,
  jobTitle: string,
  timeframe: string,
  current?: boolean,
  location: string,
  description: string,
  tags: TagType[]
}

export type BlogArticle = {
  title: string,
  url: string,
  description?: string,
  date?: string,
}