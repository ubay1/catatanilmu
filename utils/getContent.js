/* eslint-disable no-console */
export default async ($content, params, error) => {
  const currentPage = parseInt(params.page)

  const perPage = 5

  const allArticles = await $content('articles').fetch()

  const totalArticles = allArticles.length // ex: total 10

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / perPage)

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalArticles % perPage // misal: 11 % 2 = 1

  console.log('page sejarang = ' + currentPage) // 1
  console.log('page terakhir = ' + lastPage) // 2

  const skipNumber = () => {
    if (currentPage === 1) {
      console.log('skip = 0 karna di page1')
      return 0
    } else if (currentPage === lastPage) {
      if (totalArticles === 10) {
        console.log(`skip = ${totalArticles - 5}, karna semua data berjumlah genap`)
        return totalArticles - 5
      } else {
        console.log(`skip = ${totalArticles - lastPageCount}, karna semua data berjumlah ganjil`)
        return totalArticles - 5
      }
    } else {
      console.log(`skip = ${(currentPage - 1) * perPage}, karna semua data berjumlah ganjil`)
      return (currentPage - 1) * perPage
    }
  }

  const paginatedArticles = await $content('articles')
    .sortBy('published', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  // if (currentPage === 0 || !paginatedArticles.length) {
  //   return error({ statusCode: 404, message: 'No articles found!' })
  // }

  return {
    allArticles,
    paginatedArticles
  }
}
