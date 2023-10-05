import { g, auth, config } from '@grafbase/sdk';


//model for requirements a user a project need to put in, this NEEDS TO BE CHANGED WHEN DOING TICKETS

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(), 
  projects: g.relation(() => Project).list().optional(),S
})

const Project = g.model('Project', {
  title: g.string().length({min: 3}),
  description: g.string(),
  image:g.url().optional(),
  // liveSiteUrl can be the vgg event link:
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})



export default config({
  schema: g
})
