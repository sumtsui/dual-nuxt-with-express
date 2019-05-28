export default function (context) {
  const { store, req } = context

  const userAgent = req ? req.headers[ 'user-agent' ] : navigator.userAgent

  context.isMobile = /mobile/i.test(userAgent)
  store.commit('setUA', context.isMobile ? 'mobile' : 'desktop')
}