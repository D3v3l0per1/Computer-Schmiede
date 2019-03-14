import firebase from 'firebase'

export default {
  state: {
    loadedPrints: [
      {
        id: '1',
        title: 'This is Post One',
        description: 'lorem ispum dolor it samet laldnfgisdfnbg sdnglöisjd ng',
        imageUrl: 'https://vignette.wikia.nocookie.net/austinally/images/1/14/Random_picture_of_shark.png/revision/latest?cb=20150911004230',
        date: new Date()
      },
      {
        id: '2',
        title: 'This Poist Tweo lol',
        description: 'lorem ispum dolor it samet laldnfgisdfnbg sdnglöisjd ng',
        imageUrl: 'https://media1.tenor.com/images/5c406b927ec59a31eb67e3366f3121ef/tenor.gif?itemid=11909469',
        date: new Date()
      },
      {
        id: '3',
        title: 'WTH IS Going',
        description: 'lorem ispum dolor it samet laldnfgisdfnbg sdnglöisjd ng',
        imageUrl: 'https://www.toonboom.com/sites/default/files/opengraph/Random-Zone-D.jpg',
        date: new Date()
      }
    ]
  },
  mutations: {
    setLoadedPrints (state, payload) {
      state.loadedPrints = payload
    },
    createPrint (state, payload) {
      state.loadedPrints.push(payload)
    }
  },
  actions: {
    loadPrints ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('prints').once('value')
        .then(
          (data) => {
            const prints = []
            const obj = data.val()
            for (let key in obj) {
              prints.push({
                id: key,
                title: obj[key].title,
                description: obj[key].description,
                imageUrl: obj[key].imageUrl,
                date: obj[key].date,
                creatorId: obj[key].creatorId
              })
            }
            commit('setLoading', false)
            commit('setLoadedPrints', prints)
          }
        )
        .catch(
          err => {
            console.log(err)
          }
        )
    },
    createPrint ({commit, getters}, payload) {
      const print = {
        title: payload.title,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('prints').push(print)
        .then(
          (data) => {
            key = data.key
            return key
          }
        )
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('/prints/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          return firebase.storage().ref(fileData.metadata.fullPath).getDownloadURL()
        })
        .then((url) => {
          return firebase.database().ref('prints').child(key).update({imageUrl: url})
        })
        .then(
          commit('createPrint', {
            ...print,
            imageUrl: imageUrl,
            id: key
          })
        )
        .catch(
          err => {
            console.log(err)
          }
        )
    }
  },
  getters: {
    loadedPrints (state) {
      return state.loadedPrints.sort((printA, printB) => {
        return printA.date < printB.date
      })
    },
    featuredPrints (state, getters) {
      return getters.loadedPrints.slice(0, 4)
    },
    loadedPrint (state) {
      return (printId) => {
        return state.loadedPrints.find((print) => {
          return print.id === printId
        })
      }
    }
  }
}