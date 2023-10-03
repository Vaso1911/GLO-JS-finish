import { render } from "./render"

export const sortUsers = () => {
  const headerSortInChildren = document.getElementById('sort-is-children')
  let isSort = false

  headerSortInChildren.style.cursor = 'pointer'
  // getSortUsers
  headerSortInChildren.addEventListener('click', () => {
    userService.getSortUsers({
      name: 'children',
      value: isSort ? 'asc' : 'desc'
    }).then(users => {
render(users);
    })
isSort = !isSort

  })
}
