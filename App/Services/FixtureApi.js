export default {
  getAllSchools: () => {
    return {
      ok: true,
      data: require('../Fixtures/schools.json')
    }
  },
  getAllActivities: () => {
    return {
      ok: true,
      data: require('../Fixtures/activities.json')
    }
  },
  getFeeds: () => {
    return {
      ok: true,
      data: require('../Fixtures/feeds.json')
    }
  }
}
