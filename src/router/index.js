
import Dash from '@/views/Dash'
import Tasks from '@/views/Tasks'


// import store from '@/store/index'

// const Router = new VueRouter({
//     routes: [
//         {
//             path: 'about-us',
//             component: AboutUsPage
//         }
//     ]
// })

// export default router

export default [
	{ path: '/', component: Dash},
	{ path: '/tasks', component: Tasks},
]
