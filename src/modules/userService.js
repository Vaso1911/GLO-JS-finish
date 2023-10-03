export class UserService {
  async fetchData(url, options) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error('Произошла ошибка при запросе');
      }
      return res.json();
    } catch (error) {
      console.error(error);
      throw new Error('Произошла ошибка, данных нет!');
    }
  }

  async getUsers() {
    return await this.fetchData('http://localhost:1001/users');
  }

  async addUser(user) {
    return await this.fetchData('http://localhost:1001/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  async removeUser(id) {
    return await this.fetchData(`http://localhost:1001/users/${id}`, {
      method: 'DELETE',
    });
  }

  async changeUser(id, data) {
    return await this.fetchData(`http://localhost:1001/users/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  async getUser(id) {
    return await this.fetchData(`http://localhost:1001/users/${id}`);
  }

  async editUser(id, user) {
    return await this.fetchData(`http://localhost:1001/users/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  async filterUsers(filterOption) {
    return await this.fetchData(`http://localhost:1001/users?${filterOption}=true`);
  }

  async getSortUsers(sortOption) {
    return await this.fetchData(`http://localhost:1001/users?_sort=${sortOption.name}&_order=${sortOption.value}`);
  }

  async getSearchUsers(str) {
    return await this.fetchData(`http://localhost:1001/users?name_like=${str}`);
  }
}
