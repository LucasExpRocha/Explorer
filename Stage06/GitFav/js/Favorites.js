export class Github {
    static search(username) {
        const endpoiont = `https://api.github.com/users/${username}`

        return fetch(endpoiont)
                .then(req => req.json())
                .then(({login, name, public_repos, followers}) => ({
                    login,
                    name,
                    public_repos,
                    followers,
                }))
    }
}

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load()
    }

    load () {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites-entry:')) || [];
    }

    save () {
        localStorage.setItem('@github-favorites-entry:', JSON.stringify(this.entries))

    }

    async add () {
        const nameFavorite = document.querySelector("#input-search").value
        const userExists = this.entries.find(entry => entry.login === nameFavorite)

        if (userExists) return alert("User already exists! Please select a different")

        try {
            const githubUser = await Github.search(nameFavorite)
            if (githubUser.login === undefined) {
                throw new Error(`No user found for ${nameFavorite}`)
            }
            this.entries = [githubUser, ...this.entries]
            this.updateTable()
            this.save()
            } catch (err) {
                alert(err)
            }
    }

    delete (user) {
        const filtered = this.entries.filter(entry => entry.login !== user.login);

        this.entries = filtered
        this.updateTable()
        this.save()

    }

}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        
        this.tbody = document.querySelector('tbody')

        window.document.onkeydown = (evt) => {
            if (evt.key === 'Enter') {
                this.add()
            }
        }

        this.updateTable();
        this.onAdd();
        this.removeNoFav();
    }


    onAdd() {
        const addFavorite = document.querySelector(".search-button")
        addFavorite.addEventListener('click', () => {
            this.add()
        })
    }

    createRow () {
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td class="user">
            <img src="" alt="">
            <a href="http://github.com" target="_blank" class="names">
                <p class="userName">Lucas Rocha</p>
                <p class="userID">/LucasExpRocha</p>
            </a>
        </td>
        <td class="repositories">123</td>
        <td class="followers">123</td>
        <td>
            <button id="remove">Remover</button>
        </td>
        `

        return tr
    }

    updateTable () {
        this.removeTr()

        this.entries.forEach((user) => {
            console.log(user)
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem do ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.userName').textContent = user.name;
            row.querySelector('.userID').textContent = user.login;
            row.querySelector('.followers').textContent = user.followers;
            row.querySelector('.repositories').textContent = user.public_repos;
            
            row.querySelector('#remove').onclick = () => {
                const isOK = confirm('Are you sure you want to remove this user')
                if (isOK) {
                    this.delete(user)
                }
            }
            
            this.tbody.append(row)
        })
        this.removeNoFav()
    }

    removeTr () {
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => tr.remove())
    }

    removeNoFav () {
        const rowsTable = document.querySelectorAll('tbody tr')
        const withoutAnyTr = document.querySelector('.noFav')

        if (rowsTable.length){
            withoutAnyTr.classList.add('invisible')
            return
        }
        withoutAnyTr.classList.remove('invisible')
    }
}