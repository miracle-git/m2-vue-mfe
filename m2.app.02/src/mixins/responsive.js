import { EVENT_BUS_KEYS } from 'config/app.conf'

export default {
  created() {
    this.$bus.$on(EVENT_BUS_KEYS.resize, screenWidth => {
      this.updateLayout(screenWidth)
    })
  },
  mounted() {
    this.updateLayout(document.body.clientWidth)
  },
  methods: {
    updateLayout(screenWidth) {
      const { mini, small, large } = this.gridLayout.search
      if (screenWidth < 1200) {
        this.searchLayout = mini
      } else if (screenWidth >= 1200 && screenWidth < 1800) {
        this.searchLayout = small
      } else if (screenWidth >= 1800) {
        this.searchLayout = large
      }
    }
  }
}
