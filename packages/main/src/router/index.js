
import RightOne from '@/pages/right/one'
import Qiankun from '@/pages/qiankun'
const routes = [
    {
        name: 'home',
        path: '/home',
        routes: [
            {
                name: 'right-one',
                path: '/home/right-one',
                component: RightOne,
                exact: true
            }

        ]
    }
]

function findSubs(localRoutes) {
    const rousss = localRoutes.map(e => e.routes ? findSubs(e.routes) : e)
    console.log(rousss)
    return rousss
}
console.log('扁平化处理')
console.log(findSubs(routes)[0])
// export default routes;
export default findSubs(routes)[0]