import * as firebase from 'firebase'

export default {
  state: {
    loadedPcJobs: [
      {
        id: '14351435',
        email: '',
        phone: '',
        date: new Date()
      }
    ]
  },
  mutations: {
    setloadedPcJobs (state, payload) {
      state.loadedPcJobs = payload
    },
    createPcJob (state, payload) {
      state.loadedPcJobs.push(payload)
    }
  },
  actions: {
    loadPcJobs ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('pcJobs').once('value')
        .then((data) => {
          const pcJobs = []
          const obj = data.val()
          for (let key in obj) {
            pcJobs.push({
              id: key,
              email: obj[key].email,
              phone: obj[key].phone,
              gaming: obj[key].gaming,
              office: obj[key].office,
              cad: obj[key].cad,
              video: obj[key].video,
              storage: obj[key].storage,
              budget: obj[key].budget,
              pcOrLaptop: obj[key].pcOrLaptop,
              inches: obj[key].inches,
              description: obj[key].description,
              date: obj[key].date
            })
          }
          commit('setLoading', false)
          commit('setloadedPcJobs', pcJobs)
        })
        .catch(
          err => {
            console.log(err)
          }
        )
    },
    createPcJob ({commit}, payload) {
      const job = {
        email: payload.email,
        phone: payload.phone,
        gaming: payload.gaming,
        office: payload.office,
        cad: payload.cad,
        video: payload.video,
        storage: payload.storage,
        budget: payload.budget,
        description: payload.description,
        pcOrLaptop: payload.pcOrLaptop,
        inches: payload.inches,
        date: payload.date.toISOString()
      }
      // const https = require('https')
      // const url = `https://pushfleet.com/api/v1/send?appid=A6JG9K63&userid=UL2RS765&message=${payload.email}&url=computerschmiede-jenbach.at`

      firebase.database().ref('pcJobs').push(job)
        .then((data) => {
          commit('createPcJob', {
            ...job,
            id: data.key
          })
          // key = data.key
          // return key
        })
        // .then(key => {
        //   const filename = payload.file.name
        //   const ext = filename.slice(filename.lastIndexOf('.'))
        //   return firebase.storage().ref('/jobs/' + key + '.' + ext).put(payload.file)
        // })
        // .then(fileData => {
        //   return firebase.storage().ref(fileData.metadata.fullPath).getDownloadURL()
        // })
        // .then((url) => {
        //   return firebase.database().ref('jobs').child(key).update({fileUrl: url})
        // })
        // .then(
        //   https.get(url, res => {
        //     res.setEncoding('utf8')
        //     let body = ''
        //     res.on('data', data => {
        //       body += data
        //     })
        //     res.on('end', () => {
        //       body = JSON.parse(body)
        //       console.log(body)
        //     })
        //   })
        // )
        // .then(
        //   commit('createJob', {
        //     ...job,
        //     fileUrl: fileUrl,
        //     id: key
        //   })
        // )
        .catch(
          err => {
            console.log(err)
          }
        )
    }
  },
  getters: {
    loadedPcJobs (state) {
      return state.loadedPcJobs.sort((jobA, jobB) => {
        return jobA.date < jobB.date
      })
    },
    loadedPcJob (state) {
      return (jobId) => {
        return state.loadedPcJobs.find((job) => {
          return job.id === jobId
        })
      }
    }
  }
}