import * as firebase from 'firebase'

export default {
  state: {
    loadedJobs: [
      {
        id: '14351435',
        email: '',
        phone: '',
        color: '',
        custom_color: '',
        print_quality: '',
        fileUrl: '',
        date: new Date()
      }
    ]
  },
  mutations: {
    setLoadedJobs (state, payload) {
      state.loadedJobs = payload
    },
    createJob (state, payload) {
      state.loadedJobs.push(payload)
    }
  },
  actions: {
    loadJobs ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('jobs').once('value')
        .then((data) => {
          const jobs = []
          const obj = data.val()
          for (let key in obj) {
            jobs.push({
              id: key,
              email: obj[key].email,
              phone: obj[key].phone,
              color: obj[key].color,
              fileUrl: obj[key].fileUrl,
              custom_color: obj[key].custom_color,
              print_quality: obj[key].print_quality,
              date: obj[key].date
            })
          }
          commit('setLoading', false)
          commit('setLoadedJobs', jobs)
        })
        .catch(
          err => {
            console.log(err)
          }
        )
    },
    createJob ({commit}, payload) {
      const job = {
        email: payload.email,
        phone: payload.phone,
        color: payload.color,
        date: payload.date.toISOString(),
        custom_color: payload.custom_color,
        print_quality: payload.print_quality
      }
      let fileUrl
      let key
      firebase.database().ref('jobs').push(job)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.file.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('/jobs/' + key + '.' + ext).put(payload.file)
        })
        .then(fileData => {
          return firebase.storage().ref(fileData.metadata.fullPath).getDownloadURL()
        })
        .then((url) => {
          return firebase.database().ref('jobs').child(key).update({fileUrl: url})
        })
        .then(
          commit('createJob', {
            ...job,
            fileUrl: fileUrl,
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
    loadedJobs (state) {
      return state.loadedJobs.sort((jobA, jobB) => {
        return jobA.date < jobB.date
      })
    }
  }
}