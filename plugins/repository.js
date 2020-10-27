import repository from '~/api/repository'

export default (ctx, inject) => {
  const repositoryWithAxios = repository(ctx.$http)
  const repositories = {
    post: repositoryWithAxios('posts')
  }
  inject('nuxtRepository', repositories.post)
}
