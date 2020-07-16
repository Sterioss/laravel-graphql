import VueApollo from 'vue-apollo'
import Vue from 'vue'
import apolloClient from '@/ApolloClient'

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})
export default apolloProvider
